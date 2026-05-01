export function Navbar({ children }: { children: React.ReactNode }) {
  return (
    <nav
      id="navbar"
      className="w-full p-3 fixed bg-ud-darkBlue text-white border-b-2 border-b-ud-yellow"
    >
      <div className="flex justify-center items-center w-full sm:max-w-7xl mx-auto">
        {children}
      </div>
    </nav>
  );
}
