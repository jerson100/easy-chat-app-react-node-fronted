import React from "react";
import { motion } from "framer-motion";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { notFoundVariants } from "./notFound.variants";

const NotFound = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };
  return (
    <Box
      minHeight={"100vh"}
      display={"flex"}
      justifyContent="center"
      alignItems={"center"}
    >
      <Box
        marginLeft="1rem"
        marginRight={"1rem"}
        border="solid 1px rgba(0,0,0,.2)"
        borderRadius={"50%"}
      >
        <Typography
          variant="h4"
          color={"white"}
          textAlign="center"
          marginBottom="1rem"
          variants={notFoundVariants.title}
          animate="visible"
          initial="hidden"
          component={motion.h1}
        >
          No se encontró la página que buscabas
        </Typography>
        <Box display="flex" justifyContent="center">
          <Button
            component={motion.button}
            variant="contained"
            onClick={handleClick}
            animate="visible"
            initial="hidden"
            variants={notFoundVariants.button}
          >
            Ir al Login
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default NotFound;
