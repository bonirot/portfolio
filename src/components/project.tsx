import { useEffect, useState } from "react";
import { IProject } from "../utils/interfaces/project";
import { fetchProjects } from "../utils/functions/fetchProject";

type ProjProps = {
  t: {
    projects: string;
  };
};

export function Project({ t }: ProjProps) {
  const [projects, setProjects] = useState([] as IProject[]);

  useEffect(() => {
    fetchProjects(setProjects);
  }, []);

  return (
    <>
      <h2>{t.projects}</h2>
      <section className="projects">
        {projects.map((p) => {
          return (
            <div key={p.id} className="project-container">
              <h3>{p.name}</h3>
              <a href={p.github} target="_blank">
                <img src={p.img} className="project-img" />
              </a>
            </div>
          );
        })}
      </section>
    </>
  );
}
