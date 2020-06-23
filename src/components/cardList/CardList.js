import React from "react";
import Card from "../card/Card";
import css from "../cardList/cardList.module.css";

function CardList() {
    return (
        <ul className={css.cardList}>
        <Card/>
        </ul>
    )
}

export default CardList;