import Link from "next/link";

export default function Navigation() {
  return (
    <>
      <nav className="main-navbar d-flex">
        <div className="">
          <ul className="navbarlist d-flex">
            <li className="navbaritem">
                <Link href="/" className=" nav-link">Home</Link>
            </li>
            <li className="navbaritem">
                <Link href="/about"className=" nav-link">About</Link>
            </li>
            <li className="navbaritem">
                <Link href="/projects"className=" nav-link">Projects</Link>
            </li>
            <li className="navbaritem">
                <Link href="/contact"className=" nav-link">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
