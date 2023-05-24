const Details = ({ content }) => {
  return (
    <div className="bg-white">
      <div className="overflow-y-auto">
        <div className="mt-12 ml-16 mb-16 flex flex-col w-10/12 m-1/4 gap-1">
          <p className="font-bold">{content.authors}</p>
          <p className="font-medium text-3xl italic">{content.title}</p>
        </div>
        <div className="flex flex-col items-center gap-10">
          <img src={content.image} className="w-80 h-min" />
          <div className="w-2/3 mb-10">
            <p>{content.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
