import About from "./about/page";
import Image from "next/image";
import Link from "next/link";
import ProfileImg from '../../public/assets/profile (2).jpg'
export default function Home(props: any) {
  return (
    <>
      <div className="container h-screen text-center pt-40 ">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className=" flex justify-center items-center">
              <div>
                <p className="uppercase text-sm tracking-widset category-heading">
                  LET'S BUILD SOMETHING TOGETHER
                </p>
                <h1 className=" text-gray-700">
                  Hi, I'm <span className="text-[#5651e5]">Simran Jaiswal</span>
                </h1>
                <h4 className="category-heading">A Frontend Developer</h4>
                <p className=" px-5 text-gray-600 max-w[70%] m-auto">
                  I am a front-end developer who creates websites and
                  applications using web languages such as HTML, CSS, and
                  JavaScript that allow users to access and interact with the
                  site or app.
                </p>
                <div className="flex items-center justify-between max-w-[330px] m-auto py-4"></div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <Image src={ProfileImg} alt="/" width={260} height={260} className="profile-img "/>
          </div>

        </div>
        <Link href='/about' className="p-2">
           <h5>Know More About Me...</h5>
          </Link>
      </div>
    </>
  );
}
