export default function Contact() {
  return (
    <>
      <section className="pt-40 container">
        <div className="main-heading text-center px-5 py-3 bg-main ">
          <h1>Feel Free to Contact Me !</h1>
        </div>
        <form className="px-5 py-2 container">
          <div className="form-group ">
            <label typeof="exampleFormControlInput1" className="py-1">
              Your Name
            </label>
            <input
              type="text"
              className="form-control "
              id="exampleFormControlInput1"
              placeholder="Enter your name..."
            />
          </div>
          <div className="form-group py-4">
            <label typeof="exampleFormControlInput1" className="py-1">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="form-group ">
            <label typeof="exampleFormControlSelect1" className="py-1">
              Select Project
            </label>
            <select className="form-control" id="exampleFormControlSelect1">
              <option>Quiz App</option>
              <option>To-do-list</option>
              <option>Portfolio</option>
              <option>Calculator</option>
            </select>
          </div>

          <div className="form-group py-4">
            <label typeof="exampleFormControlTextarea1" className="py-1 ">
              What You like about the project?
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={4}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary mb-2">
            Submit Here
          </button>
        </form>
      </section>
    </>
  );
}
