import React, { useState, useEffect } from "react";
import axios from "axios";
import CardUser from "../CardUser/CardUser";
import "./ListUser.css";

import { Link } from "react-router-dom";

console.log(process.env);

const ListUser = () => {
  const [chars, setChars] = useState([]);

  console.log("chars", chars);

  useEffect(() => {
    axios(`${process.env.REACT_APP_BASE_URL}`).then((json) =>
      setChars(json.data.products)
    );
  }, []);

  return (
    <div className="Cards-List">
      {chars?.map((char) => {
        return (
          <div style={{ margin: 10 }} key={char.id}>
            <Link to={`detail/${char.id}`}>
              <CardUser char={char} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ListUser;
