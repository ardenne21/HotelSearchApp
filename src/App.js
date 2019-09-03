import React, { useState, useEffect } from 'react';
import { Box, Button, Grid, Heading } from 'grommet';
import HotelCard from './HotelCard';

function App() {
  const [data, setData] = useState();
  const [loading, setLoading ] = useState(false);
  const [filteredData, setFilteredData] = useState();
  const [count, setCount] = useState(1)
  const [topClick, setTopClick] = useState(true);

  const fetchJson = async (url) => {
    const response = await fetch(url);
    return response.json();
  };
  useEffect(() => {
    fetchJson("https://api.jsonbin.io/b/5a9fcd00c9bf323a2b75e9b7/3")
      .then( data => {
        setData(data.records);
        setFilteredData(data.records)
        setLoading(true);
      });
  }, []);

  const sortByPrice = () => {
    let clone = JSON.parse(JSON.stringify(data));    
    if(count === 1) {
      let sortedData = clone.sort((a,b) => {
        return a.offers[0].price - b.offers[0].price;
      })
      setFilteredData(sortedData);
    }
    else if(count === 2) {
      let sortedData = clone.sort((a,b) => {
        return b.offers[0].price - a.offers[0].price;
      })
      setFilteredData(sortedData);
      setCount(0);
    } else setFilteredData(data);
  }  

  const sortByTop = () => {
    if(topClick)  {
      const result = data.filter(hotel => hotel.stars > 4);
      setFilteredData(result); 
    } else setFilteredData(data);
    setTopClick(!topClick);
  }

  return (
    <>
      {loading && 
        <Box pad="large">
          <Heading>Choose your favourite hotel</Heading>
          <Box direction="row" gap="xsmall" margin={{vertical: "large"}}>
            <Button 
              label="Sorty by price" 
              color="#777"
              primary={false}
              icon={
               ( count === 1 ? <i className="fas fa-arrow-up" aria-hidden="true"></i> : 
                count === 2 ? <i className="fas fa-arrow-down" aria-hidden="true"></i> : null)
              }
              onClick={ e => {
                setCount(count => count+1);
               sortByPrice();
              }}
            />
            <Button 
              label="Top Class"
              color="#777"
              icon={<i className="fa fa-star" aria-hidden="true"></i>}
              onClick={ () => sortByTop()}
            />
             <Button 
              label="Reset"
              color="#777"
              onClick={ () => setFilteredData(data)}
            />
          </Box>
          <Grid
            columns={{
              count: 2, size: 'small'
            }}
            gap="small"
          >
            { filteredData && filteredData.map( (hotel) => {
              return <HotelCard key={hotel.name} hotel={hotel}/>
            })}
          </Grid>
        </Box>
      }
    </>
  );
}
export default App;
