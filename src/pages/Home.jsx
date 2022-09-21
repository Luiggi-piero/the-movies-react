import { MoviesGrid } from "../components/MoviesGrid";
import { Search } from "../components/Search";

export function Home() {
  return (
    <div>
      <Search />
      <MoviesGrid />
    </div>
  );
}
