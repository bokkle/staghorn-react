const FooterCopyright = () => {
  return (
    <>
      <hr className="mb-2 border-stone-700" />
      <p className="my-4 text-center text-lg capitalize text-stone-400">
        copyright &copy; staghorn Tree Service {new Date().getFullYear()}
      </p>
      <p className="text-center text-stone-400">
        Developed by{' '}
        <a href="https://roseway.io/" target="_blank" className="underline">
          <span className="hover:text-stone-200">Roseway</span>
        </a>
      </p>
    </>
  );
};

export default FooterCopyright;
