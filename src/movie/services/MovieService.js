// import movies from './movies.json';

//import { http } from '../../utils';

// export default class MovieService {
//     static getMovies() {
//         return movies ? movies : [];
//     }
// }

export default class MovieService {
    static getMovies() {
        return fetch('http://127.0.0.1:8000/catalog/movie/')
            .then(response => response.json());
    }
    static getRecommendedMovies() {
        const data = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            method: 'GET',
        };
        return fetch('http://127.0.0.1:8000/catalog/best-movie/', data)
            .then(response => {
                console.log(response);
                if (response.status === 200) {
                    return response.json();
                }
                return {results: []};
            });
    }
}
