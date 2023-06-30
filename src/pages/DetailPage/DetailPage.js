import { useState, useEffect } from "react";
import axios from "axios";

import CardUser from "../../components/CardUser/CardUser";

import { useParams } from "react-router-dom";

const DetailPage = () => {
  const [char, setChar] = useState({});

  let { id } = useParams();

  console.log(char);

  useEffect(() => {
    axios(`https://my-json-server.typicode.com/HakinGtz/Apiproduct/db/${id}`).then((json) =>
      setChar(json.data.products)
    );
  }, [id]);

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: 20 }}>
      {char.id ? <CardUser char={char} /> : null}
    </div>
  );
};

export default DetailPage;
