import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';

function CardContainer() {
  const [song, setSong] = useState([]);

  useEffect(() => {
    console.log('component did mount');
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://qtify-backend-labs.crio.do/albums/top'
        );
        console.log('response data', response.data);
        const data = response.data;
        setSong(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {song.map((song) => (
        <Card
          key={song.id}
          follows={song.follows}
          title={song.title}
          image={song.image}
        />
      ))}
    </div>
  );
}

export default CardContainer;
