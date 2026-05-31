import { categoriasData, CategoriaProducto } from '../models/cremeriaModel';

// Controlador para obtener los productos
export const obtenerCategoriasCremeria = async (): Promise<CategoriaProducto[]> => {
  // Simulamos una pequeña carga (útil para ver animaciones de esqueleto en el futuro)
  // o simplemente retornamos los datos directamente si es síncrono.
  return categoriasData;
};
