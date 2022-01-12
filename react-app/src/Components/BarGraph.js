import'./BarGraph.css';
// import 'src/genre.js';
import React,{useEffect} from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label} from "recharts";

const _data = [
{name: 'Action', average_duration_by_genre: 1347},
{name: 'Adventure', average_duration_by_genre: 179.8},
{name: 'Comedy', average_duration_by_genre: 499.7},
{name: 'Drama', average_duration_by_genre: 450.1},
{name: 'Fantasy', average_duration_by_genre: 152.5},
{name: 'Horror', average_duration_by_genre: 158.9},
{name: 'Mystery', average_duration_by_genre: 327.4},
{name: 'Romance', average_duration_by_genre: 213.3},
{name: 'Sci-Fi', average_duration_by_genre: 169.4},
{name: 'Slice of Life', average_duration_by_genre: 381.1},
{name: 'Sports', average_duration_by_genre: 403.7},
{name: 'Supernatural', average_duration_by_genre: 140.5},
{name: 'Cars', average_duration_by_genre: 604.2},
{name: 'Demons', average_duration_by_genre: 384.9},
{name: 'Game', average_duration_by_genre: 333.3},
{name: 'Harem', average_duration_by_genre: 287.4},
{name: 'Historical', average_duration_by_genre: 324.6},
{name: 'Martial Arts', average_duration_by_genre: 178},
{name: 'Mecha', average_duration_by_genre: 752.6},
{name: 'Military', average_duration_by_genre: 558.3},
{name: 'Music', average_duration_by_genre: 282},
{name: 'Parody', average_duration_by_genre: 153.6},
{name: 'Police', average_duration_by_genre: 41.1},
{name: 'Psychological', average_duration_by_genre: 389.2},
{name: 'Samurai', average_duration_by_genre: 23.333333333333332},
{name: 'School', average_duration_by_genre: 236.3},
{name: 'Space', average_duration_by_genre: 272.2},
{name: 'Super Power', average_duration_by_genre: 41.5},
{name: 'Vampire', average_duration_by_genre: 60},
{name: 'Kids', average_duration_by_genre: 579.1},
{name: 'Seinen', average_duration_by_genre: 106.3},
{name: 'Shoujo', average_duration_by_genre: 22.375},
{name: 'Shounen', average_duration_by_genre: 342.4}
];
const Genres = ['7.18R Million Live!', 'Action', 'Adventure', 'Cars', 'Comedy', 'Dementia', 'Demons', 'Drama', 'Ecchi', 'Fantasy', 'Game', 
'Harem', 'Hentai', 'Historical', 'Horror', 'Josei', 'Kids', 'Magic', 'Martial Arts', 'Mecha', 'Military', 'Music', 'Mystery', 'Parody', 'Police', 
'Psychological', 'Romance', 'Samurai', 'School', 'Sci-Fi', 'Seinen', 'Shoujo', 'Shoujo Ai', 'Shounen', 'Shounen Ai', 'Slice of Life', 'Space', 'Sports', 
'Super Power', 'Supernatural', 'Thriller', 'Unknown', 'Vampire', 'Yaoi', 'Yuri'];


export default function BarGraph({func,n}) {
  const [data, setData] = React.useState([]);

  useEffect(()=> {
    (      
        async () => {
            let avgDurationTime = 0;
            for(let i = 0; i < Genres.length; i++){
              const response = await fetch(`http://localhost:8000/api/${func}?value=${Genres[i]}&n=${n}`);
              avgDurationTime = await response.json();
              let d = {
                name: Genres[i],
                average_duration_by_genre: avgDurationTime,
              }
              data.push(d)
            }
            setData(data)  
          }
    )();
  } ,[]);
  return (
    <BarChart
      width={1500}
      height={650}
      data={_data}
      margin={{
        top: 10,
        right: 30,
        left: 10,
        bottom: 20,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name">
        <Label value="Genres"
        offset={-40} 
        position="insideBottom"/>
      </XAxis>

      <YAxis >
        <Label value="Average duration (m)"
        angle={270}
        position={{
          x: 10,
          y: 200
        }}
        />
      </YAxis>

      <Tooltip />
      <Legend />
      <Bar dataKey="average_duration_by_genre" fill="#8884d8" />
    </BarChart>
  );
}
