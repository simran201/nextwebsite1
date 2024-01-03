import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from "../../../public/assets/about.jpg";

const About = () => {
  return (
    <div className="container pt-40 about-page">
    <div className="row">
    <div className="col-lg-6 col-md-6 col-sm-12 ">
        <div className="subtitle text-center">
          <h3>Something About me !</h3>
        </div>
        <div className="project-content py-2">
       
          <p className='py-1 text-gray-600'>
            I specialize in building mobile responsive front-end UI applications
            that connect with API’s and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using HTML, CSS, Javascript, and
            React, I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.
          </p>
         
          <Link href='/projects'>
            <p className='py-2 text-blue-600 cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        </div>
      <div className="col-lg-6 col-md-6 col-sm-12 p-4">
        <Image src={AboutImg} alt="/" width={450} height={300} className='' />
      </div>
   
      </div>
    </div>
  
   
  );
};

export default About;