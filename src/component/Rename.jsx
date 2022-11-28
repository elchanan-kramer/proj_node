import React, { useEffect, useState } from "react";

function Rename() {
  const [files, setFiles] = useState("");
  const url = window.location.href.split("/")[3];
  console.log(url);

  const send = () => {
    fetch(`http://localhost:5001/${url}/rename`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({"name":files}),

    });
  };

  return (
    <div>
        <br />
      <input 
        type="text"
        value={files}
        onChange={(e) => setFiles(e.target.value)}
      />
      <br />
      <button 
        onClick ={() => {
          send();
        }}
      >
        send
      </button>
    </div>
  );
}

export default Rename;
