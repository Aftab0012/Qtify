import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';
// import Swiper core and required modules
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import GenreTabs from './GenreTabs';

function CardContainer() {
  const [song, setSong] = useState([]);
  const [genre, setGenre] = useState([]);
  const [newSong, setNewSong] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://qtify-backend-labs.crio.do/albums/top'
        );

        const data = response.data;
        setSong(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://qtify-backend-labs.crio.do/albums/new'
        );

        const data = response.data;
        setNewSong(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://qtify-backend-labs.crio.do/genres'
        );
        console.log(genre);
        console.log(response.data);
        const data = response.data;
        setGenre(data);
        console.log('data is', genre);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const breakpoints = {
    560: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    },
  };

  return (
    <div className="flex flex-wrap gap-4 h-[500px]">
      <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={5}
        slidesPerView={2}
        navigation
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={breakpoints}
      >
        {song.map((song) => (
          <SwiperSlide key={song.id}>
            <div className="flex p-2 py-3 ml-4">
              <Card
                key={song.id}
                follows={song.follows}
                title={song.title}
                image={song.image}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="pl-10 text-2xl font-bold leading-10 text-white">
        New Albums
      </div>
      <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={5}
        slidesPerView={2}
        navigation
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={breakpoints}
      >
        {newSong.map((song) => (
          <SwiperSlide key={song.id}>
            <div className="flex p-2 py-3 ml-4 ">
              <Card
                key={song.id}
                follows={song.follows}
                title={song.title}
                image={song.image}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div>
        <div>
          {Array.isArray(genre) &&
            genre.forEach((genreData) => (
              <GenreTabs key={genreData.key} label={genreData} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default CardContainer;
