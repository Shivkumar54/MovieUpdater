import React from 'react'
import "./Movie.css"
const Movie = (props) => {

    let Tickets
    if (props.isTicketsAvailable === true) {
        Tickets = "BOOKING OPEN"
    } else if (props.isTicketsAvailable === false) {
        Tickets = "OPENS SOON"
    } else {
        Tickets = "N/A"
    }
  return (
      <div className="MovieRoot">
          <div className="imageroot">
          <div className='floatobj'>{Tickets}</div>
          <img src={props.img} />
          </div>
          <div className='text'>
          <h1>{props.title}</h1>
          <p className="director"> Directed by - {props.director}</p>
          <p className='stars'> Staring - {props.cast}</p>
          <p> Movie Synopsis - {props.desc} </p>
              <p className='release'> Releasing on - {props.releaseDate} </p>
              
                  <a href='https://in.bookmyshow.com/explore/home/bengaluru'><button type='submit'> Book Now </button></a>
              
          </div>
    </div>
  )
}

export default Movie