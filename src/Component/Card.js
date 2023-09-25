import React from "react";

function Card() {
  return (
    <div className="">
      <div className="p-2 w-[320px] h-auto">
        <img
          src="/cardimg.png"
          alt="card-img"
          className=" w-[320px] h-auto"
          style={{ borderRadius: "20px 20px 0 0" }}
        />
        <div
          className="w-auto p-2 bg-white"
          style={{ borderRadius: " 0 0 20px 20px" }}
        >
          <p className="text-2xl font-semibold text-white bg-black w-2/3 rounded-[30px] p-3">
            100M Follows
          </p>
        </div>
        <p className="mt-2 text-3xl text-white leading-30">Hollywood Song</p>
      </div>
    </div>
  );
}

export default Card;
