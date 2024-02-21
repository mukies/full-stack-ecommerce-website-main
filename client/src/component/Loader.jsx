/** @format */

import React, { useEffect, useState } from "react";
import { Loader } from "semantic-ui-react";
import { useNavigate, useLocation } from "react-router-dom";
import Footer from "./layout/Footer.jsx";

const Spinner = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [timer, setTimer] = useState(3);
    const auth = localStorage.getItem("_L");
    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(pre => --pre);
        }, 1000);
        if (timer === 0) {
            navigate("/login", {
                state: location.pathname
            });
        }
        return () => clearInterval(interval);
    }, [timer]);

    return (
        <>
            <div className='h-[80dvh] flex flex-col justify-center items-center'>
                <Loader active inline='center' />
                <p> Redirecting in {timer} seconds.</p>
            </div>
            <Footer />
        </>
    );
};

export default Spinner;
