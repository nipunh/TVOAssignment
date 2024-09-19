import { gql } from '@apollo/client';

export const GET_FILMS = gql`
  query GetFilms {
    allFilms {
      films {
        id
        title
        releaseDate
        director
        episodeID
      }
    }
  }
`;


export const GET_FILM_DETAILS = gql`
  query GetFilm($filmId: ID!) {
  film(id: $filmId) {
    title
    episodeID
    director
    releaseDate
    openingCrawl
    characterConnection {
      characters {
        name
      }
    }
  }
}
`;

