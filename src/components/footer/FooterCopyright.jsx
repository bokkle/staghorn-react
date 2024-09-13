const FooterCopyright = () => {
  return (
    <>
      <hr className="mb-2 border-zinc-700" />
      <p className="my-4 text-center text-lg capitalize text-zinc-400">
        copyright &copy; staghorn Tree Service {new Date().getFullYear()}
      </p>
      <p className="text-center text-zinc-400">
        Developed by{' '}
        <a href="https://roseway.io/" target="_blank" className="underline">
          <span className="hover:text-zinc-200">Roseway</span>
        </a>
      </p>
    </>
  );
};

export default FooterCopyright;
