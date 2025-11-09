// Datos de las entradas del blog
const entradas = {
  1: {
    titulo: "Kyoto en otoño",
    meta: "Kyoto, Japón · Octubre 2025",
    imagen:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
    parrafos: [
      "Kyoto en otoño es una explosión de colores rojos y dorados. Los templos se rodean de hojas de arce y el ambiente es muy tranquilo.",
      "Lo más recomendable es madrugar para visitar los templos más famosos y evitar aglomeraciones. Después, perderse por los barrios tradicionales es la mejor forma de conocer la ciudad.",
      "Moverse por Kyoto es fácil en autobús y metro. Una tarjeta de transporte recargable ahorra mucho tiempo."
    ]
  },
  2: {
    titulo: "Ruta en coche por la Toscana",
    meta: "Toscana, Italia · Mayo 2024",
    imagen:
      "https://images.unsplash.com/photo-1500534314211-0a24cd03f2c0?auto=format&fit=crop&w=900&q=80",
    parrafos: [
      "Conducir por la Toscana permite ver colinas, viñedos y pueblos en lo alto de pequeñas montañas.",
      "La ruta puede incluir Florencia, Siena, San Gimignano y Montepulciano. En cada zona hay plazas, iglesias y pequeños restaurantes familiares.",
      "Es recomendable evitar entrar con el coche en los centros históricos porque muchas ciudades tienen zonas de tráfico restringido."
    ]
  },
  3: {
    titulo: "Invierno suave en Canarias",
    meta: "Islas Canarias, España · Enero 2025",
    imagen:
      "https://images.unsplash.com/photo-1541417904950-b855846fe074?auto=format&fit=crop&w=900&q=80",
    parrafos: [
      "Mientras en la península hace frío, en Canarias es posible estar en manga corta al sol.",
      "En una misma isla se puede combinar playa, senderismo y visitas a pequeños pueblos pesqueros.",
      "Para moverse con libertad, lo más cómodo es alquilar coche. El transporte público existe, pero los horarios son más limitados."
    ]
  }
};

// Elementos de la zona de lectura
const tituloElemento = document.getElementById("entrada-titulo");
const metaElemento = document.getElementById("entrada-meta");
const imagenElemento = document.getElementById("entrada-imagen");
const contenidoElemento = document.getElementById("entrada-contenido");

// Función que actualiza la entrada completa al hacer clic
function mostrarEntrada(id) {
  const entrada = entradas[id];
  if (!entrada) return;

  tituloElemento.textContent = entrada.titulo;
  metaElemento.textContent = entrada.meta;

  imagenElemento.src = entrada.imagen;
  imagenElemento.alt = entrada.titulo;
  imagenElemento.classList.remove("oculto");

  // Limpiar contenido anterior
  contenidoElemento.innerHTML = "";

  entrada.parrafos.forEach((texto) => {
    const p = document.createElement("p");
    p.textContent = texto;
    contenidoElemento.appendChild(p);
  });
}

// Añadir evento a los botones "Leer más"
const botones = document.querySelectorAll(".tarjeta-entrada .ver-entrada");

botones.forEach((boton) => {
  boton.addEventListener("click", function () {
    const tarjeta = this.closest(".tarjeta-entrada");
    const id = tarjeta.getAttribute("data-id");
    mostrarEntrada(id);
  });
});

// Año actual en el pie de página
const spanAnio = document.getElementById("anio");
spanAnio.textContent = new Date().getFullYear();
