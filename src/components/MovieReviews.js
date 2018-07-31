import React from 'react';
import LatestMovieReviewsContainer from './LatestMovieReviewsContainer.js';
import SearchableMovieReviewsContainer from './LatestMovieReviewsContainer.js';

export default class MovieReviews extends React.Component{
  render(){
    return(
      <LatestMovieReviewsContainer />
      <SearchableMovieReviewsContainer />
    )
  }
}
