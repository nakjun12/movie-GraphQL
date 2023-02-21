import { gql, useQuery } from "@apollo/client";

const ALL_MOVIES = gql`
  query getMovies {
    allMovies {
      title
      id
    }
  }
`;

export default function Movies() {
  const { data, loading } = useQuery(ALL_MOVIES);

  return <div></div>;
}
