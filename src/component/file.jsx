import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav } from "react-bootstrap";

const api = axios.create({ baseURL: "http://localhost:5001/" });
const File = () => {
  const [files, setFiles] = useState([]);
  console.log(files);

  const size = (f) => {
    const a = f.split(".");
    return a[a.length - 1];
  };
  //   const size1 = (f) => {
  //     const a = f.split(".");
  //     return a[a.length - 2];
  //   };
  useEffect(() => {
    fetch("http://localhost:5001")
      .then((files) => files.json())
      .then((files) => {
        // console.log(files);
        setFiles(files);

        console.log(files);
      });
  }, []);

  return (
    <div>
      {files &&
        files.map((file, idx) => (
          <Card
          key={idx}
            style={{
              width: "18rem",
              border: "1px solid ",
              display: "inline-block",
            }}
          >
            <Card.Img
              width={80}
              variant="top"
              src={
                size(file) === "html"
                  ?"https://cdn-icons-png.flaticon.com/512/103/103077.png"
                  : size(file) === "pdf" ? "https://www.y4pc.co.il/images/Guides/01-16/how-to-create-pdf-file/how-to-create-pdf-file6.jpg"
                  : "https://cdn.pixabay.com/photo/2013/07/12/16/58/folder-151584__340.png"
                  
              }
            />
            <Card.Body>
              <Card.Title>{file}</Card.Title>
              <Card.Text></Card.Text>

              <Button
                variant="primary"
              href={file}
              >
                show more
              </Button>
            </Card.Body>

            
          </Card>
        ))}

      <Outlet />
    </div>
  );
};

export default File;
