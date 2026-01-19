import { useSelector } from "react-redux";
import type { RootState } from "../../../shared/api/store";
import { useGetInfo } from "../../../entities/asteroidInfo/useGetInfo";
import { AsteroidScene } from "../AsteroidScene/AsteroidScene";
import styles from "../styles/asteroidInfo.module.css";
import Loader from "../../../shared/UI/Loader";
import AsteroidEmptyState from "./AsteroidEmptyState";
import {
  describeAsteroidSize,
  diametr,
  inclinationValue,
  orbitInfoItems,
  orbitShape,
} from "../utils/asteroidInfo";
import { motion } from "framer-motion";
import { InfoList } from "../utils/orbitData";

const AsteriodInfo = () => {
  const { id } = useSelector((state: RootState) => state.asteroidSlice);
  const { data, isFetching, isLoading } = useGetInfo(id);
  const isHazardous = data?.is_potentially_hazardous_asteroid;
  if (isLoading || isFetching) {
    return <Loader text="Loading asteroid details..." />;
  }
  if (!id) {
    return <AsteroidEmptyState />;
  }
  if (!data) {
    return <div className="text-red-400">Failed to load data</div>;
  }
  const au = 149_597_870;
  const orbitIntersection = data.orbital_data.minimum_orbit_intersection;
  const aphelion = data.orbital_data.aphelion_distance;
  const inclination = data.orbital_data.inclination;
  const max = data.estimated_diameter.kilometers.estimated_diameter_max;
  const min = data.estimated_diameter.kilometers.estimated_diameter_min;
  const e = data.orbital_data.eccentricity;
  const diameterKm = data?.estimated_diameter.kilometers.estimated_diameter_max;
  const dataArc = data.orbital_data.data_arc_in_days;
  const years = Math.floor(dataArc / 365);

  const sizeInfo = describeAsteroidSize(diameterKm);

  const moidKm = Number(orbitIntersection) * au;
  const aphelionKm = Number(aphelion) * au;

  const isProps =
    isHazardous !== undefined && diameterKm && inclination && moidKm;
  const orbitInfo = orbitInfoItems({
    orbitShape,
    e,
    moidKm,
    aphelionKm,
    inclinationValue,
    inclination,
    years,
  });

  return (
    <div className={styles.infoWrapper}>
      {isProps ? (
        <AsteroidScene
          isHazardous={isHazardous ?? false}
          diameterKm={diameterKm}
          inclinationDeg={Number(inclination)}
          moidKm={moidKm}
        />
      ) : (
        <Loader />
      )}
      <div className="flex flex-col gap-2 bg-[#12233877] rounded-xl p-4 backdrop-blur-md border border-white/10">
        <h6 className="uppercase text-slate-400 text-l tracking-widest">
          Asteroid info
        </h6>
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-1">
            <p className="text-lg font-bold">{data.name}</p>
            <div
              className={`
    inline-flex text-sm font-medium
    ${
      data.is_potentially_hazardous_asteroid === true
        ? "text-red-400"
        : "text-emerald-400"
    }
  `}
            >
              {data.is_potentially_hazardous_asteroid === true
                ? "Potentially hazardous"
                : "Safe trajectory"}
            </div>
          </div>
          <div className="flex flex-col gap-1 text-left">
            <p className="text-sm text-slate-300">
              Diameter ~{diametr(min, max)} km
            </p>

            <p className={`text-xs font-semibold ${sizeInfo.color}`}>
              {sizeInfo.description}
            </p>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
        className="bg-[#0e1b2d88] rounded-xl p-4 backdrop-blur-md border border-white/10"
      >
        <h6 className="uppercase text-slate-400 text-l tracking-widest mb-3">
          Orbit data
        </h6>
        <InfoList items={orbitInfo} />
      </motion.div>
    </div>
  );
};

export default AsteriodInfo;
