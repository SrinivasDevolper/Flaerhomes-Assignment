import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>NotFound</h1>
      <button onClick={() => navigate("/")}>Go to Home page</button>
    </div>
  );
}

export default NotFound;
