import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  pic: {
    float: "left",
    margin: "5px",
    width: "250px",
    paddingRight: 20,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      paddingBottom: 12,
      paddingRight: 0,
      margin: 0,
    },
  },
}));
