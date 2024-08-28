import React from 'react'
import './App.css'

const MovieList = ({filter,movies}) => {
    
    
let filterMovieData=[];

      const filterMovie=()=>{
        if(filter === ""){
            filterMovieData=movies;
            return;
        }
        filterMovieData= movies.filter((movie)=>{
            return movie.genre===filter;
        })
    }
    
    filterMovie();
    console.log(filterMovieData)
  return (
    <table>
      <thead>
      <tr className='row'>
            <th style={{width:"500px"}}>title</th>
            <th>Genre</th>
            <th>Year</th>
        </tr>
      </thead>
        <tbody>
        {
            filterMovieData.map((movie,idx)=>{
         return( <tr className='row' key={idx}>
            <td style={{width:"500px"}}>{movie.title}</td>
            <td>{movie.genre}</td>
            <td>{movie.year}</td>
           </tr>)

            })
        }
        </tbody>
    </table>
  )
}

export default MovieList