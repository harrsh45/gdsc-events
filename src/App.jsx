import { useState } from "react";
import "./App.css";
import Past from "./pages/Past";
import Upcoming from "./pages/Upcoming";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import left from "../src/images/left.png";
import right from "../src/images/right.png";

function App() {
  const [isUpcoming, setisUpcoming] = useState(true);
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="flex w-full justify-center gap-[200px] mt-32">
        <div
          className={`text-3xl font-semibold cursor-pointer flex gap-2 items-center ${
            isUpcoming ? "text-blue-500" : ""
          }`}
          onClick={() => setisUpcoming(true)}
        >
          <img className={`w-[27px] h-[33px]  ${isUpcoming ? "" : "hidden"}`} src={left} alt="" />
          Upcoming
          <img className={`w-[27px] h-[33px] ${isUpcoming ? "" : "hidden"}`} src={right} alt="" />
        </div>

        <div
          className={`text-3xl font-semibold cursor-pointer flex gap-2 items-center ${
            !isUpcoming ? "text-blue-500" : ""
          }`}
          onClick={() => setisUpcoming(false)} 
        >
          <img className={`w-[27px] h-[33px] ${!isUpcoming ? "" : "hidden"}`} src={left} alt="" />
          Past
          <img className={`w-[27px] h-[33px] ${!isUpcoming ? "" : "hidden"}`} src={right} alt="" />
        </div>
      </div>

      {isUpcoming ? <Upcoming /> : <Past />}

      <div className="seperation  mt-3 w-full h-[1px] bg-slate-300"></div>

      <Footer />
    </>
  );
}

export default App;
