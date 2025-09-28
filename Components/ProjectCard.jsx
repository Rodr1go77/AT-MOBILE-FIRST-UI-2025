import * as React from "react";
import Stack from "@mui/material/Stack";
import { Card, CardMedia, CardContent, Typography, Link } from "@mui/material";
import Divider from '@mui/material/Divider';

export default function ProjectCard({ title, descricao, link, image }) {
  return (
    <Stack sx={{ margin: 0, border: 0 }}>
      <Card>
        <CardContent>
          <CardMedia
            component="img"
            alt= {title}
            title={title}
            height="140"
            image={image}
          />
          <Typography gutterBottom variant="h5" component="div" marginTop={1}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {descricao}
          </Typography>
          <Link href={link} variant="body2">
            Acessar
          </Link>
        </CardContent>
      </Card>
          <Divider sx={{mt: 4}}></Divider>
    </Stack>
  );
}
