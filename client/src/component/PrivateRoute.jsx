/** @format */
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Spinner from "./Loader.jsx";

export default function PrivateRoute() {
  const auth = JSON.parse(localStorage.getItem("_L"));

  const [ok, setOk] = useState(false);
  useEffect(() => {
    checkAdmin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  async function checkAdmin() {
    const data = await fetch("http://localhost:8080/api/v1/auth/admin-check", {
      headers: { Authorization: auth.token },
    });
    const result = await data.json();
    if (result.success) {
      setOk(false);
    }
  }
  return auth && !ok ? <Outlet /> : <Spinner />;
}
