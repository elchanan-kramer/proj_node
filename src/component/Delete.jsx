import { React } from "react";

function Delete() {
  const url = window.location.href.split("/")[3]
  fetch(`http://localhost:5001/${url}/delete`, {
    method: "DELETE",})}

export default Delete;
