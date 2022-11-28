import React,{useEffect,useState} from 'react'

function Show() {
  const [files, setFiles] = useState();
  const url = window.location.href.split('/')[3]
    console.log(url);
  useEffect(() => {
    fetch(`http://localhost:5001/${url}/show`)
      .then((files) => files.text())
      .then((files) => {
        console.log(files);
        setFiles(files);

        console.log(files);
      });
  }, []);

  return (
    <div>{files&&files}</div>
  )
}


export default Show