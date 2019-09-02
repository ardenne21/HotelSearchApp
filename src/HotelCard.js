import React from 'react';
import styled from 'styled-components';


const HotelCard = (hotel) => {
  let stars = new Array(hotel.hotel.stars).fill(
   <div><i className="fa fa-star" aria-hidden="true"></i></div>
);

  return (
    <CardBox>
      <hgroup>
        <h3>{hotel.hotel.name}, {hotel.hotel.city}</h3>
        <h4>{hotel.hotel.address} </h4>
        <h5>{hotel.hotel.distance} from City Center </h5>
        <h5>Rating: {hotel.hotel.rating} / 100 </h5>
      </hgroup>
      <img 
        alt="hotel"
        src={hotel.hotel.image} 
        width="50px" 
        height="50px"
      />
      {stars}

      {}
    </CardBox>
  )
}
export default HotelCard;

const CardBox = styled.div`
  display: flex; 
  flex-direction: column;
  border: 5px solid palegoldenrod; 
  padding: 2%;
`;