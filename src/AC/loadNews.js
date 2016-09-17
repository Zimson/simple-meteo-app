import { LOAD_NEWS, START, SUCCESS, FAIL, NEWS_API_KEY } from '../constants';
import fetchJsonp from 'fetch-jsonp';


const source = 'national-geographic';

export function loadNews() {
    const newsAPI = `https://newsapi.org/v1/articles?source=${source}&sortBy=top&apiKey=${NEWS_API_KEY}`;

    return (dispatch) => {
        dispatch({
            type: LOAD_NEWS + START
        });

        fetch(newsAPI)
            .then(res => res.json())
            .then(data => {
                dispatch({type: LOAD_NEWS + SUCCESS, data})
            })
            .catch(err => dispatch({type: LOAD_NEWS + FAIL, err}))
    }
}
