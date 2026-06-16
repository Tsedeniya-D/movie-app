function Navbar(){
  return (
    <header className="flex w-full z-50 transition-all duration-300 bg-white">
      <div className="container mx-auto px-4 py-4">

        <div className="flex items-center justify-between">

          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-purple-500 text-3xl font-bold">
                Cina<span className="text-yellow-200">Mate</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-800 hover:text-purple-500 font-medium">Home</a>
            <a href="#trending" className="text-gray-800 hover:text-purple-500 font-medium">Trending</a>
            <a href="#popular" className="text-gray-800 hover:text-purple-500 font-medium">Popular</a>
            <a href="#top-rated" className="text-gray-800 hover:text-purple-500 font-medium">Top Rated</a>
          </nav>

          {/* Desktop Search */}
          <div className="hidden md:block relative search-container">
            <div className="w-full flex justify-end p-4">

              <input
                type="text"
                placeholder="search movies..."
                className="bg-neutral-800/80 text-white px-4 py-2 rounded-full text-sm w-48 focus:w-64 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              />

              {/* Loading Icon */}
              <div className="absolute right-3 top-2.5">
                <svg className="w-4 h-4 text-neutral-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24">

                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>

                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              </div>

              {/* Search Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 absolute right-3 top-3 text-neutral-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Search Result */}
            <div className="absolute mt-2 w-72 bg-neutral-800 rounded-lg shadow-lg overflow-hidden z-50">
              <ul className="divide-y divide-neutral-700">
                <li className="hover:bg-neutral-700">
                  <button className="flex items-center p-3 w-full text-left">
                    <div className="w-10 h-10 bg-neutral-700 rounded overflow-hidden flex-shrink-0">

                      <img src={null} alt="" className="w-full h-full object-cover"/>

                      <div className="w-full h-full flex items-center justify-center text-neutral-500 text-xs">
                        No Image
                      </div>

                    </div>

                    <div className="ml-3 flex-1">
                      <p className="text-sm font-medium text-white truncate">
                        Movie Title
                      </p>
                      <p className="text-xs text-neutral-400">
                        Movie Release Date
                      </p>
                    </div>
                  </button>
                </li>
              </ul>
            </div>

            {/* No Results */}
            <div className="absolute mt-2 w-72 bg-neutral-800 rounded-lg shadow-lg overflow-hidden z-50">
              No movies found...
            </div>
          </div>
        </div>

        {/* Mobile Button */}
        <div className="flex items-center md:hidden">
          <button className="text-white hover:text-purple-500">

            {/* Close Icon */}
            <svg xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>

            {/* Hamburger Icon */}
            <svg xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>

          </button>
        </div>

        {/* Mobile Menu */}
        <div className="mt-4 pb-4 space-y-4 md:hidden">
          <a href="#" className="block text-white hover:text-purple-500 py-2">Home</a>
          <a href="#trending" className="block text-white hover:text-purple-500">Trending</a>
          <a href="#popular" className="block text-white hover:text-purple-500">Popular</a>
          <a href="#top-rated" className="block text-white hover:text-purple-500">Top Rated</a>
        </div>

      </div>
    </header>
  );
}

export default Navbar;