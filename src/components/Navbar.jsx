function Navbar(){
  return (
    <header className={"flex w-full z-50 transition-all duration-300"}>
      <div className="container mx-auto px-4 py-4">
        <div ClassName="flex items-center justify-between">
          <div className="flex-items-center">
            <a href="/" className="flex items-center">
            <span className="text-purple-500 text-3xl font-bold">Cina<span className="text-yellow-200">Mate</span>
            </span>
          </a>
          </div>

          {/*Desktop Navigation*/}
          <nav className="hidden md:flex space-x-8 ">
            <a href="#home" 
            className="text-white hover:text-purple-400 transition-all font-medium">Home</a>

             <a href="#trending" 
            className="text-white hover:text-purple-400 transition-all font-medium">Trending</a>

             <a href="#popular" 
            className="text-white hover:text-purple-400 transition-all font-medium">Popular</a>

             <a href="#top-rated" 
            className="text-white hover:text-purple-400 transition-all font-medium">Top Rated</a>
          </nav>

          {/*Desktop Search*/}
          <div className="hidden md:block relative search-container">
            <div className="w-full flex justify-end p-4">
              <input type="text" placeholder="search  movies...." className="bg-neutral-800/80 text-white px-4 py-2 rounded-full text-sm w-48 focus:w-64 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50"/>

            {/*Conditional Rendering of Search Results*/}
              <div className="absolute right-3 top-2.5">
                <svg className="w-4 h-4 text-neutral-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24">

                  <circle className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"></circle>

                  <path className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8c5.373 00 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H8c8 3.042 1.135 5.824 3 7.93813-2.647z"></path>
                </svg>
              </div>
              
            {/*Else*/}
            <svg xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 absolute right-3 top-3 text-neutral-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
              <path strokeLinecap="round"
              strokeLinejoin="round"
              strokewidth={2}
              d="m21 211-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>

            </div>
          </div>
        </div>
      </div>

    </header>
  );
};
export default Navbar;