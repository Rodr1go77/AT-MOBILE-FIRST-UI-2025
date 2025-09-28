import * as React from "react";
import Box from "@mui/material/Box";
import Header from "./Header";
import ProfileCard from "./ProfileCard";
import SkillsSections from "./SkillsSection";
import Testimonial from "./Testimonial";
import ProjectSection from "./ProjectsSection";

export default function MainBox() {
  const skillsData = [
    { title: "Flex & Grid Layout", score: 9, maxScore: 10 },
    { title: "Media Queries", score: 8, maxScore: 10 },
    { title: "Responsividade", score: 8, maxScore: 10 },
    { title: "Material UI", score: 8, maxScore: 10 },
  ];

  const projectsAll = [
    {
      title: "Site Pessoal",
      descricao:
        "Site portfólio de Rodrigo Bisol, destacando perfil, habilidades técnicas, depoimentos e projetos, com foco em UI responsiva, React, Material UI, automação e análise de dados.",
      link: "https://rodrigobisol.netlify.app/",
      image: "/site_pessoal.png",
    },
    {
      title: "Dashboard em R - Biblioteca Shiny",
      descricao:
        "Aplicação na linguagem R e biblioteca Shiny para monitorar e automatizar registros de contratos imobiliários, com indicadores e relatórios interativos.",
      link: "https://rodrigobisol.shinyapps.io/TCC_R/",
      image: "/dash_shiny.png",
    },
    {
      title: "Card",
      descricao:
        "Card desenvolvido durante a disciplina Programação WEB - HTLM CSS no primeiro semestre de 2025",
      link: "https://originaldevs.netlify.app/dr1/dr1-tp210/",
      image: "/card.png",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: { sm: 600, md: 900, lg: 1200 },
        mx: "auto",
        boxSizing: "border-box",
        p: { xs: 1, sm: 2, md: 2 },
        border: "3px solid #0ebe75",
        borderRadius: 2,
        background: "linear-gradient(to bottom, #F9D29B, #f3fcf8)",
      }}
    >
      <Header />
      <ProfileCard
        imagem="/rodrigo_avatar.png"
        nome="Rodrigo Francisco Bisol"
        info1="Automação em Python"
        info2="Automação com MS Power Platform"
        info3="Desenvolvimento Web em React"
      />
      <SkillsSections skills={skillsData} />
      <Testimonial />
      <ProjectSection projects={projectsAll} />
    </Box>
  );
}
