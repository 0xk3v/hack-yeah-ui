import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-20 flex items-center justify-between px-4 bg-white shadow-sm border-b fixed inset-y-0 z-50">
      <div className="h-3/4 -mx-4">
        <img src="/logo.png" alt="Logo" className="h-full" />
      </div>
      <div className="flex items-center gap-x-3">
        <Button variant="ghost">
          <Link to="/dashboard">Home</Link>
        </Button>
        {/* <Button variant="destructive" size="sm"> */}
        {/*   <Link to="/">Logout</Link> */}
        {/* </Button> */}
        <Button className="rounded-full p-2">
          <Search className="flex sm:hidden" />
          <p className="hidden sm:flex px-4 font-semibold">Browse projects</p>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
