import { LOAD_NEWS, START, SUCCESS, FAIL } from '../constants';

const tempNews = localStorage.getItem('oldNews');

const startNews = tempNews ? JSON.parse(tempNews) : [];


export default (news = startNews, action) => {
    const { type, data } = action;

    switch (type) {
        case LOAD_NEWS + START:
            return news = ['Loading...'];

        case LOAD_NEWS + SUCCESS:
            const newsList = data.articles.slice(5);
            return news = newsList;

        case LOAD_NEWS + FAIL:
            return news = ['Error'];
    }

    return news;
};