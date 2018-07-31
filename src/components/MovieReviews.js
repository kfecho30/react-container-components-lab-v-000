import React from 'react';

const Review = ({headline,byline,link}) => {
  return(
    <div key={headline} className="review">
      <a href={link}>{headline} - {byline}</a>
    </div>
  )
}


export default MovieReviews;
