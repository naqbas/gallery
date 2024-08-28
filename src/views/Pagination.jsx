import PropTypes from "prop-types";

function Pagination({ page, setPage }) {

  return (
    <ul className="flex justify-center gap-2">
        {
          [...Array(3)].map((_, index) => (
            <li key={index} 
              onClick={() => setPage(index + 1)}
              style={page === (index + 1) ? {backgroundColor: "black", color: "white"} : {}}
              className="px-4 py-2 rounded-lg border border-black hover:bg-black hover:text-white cursor-pointer"
            >
              {index + 1}
            </li>
          ))
        }
    </ul>
  )
}

Pagination.propTypes = {
  page: PropTypes.number,
  setPage: PropTypes.func
}

export default Pagination
