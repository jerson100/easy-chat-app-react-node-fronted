import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { ImageStyle } from "./comment.style";
import { motion } from "framer-motion";
import COMMENT_VARIANTS from "./comment.variants";
import { getFormatedDate } from "../../../../utils/js/date";

const Comment = ({ username, date, img, description, myComment }) => {
  return (
    <Grid
      item
      container
      marginBottom={"1rem"}
      justifyContent={myComment ? "flex-end" : "flex-start"}
      color="white"
    >
      <Grid
        component={motion.div}
        variants={COMMENT_VARIANTS}
        initial="hidden"
        animate="visible"
        container
        item
        border={`solid 1px ${myComment ? "rgb(0 94 83)" : "rgb(19, 47, 76)"}`}
        width="260px"
        padding=".6rem"
        borderRadius="10px"
        backgroundColor={myComment ? "rgb(0 55 49)" : "rgb(0, 30, 60)"}
      >
        {!myComment && (
          <Grid item xs="auto" marginRight={".5rem"}>
            <ImageStyle src={img} alt={username} />
          </Grid>
        )}
        <Grid item flex="1 0 0">
          {!myComment && (
            <Typography
              fontSize={"16px"}
              component="span"
              marginBottom={"1rem"}
              fontWeight="bold"
            >
              {username}
            </Typography>
          )}
          <Box>
            <Typography
              fontSize={"13px"}
              component="p"
              color={"rgb(232 232 232)"}
            >
              {description}
            </Typography>
          </Box>
          <Typography fontSize={"11px"} component="span" color="GrayText">
            <time>{getFormatedDate(date)}</time>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default React.memo(Comment);
