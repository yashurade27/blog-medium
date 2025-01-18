import { FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <footer className="flex justify-between items-center p-4 bg-white border-t border-gray-300">
      <div className="flex items-center">
        <span className="text-xl font-bold mr-4">Medium</span>
      </div>
      <div className="flex items-center">
        <Link to={"/publish"}>
          <button className="flex items-center mr-4 text-gray-700">
            <FaPen className="mr-2" />
            Write
          </button>
        </Link>
        <div className="w-8 h-8 bg-slate-400 rounded-full flex items-center justify-center text-black font-thin">
          Y
        </div>
      </div>
    </footer>
  );
};

