import React from "react";
import DropDown from "./Component/DropDown";
import Progress from "./Component/Progress";


/* App Component */
function App() {
  return (
    
    <div className="w-full justify-center items-center flex flex-col">
      {/* Render DropDown Component */}
      <DropDown />
      {/* Render Progress Component */}
      <Progress />
    </div>
  );
}

export default App;
