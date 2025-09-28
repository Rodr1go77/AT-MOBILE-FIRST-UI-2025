import * as React from "react";
import Typography from "@mui/material/Typography";

export default function Header() {
  return (
    <>
      <Typography
        variant="h5"
        sx={{ textAlign: "center", color: "black", pt: 1 }}
      >
        ASSESSMENT
      </Typography>

      <Typography
        sx={{
          textAlign: "center",
          color: "#0ebe75",
          fontWeight: "bold",
          fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
          pt: 1,
        }}
      >
        Mobile First UI com React
      </Typography>
    </>
  );
}
