import * as React from "react";
import Stack from "@mui/material/Stack";
import { Typography, Divider } from "@mui/material";
import ProjectCard from "./ProjectCard";

export default function ProjectSection({ projects }) {
  return (
    <>
      <Typography variant="h5" sx={{ textAlign: "center", color: "black" }}>
        {"Meus Projetos".toUpperCase()}
      </Typography>
      <Stack>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            descricao={project.descricao}
            link={project.link}
            image={project.image}
          />
        ))}
      </Stack>
    </>
  );
}
