import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "@/components/navbar";

function App() {
  return (
    <div className="bg-slate-100 h-full">
      <Navbar />
      <div className="w-11/12 md:w-11/12 mx-auto pt-[80px] flex justify-center">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
