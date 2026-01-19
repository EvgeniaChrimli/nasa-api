import ScrollAsteroid from "../feauters/AsteroidPage/Components/ScrollAsteroid";
import AsteriodInfo from "../feauters/AsteroidPage/Components/AsteriodInfo";
import AsteroidChart from "../feauters/AsteroidPage/Components/AsteroidChart";

function AsteroidPage() {
  return (
    <div className="flex justify-between gap-3 p-4">
      <div className="flex flex-col">
        <AsteriodInfo />
        <AsteroidChart />
      </div>
      <ScrollAsteroid />
    </div>
  );
}

export default AsteroidPage;
//home
