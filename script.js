const productos = [
  { id: 1, nombre: "Silla Moderna", categoria: "Sillas", precio: 45000, imagen: "https://via.placeholder.com/300x200" },
  { id: 2, nombre: "Mesa Minimalista", categoria: "Mesas", precio: 60000, imagen: "https://via.placeholder.com/300x200" },
  { id: 3, nombre: "Sofá Clásico", categoria: "Sofás", precio: 80000, imagen: "https://via.placeholder.com/300x200" },
  { id: 4, nombre: "Silla Elegante", categoria: "Sillas", precio: 30000, imagen: "https://via.placeholder.com/300x200" },
  { id: 5, nombre: "Mesa de Comedor", categoria: "Mesas", precio: 70000, imagen: "https://via.placeholder.com/300x200" },
  { id: 6, nombre: "Sofá Esquinero", categoria: "Sofás", precio: 100000, imagen: "https://via.placeholder.com/300x200" },
  { id: 7, nombre: "Silla Vintage", categoria: "Sillas", precio: 20000, imagen: "https://via.placeholder.com/300x200" },
  { id: 8, nombre: "Mesa Redonda", categoria: "Mesas", precio: 55000, imagen: "https://via.placeholder.com/300x200" },
];

const contenedor = document.getElementById("productos");
const cartCount = document.getElementById("cart-count");
let carrito = [];

function renderProductos() {
  const search = document.getElementById("search").value.toLowerCase();
  const categoria = document.getElementById("filter-category").value;
  const precioFiltro = document.getElementById("filter-price").value;

  contenedor.innerHTML = "";
  productos.filter(p => {
    return (
      (!search || p.nombre.toLowerCase().includes(search)) &&
      (!categoria || p.categoria === categoria) &&
      (!precioFiltro || (precioFiltro === "low" ? p.precio < 50000 : p.precio >= 50000))
    );
  }).forEach(p => {
    const card = document.createElement("div");
    card.className = "bg-white rounded shadow p-4 text-center";
    card.innerHTML = `
      <img src="${p.imagen}" alt="${p.nombre}" class="w-full h-40 object-cover mb-2 rounded">
      <h3 class="text-lg font-bold">${p.nombre}</h3>
      <p class="text-gray-600 mb-2">$${p.precio.toLocaleString()}</p>
      <button onclick="agregarAlCarrito(${p.id})" class="bg-black text-white px-4 py-2 rounded">Agregar al carrito</button>
    `;
    contenedor.appendChild(card);
  });
}

function agregarAlCarrito(id) {
  carrito.push(productos.find(p => p.id === id));
  cartCount.textContent = carrito.length;
  console.log("Carrito:", carrito);
}

document.getElementById("search").addEventListener("input", renderProductos);
document.getElementById("filter-category").addEventListener("change", renderProductos);
document.getElementById("filter-price").addEventListener("change", renderProductos);

renderProductos();