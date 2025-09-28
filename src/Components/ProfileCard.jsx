import * as React from "react";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import { Typography, List, ListItem, ListItemText } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export default function ProfileCard({ nome, imagem, info1, info2, info3 }) {
  return (
    <Stack
      direction="column"
      spacing={0}
      sx={{ p: { xs: 1.5, sm: 2, md: 3 }, alignItems: "left" }}
    >
      <Avatar
        alt={nome}
        src={imagem}
        sx={{
          width: { xs: 65, sm: 80, md: 90 },
          height: { xs: 65, sm: 80, md: 90 },
          border: "3px solid #0ebe75",
        }}
      />
      <Stack
        sx={{
          spacing: 1,
          direction: "column",
          alignItems: "left",
          border: "none",
          margin: 0,
        }}
      >
        <Typography variant="subtitle1" sx={{ fontWeight: "bold", marginBottom: 1 }}>
          {nome}{" "}
        </Typography>
        <Typography variant="body1">
          <PlayArrowIcon fontSize="small" sx={{ color: "#0ebe75"}} /> {info1}
        </Typography>
        <Typography variant="body1">
          <PlayArrowIcon fontSize="small" sx={{ color: "#0ebe75" }} /> {info2}
        </Typography>
        <Typography variant="body1">
          <PlayArrowIcon fontSize="small" sx={{ color: "#0ebe75" }} /> {info3}
        </Typography>
      </Stack>
    </Stack>
  );
}
