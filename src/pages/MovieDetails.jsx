function MovieDetails(){
  return(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-900/95 backrop--blur-sm overflow-auto">
      <div className="relative w-full max-w-5xl bg-neutral-800 rounded-lg shadow-xl max-h[900vh] overflow-hidden">
        {/*Close Button*/}
        <button className="absolute top-4 right-4 z-10 p-2 rounded-full bg-neutral-700/80 text-white hover:bg-neutral-600/80 transition-all">
        <svg 
        xmls="http://www.w3.org/2000.svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        >
          <path 
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="m6 18L18 6M6 6l12 12"
          />
         </svg>
        </button>
          {/*Conditional Rendering*/}
        <div className="flex items-center justify-center h-96">
          <div className="animate-pulse">
            <div className="w-16 h-16 border-purple-500 border-t-transparent rounded-full animate-spin">
              <p>Loading Details.................</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default MovieDetails;