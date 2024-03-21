import React, { useState } from "react";
import { usePDF } from 'react-to-pdf';
import Home from "../../pages/Home"
import Log from "../Log/Index";
import Graph from "../Graph/Index";
import HomePotsContainer from "../HomePotsContainer/Index";
import Logo from "../../assets/Logo.jpg"

function DownloadStatement() {
    //pdf content will go inside this const
    const statementContent = "Placeholder";

    const {toPDF, targetRef} = usePDF({filename: 'statement.pdf'});
    const [contentVisible, setContentVisible] = useState(false);

    const handleDownload = () => {
        setContentVisible(true); // Show the content
        toPDF(); // Trigger PDF download
    };

    return (
        <div className="flex flex-col align-middle items-center mt-4">

            <div ref={targetRef}>
                <h2 className='text-center text-sky-600 text-3xl font-bold m-3 mb-5 bg-clip-text'>Wealth-Warden</h2>
                <div className="navbar-logo">
                    <img className=" mx-auto" src={Logo} alt="Logo" style={{ width: '100', height: 'auto' }} />
                </div>
                <Log/>
                <Graph/>
                <div className="mt-4">
                    <HomePotsContainer/>
                </div>
            </div>

            <button
            className=" btn mt-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
            onClick={handleDownload}>
            Download Statement
            </button>
        </div>
    );
}

export default DownloadStatement;
