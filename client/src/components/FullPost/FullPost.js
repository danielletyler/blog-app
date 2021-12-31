import React from "react";
import { Typography, Box } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import moment from "moment";
import useStyles from "./styles";

const FullPost = () => {
  const classes = useStyles();
  const location = useLocation();
  const post = location.state.post;

  return (
    <div>
      <Typography>{moment(post.createdAt).format("MMMM Do, YYYY")}</Typography>
      <Typography
        style={{
          paddingBottom: 10,
          fontSize: "30px",
        }}
      >
        {post.title}
      </Typography>
      <Box container style={{ textAlign: "center", marginBottom: 10 }}>
        <img className={classes.pic} item alt="" src={post.selectedFile} />

        <Typography
          item
          style={{
            textAlign: "justify",
            whiteSpace: "pre-wrap",
          }}
        >
          {post.message}
        </Typography>
      </Box>
    </div>
  );
};
export default FullPost;
