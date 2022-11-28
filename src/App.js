import logo from "./logo.svg";
import "./App.css";
import File from "./component/file";
import "bootstrap/dist/css/bootstrap.min.css";
import Info from "./component/Info";
import Index from "./component/Index";
import Show from "./component/Show";
import Rename from "./component/Rename";
import Copy from "./component/Copy";
import Delete from "./component/Delete";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const url = window.location.href.split("/")[3];
  console.log(url);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<File />} />
          <Route path={`/${url}`} element={<Index />}>
            <Route path={`/${url}/info`} element={<Info />} />
            <Route path={`/${url}/show`} element={<Show />} />
            <Route path={`/${url}/rename`} element={<Rename />} />
            <Route path={`/${url}/copy`} element={<Copy />} />
            <Route path={`/${url}/Delete`} element={<Delete />} />
            {/* <Route path={`/${url}/delete`} element={<Delete />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
