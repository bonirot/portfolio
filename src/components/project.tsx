import { useEffect, useState } from "react";
import { IProject } from "../utils/interfaces/project";
import { fetchProjects } from "../utils/functions/fetchProject";

export function Project() {
  const [projects, setProjects] = useState([] as IProject[]);

  useEffect(() => {
    fetchProjects(setProjects);
  }, []);

  return (
    <>
      {projects.map((p) => {
        return (
          <div key={p.id} className="project-container">
            <h3>{p.name}</h3>
            <img src={p.img} className="project-img" />
          </div>
        );
      })}
    </>
  );
}

// <div className="project-container">
//   <h3>{props.name}</h3>
//   <img className="project-img" src={props.img} alt={props.name} />
// </div>
