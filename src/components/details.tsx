const Details = ({ content }) => {
  return (
    <div className="max-h-full">
      <div className="pt-12 ml-16 mb-8 flex flex-col w-10/12 m-1/4 gap-1">
        <p className="font-bold">{content.authors}</p>
        <p className="font-medium text-3xl italic">{content.title}</p>
      </div>
      <div className="flex flex-col items-center gap-10">
        <img src={content.image} className="h-80 min-w" />
        <div className="w-2/3 mb-10">
          <p className="">{content.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
