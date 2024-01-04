import Link from "next/link";
import Navigation from "./Navigation";
import Image from "next/image";
import Simran from '../../../public/assets/Simran Jaiswal.png'
export default function Header() {
  return (
    <>
      <header className="main-header  d-flex justify-content-between">
        <div className="navbar-brand main-logo">
          <Link href="/">
            <Image src={Simran} alt="logo" width={90} height={70} />
          </Link>
        </div>
        <Navigation/>
      </header>
      
    </>
  );
}
