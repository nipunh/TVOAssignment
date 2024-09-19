import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import { GET_FILMS } from '../query/queries';
import FilmListItem from '../widgets/FilmListItem';
import Error from '../utils/Error';
import Loader from '../utils/Loader';

const list = ["Title", "Release Date", "Episode Number"];

const FilmList = () => {
    const { loading, error, data } = useQuery(GET_FILMS, {
        fetchPolicy: 'cache-first', errorPolicy: "all"
    });

    const [sortBy, setSortBy] = useState('title');
    const [sortedFilms, setSortedFilms] = useState([]);

    useEffect(() => {
        if (data) {
            const newSortedFilms = [...data?.allFilms?.films].sort((a, b) => {
                if (sortBy === 'Title') return a.title.localeCompare(b.title);
                if (sortBy === 'Release Date') return new Date(a.releaseDate) - new Date(b.releaseDate);
                if (sortBy === 'Episode Number') return a.episodeID - b.episodeID;
                return 0;
            });

            setSortedFilms(newSortedFilms);
        }
    }, [sortBy, data])

    if (loading) return <Loader />
    if (error) return <Error error={error} />;

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
                <div className="bg-gray-800 text-white py-6 px-8">
                    <h1 className="text-3xl font-bold">Star Wars</h1>
                </div>
                <div className="p-8">
                    <div className="flex justify-end mb-2">
                        <div className="w-1/3 min-w-[120px]">
                            <select
                                id="sort-select"
                                className="w-full cursor-default rounded-md bg-white py-2 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                onChange={e => setSortBy(e.target.value)}
                                value={sortBy}
                            >
                                {list.map((option) => (
                                    <option key={option} value={option}>{option}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div role="list" className="space-y-4">
                        {sortedFilms?.map(film => (
                            <FilmListItem key={film.id} film={film} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FilmList;