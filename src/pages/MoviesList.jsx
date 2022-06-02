import React from 'react';
import {useQuery, gql} from '@apollo/client'

const GET_MOVIES = gql`
query ($id: Int, $page: Int, $perPage: Int, $search: String){
    Page (page: $page, perPage: $perPage) {
        pageInfo {
            total
            currentPage
            lastPage
            hasNextPage
            perPage
        }
    
    media (id: $id, search: $search){
        id
        title{
            romaji
        }
    }
}
}
`;

function MoviesList() {
    const { data, loading, error } = useQuery(GET_MOVIES)
    console.log({ data, loading, error });
    if (loading) {
        return <div>loading...</div> 
    }
    if (error) {
        return <div>something went wrong...</div>
    }
  return (
      <div>
          {
              data.page &&
              data.page.media &&
              data.page.media.title &&
              data.page.media.title.map(movie => {
                //   console.log('aaaaaa')
                  return (
                     <div key={movie.id}>
                        <p>{movie.romaji}</p>
                
                      </div>
                  )

              })
          }
    </div>
  )
}

export default MoviesList