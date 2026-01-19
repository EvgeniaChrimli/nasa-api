import type { NearEarthObject } from "../../../shared/api/scema";
import { useAppDispatch, type RootState } from "../../../shared/api/store";
import styles from "../styles/asteroidList.module.css";
import { useSelector } from "react-redux";
import { setAsteroidId } from "../AsteroidSlice/asteroidSlice";

interface AsteroidListProps {
  list: NearEarthObject[];
  totalElements?: number;
}
const AsteroidList = ({ list }: AsteroidListProps) => {
  const dispatch = useAppDispatch();
  const { id } = useSelector((state: RootState) => state.asteroidSlice);
  const handleClickInfio = (id: string) => {
    dispatch(setAsteroidId(id));
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold">Asteroid stream</h3>
      </div>
      <p className="text-slate-400">Scroll to explore</p>
      {list.map((el) => {
        const isActive = el.id === id;
        return (
          <div
            key={el.id}
            className={`
    ${styles.listWrapper}
    ${isActive ? styles.active : ""}
    cursor-pointer
    transition-all duration-200 ease-out
    hover:bg-slate-800/50
    hover:shadow-lg
    hover:-translate-y-1
  `}
            onClick={() => handleClickInfio(el.id)}
          >
            <div className="flex justify-between items-center gap-3 mb-2 font-bold">
              <div className={styles.listTitle}>{el.name_limited}</div>
              <div
                className={`
    inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium
    ${
      el.is_potentially_hazardous_asteroid === true
        ? "bg-red-500/20 text-red-400"
        : "bg-emerald-500/20 text-emerald-400"
    }
  `}
              >
                {el.is_potentially_hazardous_asteroid === true
                  ? "Potentially hazardous"
                  : "Safe trajectory"}
              </div>
            </div>
            <div className="flex items-center gap-2 justify-between mb-1">
              <p>Astronaut observation days: </p>
              <p>{el.orbital_data.data_arc_in_days}</p>
            </div>
            <div className="flex items-center gap-2 justify-between mb-1">
              <p>First observation date: </p>
              <p>{el.orbital_data.first_observation_date}</p>
            </div>
            <div className="flex items-center gap-2 justify-between mb-1">
              <p>Last observation date: </p>
              <p>{el.orbital_data.last_observation_date}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default AsteroidList;
