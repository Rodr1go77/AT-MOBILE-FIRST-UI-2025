import * as React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box"

export default function SkillCard({ title, score, maxScore }) {
  return (
    <Stack
      sx={{
        width: 300,
        height: 80,
        p: 1.5,
        border: "2px solid #0ebe75",
        borderRadius: 2,
        mb: 1,
      }}
      spacing={0.5}
      justifyContent="center"
    >
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        {title}
      </Typography>
      <Box sx={{display: "flex",flexDirection:"row", alignItems: "baseline", columnGap: 2 }}>
      <Typography variant="body1">
        Score: <Box component="span" sx={{fontWeight:"bold", fontSize: "2rem", color: "#0ebe75"}}> {score} </Box>
      </Typography>
      <Typography variant="body1">
        MaxScore: {maxScore}
      </Typography>
      </Box>
    </Stack>
  );
}