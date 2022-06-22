import React from "react";

import StudentSelector from './Components/StudentSelector/index.tsx'
import ClassSelector from "./Components/ClassSelector/index.tsx";
import LicenseSelector from "./Components/LicenseSelector/index.tsx";

const App: React.FC = () => {
    return (
        <>
            <h1>Student List</h1>
            <StudentSelector />
            
            <h1>Class List</h1>
            <ClassSelector />

            <h1>License List</h1>
            <LicenseSelector />
        </>
    )
}

export default App;

