import PropTypes from "prop-types";

function Navigation({ categoryId, setCategoryId, searchValue, setSearchValue }) {
  const categories = [ "Все", "Море", "Горы", "Архитектура", "Города" ];

  return (
    <nav className="flex justify-evenly md:justify-between gap-2 flex-wrap">
        <ul className="flex justify-evenly gap-2 flex-wrap">
          {
            categories.map((category, index) => (
              <li key={index} 
                onClick={() => setCategoryId(index)}
                style={categoryId === index ? {backgroundColor: "black", color: "white"} : {}}
                className="px-4 py-2 rounded-lg border border-black hover:bg-black hover:text-white cursor-pointer"
              >
                  {category}
              </li>
            ))
          }
        </ul>
        
        <input type="text" 
          value={searchValue} 
          onChange={event => setSearchValue(event.target.value)} placeholder="Поиск по названию" 
          className="px-4 py-2 rounded-lg border border-black"
        />
    </nav>
  )
}

Navigation.propTypes = {
  categoryId: PropTypes.number,
  searchValue: PropTypes.string,
  setCategoryId: PropTypes.func,
  setSearchValue: PropTypes.func
}

export default Navigation
