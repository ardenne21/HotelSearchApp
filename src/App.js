import React, { useState, useEffect } from 'react';
import './App.css';
import styled from 'styled-components';
import HotelCard from './HotelCard';

function App() {
  const [data, setData] = useState();
  const fetchJson = async (url) => {
    const response = await fetch(url);
    return response.json();
  };
  useEffect(() => {
    fetchJson("https://api.jsonbin.io/b/5a9fcd00c9bf323a2b75e9b7/3")
      .then( data => setData(data.records));
  }, []);

   console.log("data", data)

  return (
    <HotelWrapper>
      { data && data.map( (hotel) => {
        return <HotelCard key={hotel.name} hotel={hotel}/>
      })}
    </HotelWrapper>
  );
}
export default App;


const HotelWrapper = styled.div`
  display: grid; 
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5%
  padding: 0% 5%; 
`;
