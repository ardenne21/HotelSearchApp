import React, { useState } from 'react';
import { Box, Button, Image, Text } from 'grommet';

const HotelCard = (hotel) => {
  const [hovered, setHovered] = useState(false);
  
  var elements=[];
  for(var i=0;i<=hotel.hotel.stars;i++){
    elements.push(<i className="fa fa-star" aria-hidden="true" color="green"></i> );
  }

  return (
    <Box 
      elevation={hovered ? 'medium' : 'xsmall'}
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      border={{color: '#ced4da', size:"xsmall"}}
      round="5px"
      pad="medium"
      direction="row-responsive"
      gap="medium"
      height="medium"
    >
      <Box basis="70%" gap="small">
        <Text size="large" weight="bold" color="#444444"> {hotel.hotel.name} </Text>
        <Box direction="row">{elements}</Box>
        <Text size="small" color="#444444">
          {hotel.hotel.address}, {hotel.hotel.city} - {hotel.hotel.distance}km from City Center
        </Text>
        <Text size="small" weight="bold" color="#444444">Rating: {hotel.hotel.rating} / 100 </Text>
        <Image
          fit="cover"
          src={hotel.hotel.image}
        />
       
      </Box>
      <Box basis="30%" gap="xsmall">
        <Text size="small" color="#444444" textAlign="end">
          Best Price: <Text color="green" weight="bold" size="medium">{hotel.hotel.offers[0].price} €</Text>
        </Text>
        <Text size="xsmall" color="grey" textAlign="end">
          from {hotel.hotel.offers[0].vendor}.com
        </Text>
        <Box margin={{top:'small'}}>
          <Button label={<Text color="white">Book Now!</Text>} color="green" primary={true} size="small"></Button>
        </Box>
      </Box>
    </Box>
  )
}


export default HotelCard;