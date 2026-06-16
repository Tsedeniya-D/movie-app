function GenreSection (){
  return(
     <section className="py-12 bg-neutral-900/50" id="">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Browse by Genre</h2>

        {/*Genre Tabs*/}
       <div className="mb-8 overflow-x-auto pb-2">
        <div className="flex space-x-2 min-w-max">
          {/*Conditional Rendering */}
          <button className={`px-4 py-2m rounded-md transition-colors text-sm`}>
            Genre Name
          </button>
        </div>
       </div>

       {/* Conditional Rendering */}
       <div>
        
       </div>
      </div>
     </section>
  );
}

export default GenreSection;