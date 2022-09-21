import { useLocation } from "react-router-dom"; // Para conocer la ubicacion actual
import React from "react";

// Hook personalizado para analizar la ruta actual - utiliza el hook useLocation
export function usePath() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}
