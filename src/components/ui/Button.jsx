import React from "react";
import { Button } from "@mui/material";
const CustomButton = ({ value }) => {
  return (
    <Button
      sx={{
        color: "white",
        backgroundColor: "primary.main",
        padding: "8px 16px",
        fontWeight: "bold",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease",
        "&:hover": {
          backgroundColor: "primary.dark",
          color: "white",
          transform: "translateY(-2px)",
          boxShadow: "0 6px 10px rgba(0, 0, 0, 0.15)",
        },
        "&:active": {
          transform: "translateY(0)",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        },
      }}
    >
      {value}
    </Button>
  );
};

export default CustomButton;
