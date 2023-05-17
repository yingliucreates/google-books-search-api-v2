const Dropdown = ({ children }) => {
  return (
    <div className="p-2 ml-10 mr-10 bg-slate-300">
      {children.map((child) => (
        <p>{child}</p>
      ))}
    </div>
  );
};

export default Dropdown;
