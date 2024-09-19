import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams, useNavigate } from 'react-router-dom';
import { GET_FILM_DETAILS } from '../query/queries';
import Error from '../utils/Error';
import Loader from '../utils/Loader';

const FilmDetails = () => {
    const { filmId } = useParams();
    const navigate = useNavigate();

    // Using cache-first fetch policy (default) to ensure caching
    const { loading, error, data } = useQuery(GET_FILM_DETAILS, {
        variables: { filmId },
        errorPolicy: "all",
        fetchPolicy: 'cache-first',
    });

    if (loading) return <Loader />

    if (error) return <Error error={error} />;

    const film = data?.film;

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                    <div className="bg-gray-800 text-white py-6 px-8">
                        <button
                            onClick={() => navigate(-1)}
                            className="mb-1 inline-flex items-center border border-transparent text-sm font-normal text-white"
                        >
                            ← Back
                        </button>
                        <h1 className="text-3xl font-bold">{film?.title}</h1>
                        <p className="text-gray-300 mt-2">Episode {film?.episodeID}</p>
                    </div>
                    <div className="p-8">
                        <div className="mb-6">
                            <p className="text-gray-700">{film?.openingCrawl}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div>
                                <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Release Date</h2>
                                <p className="mt-1 text-lg text-gray-900">{film?.releaseDate}</p>
                            </div>
                            <div>
                                <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Director</h2>
                                <p className="mt-1 text-lg text-gray-900">{film?.director}</p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Characters</h2>
                            <div className="flex flex-wrap gap-2">
                                {film?.characterConnection?.characters.map(character => (
                                    <span key={character?.name} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                                        {character?.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilmDetails;
