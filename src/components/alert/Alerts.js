import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Alert, AlertTitle } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  alert: {
    width: "100%",
    height: "80px",
    fontSize: "17px",
    fontFamily: "Montserat, sans-serif",
    position: "absolute",
    zIndex: "5",
    top: "-6px",
    left: "0",
  },
}));

export default function Alerts() {
  const classes = useStyles();

  return (
    <Alert severity="error" className={classes.alert}>
      <AlertTitle>Упсс...</AlertTitle>
      Перевірте ваш імейл або пароль!
    </Alert>
  );
}
