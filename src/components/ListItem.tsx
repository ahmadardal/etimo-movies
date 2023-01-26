import "../styles/ListItem.css";
import starIcon from "../assets/star.webp";
import calendarIcon from "../assets/calendar.webp";
import { Movie } from "../utils/Types";

interface ListItemProps {
  movie: Movie;
}

function ListItem({ movie }: ListItemProps) {
  return (
    <div className="list-item-container">
      <img
        id="list-item-image"
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
      />

      <div className="list-item-info-section">
        <h1 id="list-item-title">{movie.title}</h1>
        <div className="list-item-rating-section">
          <img id="list-item-star" src={starIcon} />
          <h1 id="list-item-rating">{movie.vote_average}/10</h1>
        </div>
        <div className="list-item-rating-section">
          <img id="list-item-star" src={calendarIcon} />
          <h1 id="list-item-date">{movie.release_date}</h1>
        </div>
      </div>
    </div>
  );
}

//

export default ListItem;
