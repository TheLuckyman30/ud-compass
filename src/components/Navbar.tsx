export function Navbar({ children }: { children: React.ReactNode }) {
  return (
    <nav
      id="navbar"
      className="p-3 fixed bg-ud-darkBlue text-white border-b-2 border-b-ud-yellow w-screen z-10"
    >
      <div className="flex justify-center items-center w-full sm:max-w-7xl mx-auto gap-2">
        {children}
      </div>
    </nav>
  );
}
