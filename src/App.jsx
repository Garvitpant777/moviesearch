import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";

/* Layouts */
import RootLayout from "./layouts/RootLayout";
import MoviesLayout from "./layouts/MoviesLayout";
import TvShowsLayout from "./layouts/TvShowsLayout";
import SearchLayout from "./layouts/SearchLayout";

/* Pages */
import Home from "./pages/home/Home";
import Movies from "./pages/movies/Movies";
import PopularMovies from "./pages/movies/PopularMovies";
import MovieDetails from "./pages/movieDetails/MovieDetails";
import TvShows from "./pages/tvshows/TvShows";
import PopularShows from "./pages/tvshows/PopularShows";
import TvShowDetails from "./pages/tvshowDetails/TvShowDetails";
import MoviesSearch from "./pages/search/MoviesSearch";
import TvShowsSearch from "./pages/search/TvShowsSearch";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />

      <Route path="movies" element={<MoviesLayout />}>
        <Route index element={<PopularMovies />} />
        <Route
          path=":type"
          element={<Movies />}
          errorElement={<h1>Not Available</h1>}
        />
      </Route>
      <Route path="tvshows" element={<TvShowsLayout />}>
        <Route index element={<PopularShows />} />
        <Route
          path=":type"
          element={<TvShows />}
          errorElement={<h1>Not Available</h1>}
        />
      </Route>

      <Route path="movie/:id" element={<MovieDetails />} />
      <Route path="tvshow/:id" element={<TvShowDetails />} />

      <Route path="search" element={<SearchLayout />}>
        <Route index element={<MoviesSearch />} />
        <Route path="movies" element={<MoviesSearch />} />
        <Route path="tvshows" element={<TvShowsSearch />} />
      </Route>

      <Route path="about" element={<AboutUs />} />
      <Route path="contact" element={<ContactUs />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default function App() {
  return (
    <RouterProvider
      router={router}
      fallbackElement={<h1>Something went wrong</h1>}
    ></RouterProvider>
  );
}
