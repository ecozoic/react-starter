import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import styled from 'styled-components';

const FilmList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const GET_ALL_FILMS = gql`
  {
    allFilms {
      films {
        episodeID
        title
      }
    }
  }
`;

const Films = () => (
  <Query query={GET_ALL_FILMS}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error!: ${error.message}`;

      return (
        <>
          <h2>Star Wars Films</h2>
          <FilmList>
            {data.allFilms.films.map(film => (
              <li key={film.episodeID}>{film.title}</li>
            ))}
          </FilmList>
        </>
      );
    }}
  </Query>
);

export default Films;
