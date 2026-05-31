// Definimos cómo se ve la estructura de una categoría
export interface CategoriaProducto {
  id: string;
  titulo: string;
  icono: string;
  items: string[];
}

// Estos son los datos extraídos del mensaje de WhatsApp
export const categoriasData: CategoriaProducto[] = [
  {
    id: "carnes",
    titulo: "Carnes y Embutidos",
    icono: "🥩",
    items: [
      "Longaniza",
      "Chorizo",
      "Chorizo Argentino",
      "Chuleta Ahumada",
      "Pepperoni",
      "Jamón Serrano",
      "Variedad de Carnes Frías"
    ]
  },
  {
    id: "lacteos",
    titulo: "Lácteos y Bebidas",
    icono: "🥛",
    items: [
      "Crema Lala y Alpura",
      "Refrescos",
      "Aguas de sabor"
    ]
  },
  {
    id: "quesos",
    titulo: "Variedad de Quesos",
    icono: "🧀",
    items: [
      "Queso Oaxaca",
      "Queso Panela",
      "Queso Canasto",
      "Queso Manchego",
      "Queso Gouda",
      "Queso Chihuahua",
      "Queso Mozzarella Rallado"
    ]
  },
  {
    id: "abarrotes",
    titulo: "Abarrotes y Más",
    icono: "🛒",
    items: [
      "Pan Bimbo y Botanas",
      "Dulces",
      "Chiles Secos y Especias",
      "Knorr Suiza y Sopas",
      "Desechables"
    ]
  }
];
