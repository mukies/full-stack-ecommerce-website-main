/** @format */
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Spinner from "../Loader.jsx";

export default function AdminRoute() {
  const auth = JSON.parse(localStorage.getItem("_L"));

  const [ok, setOk] = useState(false);
  useEffect(() => {
    checkAdmin();
  }, []);
  async function checkAdmin() {
    const data = await fetch(
      "https://meroshop-3vns.onrender.com/api/v1/auth/admin-check",
      {
        headers: { Authorization: auth.token },
      }
    );
    const result = await data.json();
    console.log(result);
    if (result.success) {
      setOk(true);
    }
  }

  return auth && ok ? <Outlet /> : <Spinner />;
}
