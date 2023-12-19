import React from "react";

const Index = () => {
  return (
    <div className="bg-[rgb(24,25,27)] min-h-screen w-full">
      <div className="bg-[#252627] shadow-md">
        <div className="w-[93%] m-auto py-3">
          <div className="flex justify-between items-center">
            <div className="w-[80px] h-[48px]">
              <img
                className="w-full h-full"
                src="https://tse4.mm.bing.net/th?id=OIP.mmou9HlkrsJlYMNYtNcneAAAAA&pid=Api&P=0&h=180"
                alt=""
              />
            </div>
            <div className="flex gap-4">
              <button className="py-2 w-[80px] text-center bg-blue-500 text-white transition-all hover:bg-blue-600 rounded-[5px] font-medium">
                Sign in
              </button>
              <button className="py-2 w-[80px] text-center bg-blue-500 text-white transition-all hover:bg-blue-600 rounded-[5px] font-medium">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full justify-center items-center p-4">
        <div className="py-[168px] flex justify-center items-center flex-col gap-6">
          <h2 className="text-5xl text-[#c7c5c5] font-bold">
            What will you design today?
          </h2>
          <span className="text-[#aca9a9] text-2xl font-medium">
            Version-Vault makes it easy to create and version professional
            designs.
          </span>
          <button className="py-2 w-[200px] text-center bg-purple-500  text-white transition-all hover:bg-purple-600 rounded-[5px] font-medium">
            Signup for free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
