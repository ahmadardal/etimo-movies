import { ApiError, MoviesApiResponse } from "./Types";

export const getMovies = async (): Promise<MoviesApiResponse | ApiError> => {

  // I en produktionsapp hade vi aldrig haft API-nyckeln i koden eller klientdelen. Vi hade istället haft vår egna API som en mellanhand där vi har lagrat alla API nycklar,
  // och från våran API server hade vi isåfall kallat på themoviedb och sedan returnerat resultatet till klienten. 
  const response: Response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=357fd9dbde100c5f47082ae6a7f86d8b&language=en-US&page=1"
  );

  const jsonData = await response.json();

  return response.ok ? (jsonData as MoviesApiResponse) : (jsonData as ApiError);
};
