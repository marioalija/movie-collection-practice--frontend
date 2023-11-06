import { MoviesIndex } from "./MoviesIndex";
import { MoviesNew } from "./MoviesNew";

export function Content() {
  let movies = [
    {
      id: 1,
      title: "Bram Stoker's Dracula",
      body: "Love never dies",
      image: "https://m.media-amazon.com/images/I/91JCn5GWCjL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 2,
      title: "The Lord of The Rings: Fellowship of the ring",
      body: "The fellowship is forged",
      image:
        "https://images.moviesanywhere.com/198e228b071c60f5ad57e5f62fe60029/ff22cad6-2218-414d-b853-3f95d76905c7.jpg",
    },
    {
      id: 3,
      title: "Harry Potter and the sorcerer's stone",
      body: "Let the magic begin",
      image:
        "https://m.media-amazon.com/images/M/MV5BNmQ0ODBhMjUtNDRhOC00MGQzLTk5MTAtZDliODg5NmU5MjZhXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_.jpg",
    },
  ];
  return (
    <div>
      <MoviesNew />
      <MoviesIndex movies={movies} />
    </div>
  );
}
