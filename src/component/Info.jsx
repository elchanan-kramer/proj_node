import React,{useEffect,useState} from 'react'

function Info() {
  const [files, setFiles] = useState([]);
  const url = window.location.href.split('/')[3]
    console.log(url);
  useEffect(() => {
    fetch(`http://localhost:5001/${url}/info`)
      .then((files) => files.json())
      .then((files) => {
        console.log(files);
        setFiles(files);

        console.log(files);
      });
  }, []);

  return (
    <div>{files&&Object.entries(files).map((item,idx)=>
      <h3 key={idx}>{item[0]}:{item[1]}</h3>
    )}</div>
  )
}

export default Info