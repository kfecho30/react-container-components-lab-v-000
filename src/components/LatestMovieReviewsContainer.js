import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

const ReviewList = ({reviews}) => (
  <div className="latest-movie-reviews">
    {reviews.map(MovieReviews)}
  </div>
)

export default class LatestMovieReviewsContainer extends React.Component {
  constructor(){
    super();
    this.state={
      reviews:[],
    }
  }

  componentDidMount() {
    fetch('/api/current_user/book_list')
      .then(response => response.json())
      .then(books => this.setState({ books }))
  }

  render(){
    return <ReviewList reviews={this.state.reviews} />
  }
}
