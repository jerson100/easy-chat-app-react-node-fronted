import { Grid } from "@mui/material";
import React from "react";
import useCommentContext from "../../../../hooks/useCommentContext";
import Comment from "../Comment";

const CommentList = () => {
  const { comments } = useCommentContext();
  return (
    <Grid
      container
      flexBasis={"0"}
      flexGrow="1"
      justifyContent={"center"}
      overflow={"auto"}
    >
      <Grid
        container
        item
        border="solid 1px rgb(19, 47, 76)"
        flexDirection="column"
        maxWidth={"700px"}
        padding="1rem"
      >
        {comments.map((c, i) => (
          <Comment
            username={c.username}
            description={c.description}
            key={i}
            date={c.date}
            img={c.img}
            myComment={c.myComment}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default CommentList;
