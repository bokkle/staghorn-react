const Fireflies = () => {
  const fireflies = Array.from({ length: 13 }, (_, i) => i + 1);

  return (
    <>
      {fireflies.map((_, i) => (
        <div key={i} className="firefly" />
      ))}
    </>
  );
};

export default Fireflies;
