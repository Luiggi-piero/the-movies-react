import styles from "./Search.module.css";
import { FiSearch } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Navega por la ruta
import { usePath } from "../hooks/usePath";

export function Search() {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate(); // Retorna un metodo para modificar la ruta
  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/?search=${searchInput}`);
  }

  const query = usePath();
  let search = query.get("search");

  useEffect(() => {
    setSearchInput(search || "");
  }, [search]);

  return (
    <form className={styles.searchWrap} onSubmit={handleSubmit}>
      <div className={styles.search}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Buscar"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button className={styles.searchButton} type="submit">
          <FiSearch />
        </button>
      </div>
    </form>
  );
}
