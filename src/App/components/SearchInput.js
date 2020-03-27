import React from "react"; 

const SearchInput = ({searchString, onQueryChange, clearSearch}) => (
	<div className="search">
		<input
			type="text"
			placeholder="Search..."
			value={searchString}
			onChange={onQueryChange}
		/>
		<div className='search__buttonblock'>
		  <span className='button button--textonly' onClick={clearSearch}> &times;</span>
		  <button className='button--textonly'>Go</button>
		</div>
	</div>
);


export default SearchInput;