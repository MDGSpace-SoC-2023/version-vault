import React from "react";

const Image = () => {
  return (
    <div className="gird grid-cols-2 gap-2 ">
      {[1, 2, 3, 4, 6, 7, 8, 5].map((img, i) => (
        <div
          key={i}
          className="w-full h-[180px] overflow-hidden rounded-sm cursor-pointer"
        >
          <img
            className="w-full h-full object-fill"
            src={`http://localhost:5173/project.png`}
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

export default Image;
