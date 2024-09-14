const PrivacyCard = ({ title, index, arr, description }) => {
  return (
    <div
      key={title}
      className={`flex flex-col gap-2 ${index < arr.length - 1 && 'border-b border-zinc-600'} pb-6`}
    >
      <h2 className="text-2xl font-semibold capitalize text-emerald-400">
        {title}
      </h2>
      {description.map((para, i) => (
        <p key={i} className="text-zinc-50">
          {para}
        </p>
      ))}
    </div>
  );
};

export default PrivacyCard;
