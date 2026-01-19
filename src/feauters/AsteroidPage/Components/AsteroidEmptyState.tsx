const AsteroidEmptyState = () => {
  return (
    <div className="flex flex-col gap-4 items-center bg-[#12233877] rounded-xl p-3">
      <p className="uppercase">selection overview</p>
      <p className="text-2xl font-bold">☄️ No asteroid selected</p>
      <p className="text-1xl">
        Select an asteroid from the list to explore its orbit and potential risk
      </p>
    </div>
  );
};

export default AsteroidEmptyState;
