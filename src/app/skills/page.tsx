import Image from "next/image";
import React from "react";
import Html from "../../../public/assets/html.png";
import Css from "../../../public/assets/css.png";
import Javascript from "../../../public/assets/javascript.png";
import ReactImg from "../../../public/assets/react.png";
import Tailwind from "../../../public/assets/tailwind.png";
import Github from "../../../public/assets/github1.png";
import NextJS from "../../../public/assets/nextjs.png";

const Skills = () => {
  return (
    <div className="container pt-30">
      <div className="main-heading text-center px-5 py-3 bg-main ">
        <h2>What Can I do...</h2>
      </div>
      <div className="row py-3">
        <div className="col-lg-2 col-md-2 col-sm-4">
          <Image src={Html} width={64} height={64} alt="/" />
          <div className="items-center py-3 justify-center">
            <h3>HTML</h3>
          </div>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-4">
          <Image src={Css} width={64} height={64} alt="/" />
          <div className="items-center py-3 justify-center">
            <h3>Css</h3>
          </div>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-4">
          <Image src={Javascript} width={64} height={64} alt="/" />
          <div className="items-center py-3 justify-center">
            <h3>Javascript</h3>
          </div>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-4">
          <Image src={ReactImg} width={64} height={64} alt="/" />
          <div className="items-center  py-3 justify-center">
            <h3>React</h3>
          </div>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-4">
          <Image src={Tailwind} width={64} height={64} alt="/" />
          <div className="items-center py-3 justify-center">
            <h3>Tailwind</h3>
          </div>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-4">
          <Image src={NextJS} width={64} height={64} alt="/" />
          <div className="items-center py-3 justify-center">
            <h3>Next</h3>
          </div>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-4">
          <Image src={Github} width={64} height={64} alt="/" />
          <div className="items-center py-3 justify-center">
            <h3>Github</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
