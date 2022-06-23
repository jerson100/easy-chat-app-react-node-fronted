import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import useAuthContext from "../../../../hooks/useAuthContext";
import useCommentContext from "../../../../hooks/useCommentContext";
import { TextAreaStyle } from "./commenAction.style";

const ComentAction = () => {
  const [comment, setcomment] = useState("");
  const { addComment } = useCommentContext();
  const { user } = useAuthContext();
  const handleChange = (e) => {
    setcomment(e.target.value);
  };
  const handleClick = () => {
    if (comment) {
      addComment({
        description: comment,
        date: new Date(),
        username: user.username,
        img: user.img,
      });
      setcomment("");
    }
  };
  return (
    <Grid
      container
      item
      border="solid 1px rgb(19, 47, 76)"
      alignItems={"center"}
    >
      <Grid
        item
        flexGrow="1"
        paddingLeft={"1rem"}
        paddingTop={"1rem"}
        paddingBottom={"1rem"}
      >
        <TextAreaStyle value={comment} onChange={handleChange}></TextAreaStyle>
      </Grid>
      <Grid item paddingLeft={"1rem"} paddingRight="1rem">
        <Button variant="contained" size="small" onClick={handleClick}>
          Comentar
        </Button>
      </Grid>
    </Grid>
  );
};

export default ComentAction;
