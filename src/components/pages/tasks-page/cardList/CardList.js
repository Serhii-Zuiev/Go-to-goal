import React from "react";
import { connect } from "react-redux";
import Card from "../card/Card";
import css from "../cardList/cardList.module.css";
import { getTasks } from "../../../../redux/operations";

function CardList() {
  return (
    <ul className={css.cardList}>
      <Card />
    </ul>
  );
}

export default connect(null, { getTasks })(CardList);
