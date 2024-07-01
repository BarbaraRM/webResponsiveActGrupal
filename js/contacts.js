document.addEventListener("DOMContentLoaded", function () {
  const dataTemp = [
    {
      nombre: "First Majestic Silver Corp",
      descripcion:
        "Empresa ubicada en Estados Unidos (Carolina del Norte). Venta de electrodomesticos y linea blanca.",
      etiqueta: "Ya genera Ganancias",
      tiempo:"1 año"
    },
    {
      nombre: "Newmont Corporation",
      descripcion: "Empresa tecnologica lider en el mercado chino.",
      etiqueta: "Ya genera Ganancias",
      tiempo:"2 meses"
    },
    {
      nombre: "Royal Gold Inc",
      descripcion:
        "Empresa ubicada en Nuevo Mexico. Venta de linea para el hogar.",
      etiqueta: "Ya genera Ganancias",
      tiempo:"6 meses"
    },
  ];

  // Función para mostrar y guardar la lista de empresas
  function mostrarEmpresas() {
    const empresas = JSON.parse(localStorage.getItem("empresas")) || dataTemp;

    const empresaList = document.getElementById("empresa-list");
    empresaList.innerHTML = "";

    empresas.forEach((empresa, index) => {
      const listItem = document.createElement("a");
      listItem.classList.add(
        "list-group-item",
        "list-group-item-action",
        "active"
      );
      listItem.setAttribute("href", "#");
      listItem.setAttribute("aria-current", "true");
      listItem.innerHTML = `
        <a href="#" class="list-group-item list-group-item-action">
          <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">${empresa.nombre}</h5>
          <small>Hace ${empresa.tiempo}</small>
        </div>
        <p class="mb-1">${empresa.descripcion}</p>
        <small>${empresa.etiqueta}</small>
        </a>
      `;
      empresaList.appendChild(listItem);
    });
  }

  // Mostrar empresas al cargar la página
  mostrarEmpresas();

  function agregarEmpresa(event) {
    event.preventDefault();
    const nombre = document.getElementById("nombreEmpresa").value;
    const descripcion = document.getElementById("descripcionEmpresa").value;
    if (nombre.trim() === "" || descripcion.trim() === "") {
      alert("Por favor completa todos los campos.");
      return;
    }
    const nuevaEmpresa = {
      nombre: nombre,
      descripcion: descripcion,
      etiqueta: "No genera ganancias",
      tiempo:"1 dia"
    };
    const empresas = JSON.parse(localStorage.getItem("empresas")) || dataTemp;
    empresas.push(nuevaEmpresa);
    localStorage.setItem("empresas", JSON.stringify(empresas));
    mostrarEmpresas();
    formAgregarEmpresa.reset();
  }

  // Asignar la función al evento submit del formulario
  const formAgregarEmpresa = document.getElementById("formAgregarEmpresa");
  formAgregarEmpresa.addEventListener("submit", agregarEmpresa);

  // Logout function to remove user token from localStorage
  document.getElementById("logout").addEventListener("click", function () {
    localStorage.removeItem("user");
    window.location.href = "/";
  });
});
