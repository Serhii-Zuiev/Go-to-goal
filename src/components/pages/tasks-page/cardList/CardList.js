import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
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
  
  // {cards.map((card) => (
  //   <Card key={card.id} user={card} />
  // ))}