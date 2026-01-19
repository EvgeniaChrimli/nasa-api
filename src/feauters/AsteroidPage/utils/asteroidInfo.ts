type AsteroidSizeInfo = {
  label: string;
  description: string;
  color: string;
};

export function describeAsteroidSize(diameterKm: number): AsteroidSizeInfo {
  if (diameterKm < 0.05) {
    return {
      label: "Very small",
      description: "Comparable to a bus or a small house",
      color: "text-slate-400",
    };
  }

  if (diameterKm < 0.2) {
    return {
      label: "Small",
      description: "Comparable to a large building",
      color: "text-green-400",
    };
  }

  if (diameterKm < 1) {
    return {
      label: "Medium",
      description: "Comparable to a city district",
      color: "text-yellow-400",
    };
  }

  if (diameterKm < 10) {
    return {
      label: "Large",
      description: "Comparable to a mountain range",
      color: "text-orange-400",
    };
  }

  return {
    label: "Very large",
    description: "Comparable to a small island",
    color: "text-blue-400",
  };
}
interface OrbitInfoProps {
  orbitShape: (e: string) => string;
  e: string;
  moidKm: number;
  aphelionKm: number;
  inclinationValue: (inclination: string) => string;
  inclination: string;
  years: number;
}

export const orbitInfoItems = ({
  orbitShape,
  moidKm,
  e,
  aphelionKm,
  inclinationValue,
  inclination,
  years,
}: OrbitInfoProps) => {
  return [
    {
      label: "Orbit shape",
      value: orbitShape(e),
    },
    {
      label: "Earth proximity",
      value: `${moidKm} km`,
    },
    {
      label: "Aphelion distance",
      value: `${aphelionKm} million km`,
    },
    {
      label: "Inclination",
      value: inclinationValue(inclination),
    },
    {
      label: "Observation history",
      value: `${years} years`,
    },
  ];
};
export const diametr = (min: number, max: number) => {
  const diametr = (min + max) / 2;
  return Math.round(diametr);
};
export const orbitShape = (e: string) => {
  if (Number(e) < 0.2) return "Nearly circular";
  if (Number(e) < 0.5) return "Moderately elliptical";
  return "Highly elongated";
};

export const inclinationValue = (inclination: string) => {
  if (Number(inclination) < 5)
    return `${Math.round(Number(inclination))}° normal`;
  if (Number(inclination) < 15)
    return `${Math.round(Number(inclination))}° medium`;
  return `${Math.round(Number(inclination))}° hight`;
};
