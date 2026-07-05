import { paquetesDjData, PaqueteDj } from '../models/djModel';

// Controlador para obtener los paquetes de DJ
export const obtenerPaquetesDj = async (): Promise<PaqueteDj[]> => {
  // Simulamos una carga asíncrona por consistencia y escalabilidad futura
  return paquetesDjData;
};
