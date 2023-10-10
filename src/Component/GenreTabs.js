import React from 'react';

const GenreTabs = ({ genre }) => {
  return (
    <div className="text-3xl text-white" key={genre.key}>
      {genre.label}
    </div>
  );
};

export default GenreTabs;
