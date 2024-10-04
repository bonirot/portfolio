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
      <section className="projects">
        {projects.map((p) => {
          return (
            <div key={p.id} className="project-container">
              <h3>{p.name}</h3>
              <img src={p.img} className="project-img" />
            </div>
          );
        })}
      </section>
    </>
  );
}
