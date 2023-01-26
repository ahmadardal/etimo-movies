import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import "../styles/App.css";
import ListItem from "../components/ListItem";
import { getMovies } from "../utils/Api";
import { MoviesApiResponse } from "../utils/Types";

function ListView() {
  const navigate = useNavigate();
  const { isLoading, data, isFetching } = useQuery("moviesData", getMovies, {
    staleTime: 3600 * 1000,
  });

  function isMoviesApiResponse(data: any): data is MoviesApiResponse {
    return "results" in data && "page" in data && "total_results" in data;
  }

  if (isLoading || isFetching) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <h1 id="list-page-title">Popular movies</h1>
      {isMoviesApiResponse(data) && (
        <div className="list-movies">
          {data.results.map((movie, index) => (
            <div
              onClick={() => navigate("/detail", { state: { movie: movie } })}
            >
              <ListItem key={index} movie={movie} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ListView;
