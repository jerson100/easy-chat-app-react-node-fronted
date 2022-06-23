import { Grid, Typography } from "@mui/material";
import React from "react";
import ComentAction from "../ComentAction";
import CommentList from "../CommentList";

// const comments = [
//   {
//     username: "jerson",
//     description: "Descripci{ñon de comentario de ejemplo para vosotros...",
//     date: "Hace 15minutos",
//     img: "https://picsum.photos/id/237/200/300",
//     myComment: false,
//   },
//   {
//     username: "jerson",
//     description: "Descripci{ñon de comentario de ejemplo para vosotros...",
//     date: "Hace 15minutos",
//     img: "https://picsum.photos/id/238/200/300",
//     myComment: true,
//   },
//   {
//     username: "jerson",
//     description: "Descripci{ñon de comentario de ejemplo para vosotros...",
//     date: "Hace 15minutos",
//     img: "https://picsum.photos/id/239/200/300",
//     myComment: false,
//   },
//   {
//     username: "jerson",
//     description: "Descripci{ñon de comentario de ejemplo para vosotros...",
//     date: "Hace 15minutos",
//     img: "https://picsum.photos/id/240/200/300",
//     myComment: true,
//   },
//   {
//     username: "jerson",
//     description: "Descripci{ñon de comentario de ejemplo para vosotros...",
//     date: "Hace 15minutos",
//     img: "https://picsum.photos/id/241/200/300",
//     myComment: false,
//   },
//   {
//     username: "jerson",
//     description: "Descripci{ñon de comentario de ejemplo para vosotros...",
//     date: "Hace 15minutos",
//     img: "https://picsum.photos/id/242/200/300",
//     myComment: false,
//   },
//   {
//     username: "jerson",
//     description: "Descripci{ñon de comentario de ejemplo para vosotros...",
//     date: "Hace 15minutos",
//     img: "https://picsum.photos/id/243/200/300",
//     myComment: false,
//   },
//   {
//     username: "jerson",
//     description: "Descripci{ñon de comentario de ejemplo para vosotros...",
//     date: "Hace 15minutos",
//     img: "https://picsum.photos/id/244/200/300",
//     myComment: false,
//   },
//   {
//     username: "jerson",
//     description: "Descripci{ñon de comentario de ejemplo para vosotros...",
//     date: "Hace 15minutos",
//     img: "https://picsum.photos/id/220/200/300",
//     myComment: true,
//   },
// ];

const UserComment = () => {
  return (
    <Grid
      container
      item
      xs={12}
      sm={"auto"}
      flexGrow={{ sm: 1 }}
      direction="column"
    >
      <Grid item padding="1rem">
        <Typography
          variant="h6"
          component="h2"
          textAlign={"center"}
          color="white"
        >
          Chat General
        </Typography>
      </Grid>
      <Grid container item flex="1 0 0" flexDirection="column">
        <CommentList />
        <ComentAction />
      </Grid>
    </Grid>
  );
};

export default UserComment;
