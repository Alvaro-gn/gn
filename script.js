
document.addEventListener("DOMContentLoaded", () => {
  const botonesAgregar = document.querySelectorAll(".add-to-cart");
  const modal = document.getElementById("cart-modal");
  const contenidoCarrito = document.getElementById("cart-items");
  const abrirCarrito = document.getElementById("cart-button");
  const cerrarCarrito = document.getElementById("close-cart");

  let carrito = [];

  botonesAgregar.forEach(boton => {
    boton.addEventListener("click", () => {
      const nombre = boton.getAttribute("data-name");
      const precio = parseFloat(boton.getAttribute("data-price"));

      const productoExistente = carrito.find(p => p.nombre === nombre);
      if (productoExistente) {
        productoExistente.cantidad++;
      } else {
        carrito.push({ nombre, precio, cantidad: 1 });
      }

      actualizarCarrito();
    });
  });

  function actualizarCarrito() {
    contenidoCarrito.innerHTML = "";
    let total = 0;

    carrito.forEach(p => {
      const div = document.createElement("div");
      div.className = "mb-2 border-b pb-2";
      div.innerHTML = `<strong>${p.nombre}</strong><br>Cantidad: ${p.cantidad}<br>Precio: $${p.precio * p.cantidad}`;
      contenidoCarrito.appendChild(div);
      total += p.precio * p.cantidad;
    });

    const totalDiv = document.createElement("div");
    totalDiv.className = "mt-4 font-bold";
    totalDiv.innerText = `Total: $${total}`;
    contenidoCarrito.appendChild(totalDiv);
  }

  abrirCarrito.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });

  cerrarCarrito.addEventListener("click", () => {
    modal.classList.add("hidden");
  });
});
