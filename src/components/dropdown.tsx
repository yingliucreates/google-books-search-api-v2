const Dropdown = ({ children, onClick }) => {
  return (
    <div className="p-2 ml-10 mr-10 bg-slate-300">
      {children.map((child) => (
        <div
          key={child[0]}
          className="flex justify-between"
          onClick={() => onClick(child[0])}
        >
          <p className="w-2/3 truncate">{child[1]}</p>
          <p className="truncate text-fuchsia-600 ">{child[2]}</p>
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
