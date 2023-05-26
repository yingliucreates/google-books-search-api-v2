const Cell = (book, onClick, displayModal) => {
  return (
    <div
      className={
        displayModal
          ? "blur flex flex-col m-54 items-center"
          : "flex flex-col m-54 items-center  hover:bg-fuchsia-300 cursor-pointer"
      }
      // key={book.id}
      // onClick={() => {
      //   onClick(book.id);
      // }}
    >
      <div className="h-1/2">
        <img className="pt-2 w-16" src={book.image} />
      </div>

      <div className="m-5 h-1/2">
        <p className="mt-0.5 self-start font-bold text-xs">{book.authors}</p>
        <p className="mt-1 self-start font-medium italic">{book.title}</p>
      </div>
    </div>
  );
};

export default Cell;
