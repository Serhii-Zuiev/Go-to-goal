import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Alert, AlertTitle } from "@material-ui/lab";
import css from './alert.module.css'

const useStyles = makeStyles((theme) => ({
  alert: {
    width: "100%",
    height: "100%",
    fontSize: "17px",
    fontFamily: "Montserat, sans-serif",

    
  },
}));

export default function Alerts() {
  const classes = useStyles();

  return (
    <div className={css.alertContainer}>
    <Alert severity="error" className={classes.alert}>
      <AlertTitle>Упсс...</AlertTitle>
      Перевірте ваш імейл або пароль!
    </Alert>
    </div>
  );
}
