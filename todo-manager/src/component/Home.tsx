import React from "react";
import useUserStore from "../store";
import { Navigate } from "react-router-dom";

const Home = () => {
  let user = useUserStore((state) => state.user);
  if (user == null) {
    return <Navigate to="/auth" />;
  }
  return (
    <div>
      <h1>Home</h1>
      <p> {user?.email}</p>
    </div>
  );
};

export default Home;
