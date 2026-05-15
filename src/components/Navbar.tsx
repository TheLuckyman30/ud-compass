import "@css/components/navbar.css";

export function Navbar({ children }: { children: React.ReactNode }) {
  return (
    <nav id="navbar" className="navbar">
      <div className="nav-container ">{children}</div>
    </nav>
  );
}
