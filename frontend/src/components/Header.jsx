import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const saveImage = () => {};

  const downloadImage = () => {};

  return (
    <div className="h-[60px] bg-gradient-to-r from-[#212122] via-[#27282b] to-[#2a2b2c] w-full">
      <div className="flex justify-between px-10 items-center text-gray-300 h-full">
        <Link to="/">
          <div className="w-[70px] h-[40px]">
            <img
              className="w-full h-full"
              src="https://tse4.mm.bing.net/th?id=OIP.mmou9HlkrsJlYMNYtNcneAAAAA&pid=Api&P=0&h=180"
              alt=""
            />
          </div>
        </Link>
        <span className="text-xl">Mini Canva</span>
        <div className="flex justify-center items-center gap-2 text-gray-300">
          <button
            onClick={saveImage}
            className="px-3 py-[6px] outline-none bg-[#252627] rounded-sm"
          >
            Save
          </button>
          <button
            onClick={downloadImage}
            className="px-3 py-[6px] outline-none bg-[#252627] rounded-sm"
          >
            Download
          </button>
          <button className="px-3 py-[6px] outline-none bg-[#252627] rounded-sm">
            Create Branch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
