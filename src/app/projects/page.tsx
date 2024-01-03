import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const projectData = [
    { category: "Next Projects", title: "Calculator", link: "/calculator" },
    { category: "Next Projects", title: "Calculator", link: "/calculator" },
    { category: "Javascript", title: "To-do-App", link: "/property" },
    { category: "React Projects", title: "Portfolio", link: "/property" },
    { category: "Js Projects", title: "Fitness App", link: "/property" },
  ];

  return (
    <>
    <div className="container">
      <div className="row  cards py-5 ">
        {projectData.map((project, index) => (
          <div key={index} className="col-lg-3 col-md-3 card ">
            <div className="card-info">
              <span className="card-category">{project.category}</span>
              <h4 className="card-title">{project.title}</h4>
              {project.link && (
                <Link href={project.link}>
                  <button className="btn btn-primary">View Project</button>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
      </div>
    </>
  );
}
