
let comparador = [];

function agregarAComparador(id) {
  if (!comparador.includes(id)) {
    comparador.push(id);
    alert('Producto agregado para comparar.');
    renderComparador();
  }
}

function renderComparador() {
  const panel = document.getElementById('panel-comparador');
  panel.innerHTML = '<h2>Comparador</h2>';
  if (comparador.length === 0) {
    panel.innerHTML += '<p>No hay productos seleccionados.</p>';
    return;
  }
  comparador.forEach(id => {
    const prod = productos.find(p => p.id === id);
    panel.innerHTML += `<div style="margin-bottom:10px;"><strong>${prod.nombre}</strong><br>$${prod.precio.toLocaleString()}</div>`;
  });
}

window.onload = () => {
  const panel = document.createElement('div');
  panel.id = "panel-comparador";
  panel.style.position = "fixed";
  panel.style.bottom = "100px";
  panel.style.left = "20px";
  panel.style.background = "#f3f4f6";
  panel.style.padding = "10px";
  panel.style.borderRadius = "10px";
  panel.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
  panel.style.zIndex = 999;
  document.body.appendChild(panel);
  renderComparador();
};
