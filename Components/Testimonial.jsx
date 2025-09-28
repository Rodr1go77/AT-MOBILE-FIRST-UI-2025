import * as React from "react";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";

export default function Testimonial() {
  return (
    <>
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          color: "black",
        }}
      >
        {"Meu Depoimento".toUpperCase()}
      </Typography>

      <Stack sx={{ p: 2 }}>
        <Typography variant="body1" textAlign={"justify"}>
          Sou desenvolvedor front-end em transição de carreira dentro do setor
          financeiro, com experiência em low-code, automação em Python, Power
          Platform e BI.
        </Typography>
        <br/>
        <Typography variant="body1" textAlign={"justify"}>
          Tenho certificação Microsoft Data Analyst, MBA em Data Science &
          Analytics e atualmente curso Análise e Desenvolvimento de Sistemas.
          Além da sólida vivência em tecnologia, atuo há mais de 15 anos no
          setor financeiro, conciliando visão analítica com experiência prática
          em soluções digitais.
        </Typography>
        <br/>
        <Typography variant="body1" textAlign={"justify"}>
          Atualmente exerço atividades no setor de soluções em TI da
          Centralizadora Nacional de Habitação - Pessoa Física com foco em
          desenvolvimento de soluções de automação (MS Power Platform e Python).
        </Typography>
        <br/>
        <Typography variant="body1" textAlign={"justify"}>
         Estou disponível para atuação de forma remota em colocação part-time ou
          prestação de serviços na área de dados, desenvolvimento web e/ou
          automação.
        </Typography>
      </Stack>
    </>
  );
}
