import { IProject } from "../interfaces/project";

export async function fetchProjects(
  setProjects: React.Dispatch<React.SetStateAction<IProject[]>>
) {
  try {
    const response = await fetch("./projects.json");
    const data: IProject[] = await response.json();
    setProjects(data);
  } catch (error) {
    console.log("Message: " + error);
  }
}
