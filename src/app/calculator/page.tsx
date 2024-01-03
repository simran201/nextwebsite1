import Image from "next/image";
import Calculatr from "../../../public/assets/calc.jpg";
const Calculator = () => {
  return (
    <div className="container pt-40 calculator-page">
      <div className="main-heading text-left py-3 p-4">
        <h2>Calculator</h2>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <Image src={Calculatr} alt="/" width={500} height={300} />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="subtitle text-center">
            <h3>About Project</h3>
          </div>
          <div className="project-content py-4">
            <p>
              This is a simple calculator app that can perform basic arithmetic
              operations such as addition, subtraction, multiplication, and
              division. It is built with NEXT JS only.. A simple NEXTJS
              Calculator. This is a simple calculator tkinter module.To build a
              calculator that’s robust, you need to make your calculator
              resilient to weird input patterns. To do so, you have to imagine a
              troublemaker who tries to break your calculator by hitting keys in
              the wrong order. Let’s call this troublemaker Tim.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
