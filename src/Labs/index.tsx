import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
export default function Labs() {
    return (
        <div>
            <h1>CS5610 Web Development</h1>
            <h2>Jiadi Luo</h2>
            <h3>
                Section: 02 | CRN: 20595 <br />
                <a id="wd-github" href="https://github.com/jiadil/kanbas-react-web-app" target="_blank">My GitHub Repo</a>
            </h3>
            
            <h1>Labs</h1>
            <TOC />
            <Routes>
                <Route path="/" element={<Navigate to="Labs" />} />
                <Route path="Lab1" element={<Lab1 />} />
                <Route path="Lab2" element={<Lab2 />} />
                <Route path="Lab3" element={<Lab3 />} />
            </Routes>
        </div>
    );
}
