import React, { useState } from "react";
import { ImageStyle } from "./login.style";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { random } from "../../utils/js/generateRandomNumber";
import useAuthContext from "../../hooks/useAuthContext";
import loginVariants from "./login.variants";

const Login = () => {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [imagen] = useState(
    `https://picsum.photos/id/${random(1, 1000)}/200/300`
  );
  const { user, setuser } = useAuthContext();
  const handleClick = () => {
    if (username !== "") {
      setuser({ username, img: imagen });
      navigate("/chat");
    }
  };
  const handleChange = (e) => {
    setusername(e.target.value);
  };

  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta
          name="description"
          content="Login para acceder al chat básico realizado con React y Node"
        ></meta>
      </Helmet>
      <Box
        backgroundColor="rgba(0, 0, 0, 0.6)"
        display={"flex"}
        alignItems={"center"}
        justifyContent="center"
        minHeight={"100vh"}
      >
        <Card
          sx={{
            maxWidth: 300,
            width: "100%",
            marginLeft: "1rem",
            marginRight: "1rem",
          }}
          variants={loginVariants}
          initial="hidden"
          animate="visible"
          component={motion.div}
        >
          <CardContent>
            <Typography
              variant="h4"
              component="h1"
              color="text.secondary"
              gutterBottom
            >
              Login
            </Typography>
            <TextField
              helperText="Ingrese su nombre de usuario"
              id="demo-helper-text-aligned"
              label="Usuario"
              size="small"
              fullWidth
              margin={"normal"}
              value={username}
              onChange={handleChange}
            />
            <Typography
              variant="h6"
              component="h2"
              color="text.secondary"
              marginBottom={"1rem"}
            >
              Imagen generada
            </Typography>
            <ImageStyle src={imagen} alt="imagen aleatoria" />
            <Box display="flex" justifyContent="flex-end">
              <Button size="small" variant="contained" onClick={handleClick}>
                Ingresar
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default Login;
