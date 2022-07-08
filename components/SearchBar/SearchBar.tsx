const SearchBar: React.FC = () => {

  return (
    <>
    <div className={`hidden md:block form-control`}>
      <div className="input-group">
        <input
          type="text"
          placeholder="Search…"
          className="input input-bordered"
        />
        <button className="btn btn-square bg-main-500 border-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
    {/* show search icon on mobile */}
    <div className="dropdown dropdown-end">
    <button tabIndex={0} className="md:hidden btn btn-ghost btn-circle text-main-900">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
    <div tabIndex={0} className="dropdown-content menu md:block form-control">
      <div className="input-group">
        <input
          type="text"
          placeholder="Search…"
          className="input input-bordered"
        />
        <button className="btn btn-square bg-main-500 border-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
    </div>

    </>
    
  );
};

export default SearchBar;
