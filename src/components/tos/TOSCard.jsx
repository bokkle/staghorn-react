const TOSCard = ({ index, title, arr, description }) => {
  return (
    <div
      key={title}
      className={`flex flex-col gap-2 ${index < arr.length - 1 && 'border-b border-stone-600'} pb-6`}
    >
      <h2 className="text-2xl font-semibold text-emerald-400">{title}</h2>
      {description.map((para, i) => (
        <p key={i} className="text-stone-50">
          {para}
        </p>
      ))}
    </div>
  );
};

export default TOSCard;
