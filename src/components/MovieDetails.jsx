function MovieDetails(){
  return(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-900/95 backdrop-blur-sm overflow-hidden">
      <div className="relative w-full max-w-5xl bg-neutral-800 rounded-lg shadow-xl max-h[900vh] overflow-hidden">
        {/* CLose Button */}
        <div className="absolute top-4 right-4 z-10p-2 rounded-full bg-neutral-700/80 text-white hover:bg-neutral-600/80 transition-all">
         <svg
          xmls="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m6 18L18 6l12 12"
              />
          </svg>
        </div>
      </div>
    </div>

  );
}

export default MovieDetails;