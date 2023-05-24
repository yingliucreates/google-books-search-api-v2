const Grid = ({ children, onDetailClick, displayModal }) => {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 z-0 mt-5 overflow-y-auto h-full ml-10 mr-10">
      {children.map((child) => (
        <div
          className={
            displayModal
              ? "blur flex flex-col m-54 items-center"
              : "flex flex-col m-54 items-center  hover:bg-fuchsia-300 cursor-pointer"
          }
          key={child.id}
          onClick={() => {
            onDetailClick(child.id);
          }}
        >
          <div className="h-1/2">
            <img className="pt-2 w-16" src={child.image} />
          </div>

          <div className="m-5 h-1/2">
            <p className="mt-0.5 self-start font-bold text-xs">
              {child.authors}
            </p>
            <p className="mt-1 self-start font-medium italic">{child.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Grid;
