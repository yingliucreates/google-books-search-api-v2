const Dropdown = ({ children, onDetailClick }) => {
  return (
    <div className="ml-10 mr-10 -mt-1 border-4 border-black bg-white">
      {children.map((child) => (
        <div
          key={child.id}
          className="flex justify-between hover:bg-fuchsia-300 cursor-pointer gap-3"
          onClick={() => {
            onDetailClick(child.id);
          }}
        >
          <div className="flex justify-start pb-1 w-2/3 gap-2">
            <img className="h-6 pl-2 pt-1" src={child.image} />
            <p className="truncate">{child.title}</p>
          </div>
          <p className="w-1/3 truncate text-fuchsia-600 text-right">
            {child.authors}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
