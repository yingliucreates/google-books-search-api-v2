const Grid = ({ children, onDetailClick }) => {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 z-0 mt-5 overflow-y-auto h-128 ml-10 mr-10">
      {children.map((child) => (
        <div
          className="flex flex-col m-54 items-center hover:bg-fuchsia-300 cursor-pointer"
          key={child.id}
          onClick={() => {
            onDetailClick(child.id);
          }}
        >
          <img className="pt-2 w-16" src={child.image} />
          <div className="m-5">
            <p className="mt-1 self-start">{child.authors}</p>
            <p className="mt-1 self-start">{child.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Grid;
