export function MoviesIndex(props) {
  console.log(props);

  return (
    <div id="movies-index">
      <h1>All Movies</h1>
      {/* loop of defined recipe data props from the parent component */}
      <div className="movies">
        {props.movies.map((movie) => (
          <div key={movie.id} className="movie">
            <p>-{movie.id}-</p>
            <h2>{movie.title}</h2>
            <h2>{movie.genre}</h2>
            <img src={movie.image} alt="" />
            <div>
              <button>More pictures</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}