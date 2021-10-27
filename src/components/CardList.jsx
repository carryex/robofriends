import React from "react";
import Card from "./Card";

const CardList = ({ items }) => <div>{items.map(({ name, email, id }) => <Card key={id} name={name} email={email} id={id} />)}</div>

export default CardList;