# GN_amoblamientos — UI minimal (HTML + Tailwind + JS)

## Cómo correrlo
1. Abrí `index.html` con doble click (no requiere servidor).
2. Opcional: subilo a GitHub y activá **GitHub Pages** (branch `main`, carpeta raíz).

## Qué incluye
- **Navbar** blanco (logo izq., menú centrado, iconos der.) con sombra sutil.
- **Grid responsivo 1/2/3/4 columnas** según 360/768/1024/1440.
- **Cards sin bordes**, aire generoso, imagen grande centrada.
- **Nombre en MAYÚSCULAS subrayado**, precio fuerte, precio anterior tachado y **%OFF** azul si aplica.
- Secundario en gris: “con transf/dep.” y cuotas.
- **Hover**: levanta levemente y aparece el botón “Agregar al carrito”.
- **Carrito** con sumar/restar/eliminar, subtotal, checkout por WhatsApp.
- **Persistencia** en `localStorage` y **contador** sincronizado (navbar + botón flotante).
- Accesibilidad mínima: labels, `aria-live`, foco visible.

## Estructura
```
index.html
styles.css
app.js
```

## Notas
- La imagen del banner apunta a `Imagen de WhatsApp 2025-07-13 a las 21.01.39_ca8c2be2.jpg`. Cambiala por tu ruta si fuera necesario.
- No hay dependencias extra. Tailwind se carga por CDN.
- Si ya tenías datos, la clave de carrito usa `carrito_v2` para evitar conflictos.
