import React from "react";
import { Outlet } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Delete from "./Delete"
const Index = () => {
  const url = window.location.href.split("/")[3];
  console.log(url);
  return (
    <div>
      <a className="btn btn-primary" href={`/${url}/info`}>info</a>{" "}
      <a className="btn btn-primary" href={`/${url}/show`}>show</a>{" "}
      <a className="btn btn-primary" href={`/${url}/rename`}>rename</a>{" "}
      <a className="btn btn-primary" href={`/${url}/copy`}>copy</a>{" "}
      <a onClick={Delete} className="btn btn-primary" href={`/${url}/delete`}>delete</a>{" "}
      <Outlet />
    </div>
  );
};

export default Index;
