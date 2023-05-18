const Grid = ({ children }) => {
  return (
    <div className="grid gap-4 grid-cols-3 z-0 mt-5 overflow-y-auto h-128 ml-10 mr-10 border border-black ">
      {children.map((c) => (
        <div className="flex flex-col items-center">
          <p>{c}</p>
          <p>dfdf</p>
        </div>
      ))}
    </div>
  );
};

export default Grid;
