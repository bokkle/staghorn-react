const FooterMisc = () => {
  return (
    <>
      <a href="" className="capitalize text-neutral-100 hover:underline">
        privacy policy
      </a>
      <p className="text-center capitalize text-neutral-100">
        copyright &copy; {new Date().getFullYear()} staghorn tree services
      </p>
      <p className="text-neutral-400">
        Developed by{' '}
        <a
          href="https://roseway.io"
          target="_blank"
          className="capitalize hover:underline"
        >
          roseway
        </a>
      </p>
    </>
  );
};

export default FooterMisc;
