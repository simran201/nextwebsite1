
export default function Home(props: any) {
  const projectData = [
    { category: "Next Projects", title: "Calculator" },
    { category: "React Projects", title: "Quiz App" },
    { category: "Javascript", title: "To-do-App" },
    { category: "React Projects", title: "Portfolio" },
    { category: "Js Projects", title: "Fitness App" },
  ];

  return (
    <>
      <div className="row cards  ">
        {projectData.map((project, index) => (
          <div key={index} className="col-3 p-10 card">
            <div className="card-info">
              <span className="card-category">{project.category}</span>
              <h4 className="card-title">{project.title}</h4>
              <button className="btn btn-primary">View Project</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
