const Navigation = () => {
  return (
    <header className="fixed h-16 w-screen bg-slate-950/80 px-2 backdrop-blur-sm md:px-6 lg:px-8">
      <div className="mx-auto flex h-full max-w-screen-xl items-center justify-between">
        <h1 className="text-base font-bold uppercase text-slate-50 md:text-lg lg:text-xl">
          staghorn
        </h1>
        <nav className="text-slate-50">nav menu</nav>
      </div>
    </header>
  );
};

export default Navigation;
