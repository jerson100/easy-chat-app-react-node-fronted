import { Grid } from "@mui/material";
import { Helmet } from "react-helmet";
import React from "react";
import UserComment from "./components/UserComment";
import { ComentsProvider } from "../../providers/ComentsContext";
import { withSocket } from "../../hoc/widthSocket";

const Chat = ({ io }) => {
  return (
    <>
      <Helmet>
        <title>Chat</title>
        <meta name="description" content="Página principal del chat"></meta>
      </Helmet>
      <Grid container minHeight={"100vh"}>
        {/* <Grid
        item
        xs={12}
        sm={"auto"}
        width={{ sm: "150px" }}
        borderRight={"solid 1px rgba(0,0,0,.2)"}
      >
        <Typography variant="h6" component="h2">
          Usuarios Conectados
        </Typography>
        <UserList users={users} />
      </Grid> */}
        <ComentsProvider io={io}>
          <UserComment />
        </ComentsProvider>
      </Grid>
    </>
  );
};

export default withSocket(Chat);
