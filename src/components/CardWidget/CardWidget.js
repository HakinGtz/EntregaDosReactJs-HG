import React from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
const CardWidget = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", width: "40px" }}>
      <AddShoppingCartIcon sx={{ color: "black" }} />
      <p style={{ color: "white", fontSize:"3vh"}}>5</p>
    </div>
  );
};

export default CardWidget;
