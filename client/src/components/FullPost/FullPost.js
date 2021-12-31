import { Typography } from "@material-ui/core";
import React from "react";
import { useLocation } from "react-router-dom";

const FullPost = () => {
  const location = useLocation();
  const post = location.state.post;
  return (
    <div>
      <Typography>{post.title}</Typography>
      <Typography>{post.message}</Typography>
    </div>
  );
};
export default FullPost;
