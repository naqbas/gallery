import { useEffect } from "react";
import { useState } from "react";
import Navigation from "./views/Navigation";
import Collections from "./views/Collections";
import Pagination from "./views/Pagination";


function App() {
  const [categoryId, setCategoryId] = useState(0);
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [collections, setCollections] = useState([]);
  const [page, setPage] = useState(1);
  
  useEffect(() => {
    const category = categoryId ? `&category=${categoryId}` : '';

    setIsLoading(true);
    
    fetch(`https://66c73900732bf1b79fa5cc14.mockapi.io/photo_collections?page=${page}&limit=3${category}`)
      .then(res => res.json())
      .then(json => {
        setCollections(json);
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => setIsLoading(false)
    )
  }, [categoryId, page])

  return (
    <main className="flex flex-col gap-8 p-10 w-full max-w-[1024px] mx-auto lg:text-lg xl:text-xl">
      <h1 className="font-bold lg:text-xl xl:text-2xl">Моя коллекция фотографий</h1>
      
      <Navigation categoryId={categoryId} 
        setCategoryId={setCategoryId} 
        searchValue={searchValue} 
        setSearchValue={setSearchValue}
      />

      <Collections isLoading={isLoading} collections={collections} searchValue={searchValue} />

      <Pagination page={page} setPage={setPage} />
    </main>
  )
}

export default App
