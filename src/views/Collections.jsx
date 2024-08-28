import Collection from "./Collection";
import PropTypes from "prop-types";

function Collections({ isLoading, collections, searchValue }) {
  
  return (
    <section className="flex justify-evenly flex-wrap gap-8">
        {
            isLoading ?
            <h2>Идет загрузка...</h2>
            :
            collections.filter(obj => obj.name.toLowerCase().includes(searchValue.toLowerCase()))
                .map((obj, index) => (
                <Collection key={index} name={obj.name} images={obj.photos}/>
                ))
        }
    </section>
  )
}

Collections.propTypes = {
  isLoading: PropTypes.bool,
  collections: PropTypes.array,
  searchValue: PropTypes.string
}

export default Collections
