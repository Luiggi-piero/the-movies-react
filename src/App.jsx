import styles from "./App.module.css";
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
// Componentes
import { MovieDetails } from "./pages/MovieDetails";
import { Home } from "./pages/Home";

export function App() {
    return (
        <BrowserRouter>
            <header>
                <Link to="/">
                    <h1 className={styles.title}>THE MOVIES</h1>
                </Link>
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="movies/:id" element={<MovieDetails/>} />
                </Routes>
            </main>
        </BrowserRouter>
    )
}
