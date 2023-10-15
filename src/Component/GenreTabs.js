import React from 'react';

const GenreTabs = ({ genre, selectedGenre, setSelectedGenre }) => {
  const isActive = selectedGenre === genre;
  return (
    <div
      className={`w-auto ${
        isActive
          ? 'transform transition-transform bg-indigo-500 w-auto px-2 py-1 rounded-xl'
          : ''
      }`}
      onClick={() => setSelectedGenre(genre)}
    >
      {genre}
    </div>
  );
};

export default GenreTabs;
