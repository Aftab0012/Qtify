import React from 'react';

const Card = ({ image, title, follows }) => {
  return (
    <div className="w-[250px] h-auto">
      <img
        className="h-auto rounded-tl-xl rounded-tr-xl "
        src={image}
        alt="artist-pics"
      />
      <p className="rounded-bl-xl rounded-br-xl text-white bg-white h-[50px] flex items-center">
        <span className="ml-2 text-xl text-center p-2 bg-black rounded-full w-[90px]">
          {follows}
        </span>
      </p>
      <p className="text-2xl text-white">{title}</p>
    </div>
  );
};

export default Card;
