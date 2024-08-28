import PropTypes from "prop-types";

function Collection({ name, images }) {
  return (
    <article className="flex flex-col gap-2 w-[100%] max-w-[400px] p-8 rounded-lg border border-black hover:translate-y-4">
        <h3 className="text-center">{name}</h3>

        <img src={images[0]} alt="" className="h-[250px] rounded-lg" />
        
        <div className="flex justify-between">
            <img src={images[1]} alt="" className="w-[30%] h-[80px] rounded-lg" />
            <img src={images[2]} alt="" className="w-[30%] h-[80px] rounded-lg" />
            <img src={images[3]} alt="" className="w-[30%] h-[80px] rounded-lg" />
        </div>
    </article>
  )
}

Collection.propTypes = {
  name: PropTypes.string,
  images: PropTypes.array
}

export default Collection
