const MovieCard = ({movie}) =>{
  return (
    <div className="bg-gray-800 text-white rounded-xl p-2 hover:scale-105 transition">
      <img 
      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      alt={movie.title}
      className="rounded-lg w-full h-auto"/>
      <h2 className="mt-2 text-sm font-bold">{movie.title}</h2>
    </div>
  );
};

export default MovieCard;