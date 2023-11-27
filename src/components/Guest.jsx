import React, { useState, useEffect } from "react";
import Title from "./Title";
import SwiperGuest from "./SwiperGuest";
import { dataUser } from "../data/db";

function Guest() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const listUsers = dataUser.data.results;
    setUsers(listUsers);
  }, []);

  return (
    <section id="testimoni" className="w-full pt-28 bg-secondary mt-6">
      <div className="container">
        <Title title="testimoni" />
        <SwiperGuest users={users} />
      </div>
    </section>
  );
}

export default Guest;
