import { useLocation, useNavigate } from "react-router-dom";
import "../styles/DetailView.css";
import { Movie } from "../utils/Types";

interface DetailViewProps {
  state:
    | {
        movie: Movie | undefined;
      }
    | undefined;
}

function DetailView() {
  let { state }: DetailViewProps = useLocation();
  const navigate = useNavigate();

  if (!state || !state.movie) {
    return (
      <div className="detail-view-container">
        <h1>No movie was passed!</h1>
        <button onClick={() => navigate("/")}>Go back</button>
      </div>
    );
  }

  return (
    <>
      <div className="detail-image-section">
        <img
          src={`https://image.tmdb.org/t/p/original${state.movie.poster_path}`}
        />
      </div>
      <div className="detail-content-section">
        <h1 id="detail-movie-name">{state.movie.title}</h1>
        <div className="detail-info-top">
          <p>Vuxen innehåll: {state.movie.adult ? "Ja" : "Nej"}</p>
          <p>Omdöme: {state.movie.vote_average}/10</p>
          <p>Lanseringsdatum: {state.movie.release_date}</p>
        </div>
        <div className="detail-movie-description-section">
          <h1>Description</h1>
          <p id="detail-movie-description">{state.movie.overview}</p>
        </div>
      </div>
    </>
  );
}

export default DetailView;
