import React from 'react'
import { Link } from 'react-router-dom'

const FilmListItem = ({ film }) => {
    return (
        <Link to={`/film/${film.id}`}  >
            <div key={film.id} className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8 z-20 shadow-md my-4">
                <li className="flex justify-between gap-x-6 py-5">
                    <div className="flex min-w-0 gap-x-4">
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900">{film.title}</p>
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">{film.director}</p>
                        </div>
                    </div>
                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                        <p className="text-sm leading-6 text-gray-900">Release Date : {film.releaseDate}</p>
                        <p className="text-sm leading-6 text-gray-900">Episode : {film.episodeID}</p>
                    </div>
                </li>
            </div>
        </Link>

    )
}

export default FilmListItem