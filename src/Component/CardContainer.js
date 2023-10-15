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
import BasicAccordion from './Accordion';

function CardContainer() {
  const [song, setSong] = useState([]);
  const [newSong, setNewSong] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('All');
  console.log(song);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://qtify-backend-labs.crio.do/albums/top'
        );

        const data = response.data;
        console.log('response data is', response);
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

  const breakpoints = {
    560: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    },
  };

  const filteredSongs = song.filter((song) => {
    // If 'All' is selected, show all songs
    if (selectedGenre === 'All') {
      return true;
    }
    // Check if the song's genre matches the selected genre
    return song.songs.map((song) => {
      return song.genre.label === selectedGenre;
    });
  });

  console.log('filtered songs are', filteredSongs);

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
        <div className="pl-8 mb-4 text-xl font-semibold text-white">Songs</div>
        <div className="flex gap-5 pl-8 font-serif text-2xl font-semibold leading-7 text-white">
          <GenreTabs
            genre="All"
            selectedGenre={selectedGenre}
            setSelectedGenre={setSelectedGenre}
          />
          <GenreTabs
            genre="Jazz"
            selectedGenre={selectedGenre}
            setSelectedGenre={setSelectedGenre}
          />
          <GenreTabs
            genre="Rock"
            selectedGenre={selectedGenre}
            setSelectedGenre={setSelectedGenre}
          />
          <GenreTabs
            genre="Pop"
            selectedGenre={selectedGenre}
            setSelectedGenre={setSelectedGenre}
          />
          <GenreTabs
            genre="Blues"
            selectedGenre={selectedGenre}
            setSelectedGenre={setSelectedGenre}
          />
        </div>
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
        {filteredSongs.map((song) => (
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
    </div>
  );
}

export default CardContainer;
