import { Routes, Route } from "react-router-dom";
import { MovieList } from "../pages/MovieList";
import { MovieDetail } from "../pages/MovieDetail";
import { Search } from "../pages/Search";
import { PageNotFound } from "../pages/PageNotFound";


export const AllRoutes = () => {
  return (
    <div className="dark:bg-darkbg">
      <main>
        <Routes>
            <Route path="" element={<MovieList apiPath="movie/now_playing" title="Home"/>} />
            <Route path="movies/:id" element={<MovieDetail />} />
            <Route path="movies/popular" element={<MovieList apiPath="movie/popular" title="popular"/>} />
            <Route path="movies/popular/movies/:id" element={<MovieDetail />} />
            <Route path="movies/top" element={<MovieList apiPath="movie/top_rated" title="top"/>} />
            <Route path="movies/top/movies/:id" element={<MovieDetail />} />
            <Route path="movies/upcoming" element={<MovieList apiPath="movie/upcoming" title="upcoming"/>} />
            <Route path="movies/upcoming/movies/:id" element={<MovieDetail />} />
            <Route path="search" element={<Search apiPath="/search/movie" />} />
            <Route path="search/movies/:id" element={<MovieDetail />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>  
    </div>
  )
}