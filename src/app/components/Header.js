import Link from "next/link";
import Navigation from "./Navigation";
import Image from "next/image";
export default function Header() {
  return (
    <>
      <header className="main-header  d-flex justify-content-between">
        <div className="navbar-brand">
          <Link href="/">
            <Image src="/rev.webp" alt="logo" width={150} height={34} />
          </Link>
        </div>
        <Navigation/>
      </header>
      
    </>
  );
}
