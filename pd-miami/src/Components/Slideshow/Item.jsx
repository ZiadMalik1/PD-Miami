import React from "react";
import { Paper, Button } from "@mui/material";
import "./Item.scss";

const Item = ({ img }) => {
  return (
    <Paper>
      <div className="img-container">
        <img src={img} alt="" className="carousel-image" />
      </div>
    </Paper>
  );
};

export default Item;
