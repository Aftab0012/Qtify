import React from "react";

function Navbar() {
  return (
    <div>
      <main className="bg-[#34c94b] h-[8vh] flex flex-row justify-between items-center pl-2 pr-2">
        <div>
          <img
            className="object-contain w-full h-[60px]"
            src="/qtify.png"
            alt="qtify image"
          />
        </div>
        <div>
          <input
            type="search"
            placeholder="Search"
            className="border-solid h-[40px] rounded-full pl-2 p-3 xl:w-[500px] md:w-[300px] sm:w-[200px]"
          />
        </div>
        <div>
          <button className="p-3 font-bold text-white bg-black rounded-lg">
            Give Feedback
          </button>
        </div>
      </main>
    </div>
  );
}

export default Navbar;
