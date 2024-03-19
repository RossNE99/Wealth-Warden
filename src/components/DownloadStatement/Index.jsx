import React, { useState } from "react";
import { usePDF } from 'react-to-pdf';

function DownloadStatement() {
    //pdf content will go inside this const
    const statementContent = "This will be the statement content";

    const {toPDF, targetRef} = usePDF({filename: 'statement.pdf'});
    const [contentVisible, setContentVisible] = useState(false);

    const handleDownload = () => {
        setContentVisible(true); // Show the content
        toPDF(); // Trigger PDF download
    };

    return (
        <div className="flex flex-col items-center mt-4">
            <button
                className="btn bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
                onClick={handleDownload}>
                Download Statement
            </button>
                <div ref={targetRef}>
                    {statementContent}
                </div>
        </div>
    );
}

export default DownloadStatement;
