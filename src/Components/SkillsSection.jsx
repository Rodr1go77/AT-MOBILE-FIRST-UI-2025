import * as React from "react";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import SkillCard from "./SkillCard";

export default function SkillsSections({ skills }) {
  return (
    <>
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          color: "black",
        }}
      >
        {"Minha Auto Avaliação".toUpperCase()}
      </Typography>

      <Stack
        direction="row"
        flexWrap="wrap"
        spacing={0.5}
        justifyContent="space-evenly"
        rowGap={1}
      >
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            title={skill.title}
            score={skill.score}
            maxScore={skill.maxScore}
          />
        ))}
      </Stack>
    </>
  );
}
