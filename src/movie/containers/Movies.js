import React, { Component } from 'react';
import MovieList from '../components/MovieList';
import MovieService from '../services/MovieService';

export default class Movies extends Component {

    constructor(props) {
        super(props);

        this.state = {
            movies: []
        };

        this.getRecommendedMovies = this.getRecommendedMovies.bind(this);
    }

    componentDidMount() {
        MovieService
            .getMovies()
            .then(({results}) => {
                this.setState(() => ({ movies: results }));
            });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="container">
                        <button className="btn btn-default" onClick={this.getRecommendedMovies}>Recommend me movies</button>
                    </div>
                </div>
                <br/>
                <div className="container-fluid" style={{marginLeft: '-15px'}}>
                    <div className="d-flex flex-row">
                        <div className="col-sm-12">
                            <MovieList movies={this.state.movies} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    getRecommendedMovies(){
        MovieService
            .getRecommendedMovies()
            .then(({results}) => {
                this.setState(() => ({ movies: results }));
            });
    }
}