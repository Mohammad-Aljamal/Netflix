import Movie from "./Movie";
function MovieList(props) {

  
  return (
    <>    
      {props.trendingMovies.map((item, idx) => {
        return <Movie movieData={item}/>;
      })}
    </>
  );
}

export default MovieList;
