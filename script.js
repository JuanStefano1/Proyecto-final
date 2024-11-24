// Información de los profesores por materia
const profesores = {
    Matemáticas: [
      {
        nombre: "María López",
        experiencia: "5 años enseñando matemáticas a nivel secundario y universitario.",
        contacto: "maria.lopez@correo.com",
      },
      {
        nombre: "Pedro Ruiz",
        experiencia: "Docente de matemáticas con enfoque en álgebra y cálculo, 3 años de experiencia.",
        contacto: "pedro.ruiz@correo.com",
      },
      {
        nombre: "Lucía Gómez",
        experiencia: "Licenciada en Matemáticas, con experiencia en preparación de exámenes universitarios.",
        contacto: "lucia.gomez@correo.com",
      },
    ],
    Física: [
      {
        nombre: "Juan Pérez",
        experiencia: "Especialista en física aplicada con 3 años de experiencia.",
        contacto: "juan.perez@correo.com",
      },
      {
        nombre: "Carlos Ramírez",
        experiencia: "Físico experimental con experiencia en laboratorio y docencia universitaria.",
        contacto: "carlos.ramirez@correo.com",
      },
    ],
    Química: [
      {
        nombre: "Ana Torres",
        experiencia: "Graduada en química con 4 años de experiencia en tutorías.",
        contacto: "ana.torres@correo.com",
      },
      {
        nombre: "Elena Fernández",
        experiencia: "Profesora de química con enfoque práctico en reactivos y química orgánica.",
        contacto: "elena.fernandez@correo.com",
      },
    ],
    Biología: [
      {
        nombre: "Carlos Díaz",
        experiencia: "Biólogo marino con pasión por la enseñanza y 6 años de experiencia.",
        contacto: "carlos.diaz@correo.com",
      },
      {
        nombre: "Laura Sánchez",
        experiencia: "Bióloga especializada en genética, con 5 años de experiencia en educación.",
        contacto: "laura.sanchez@correo.com",
      },
    ],
  };
  
  // Referencias al DOM
  const profesorInfo = document.getElementById("profesor-info");
  const profesorDetalles = document.getElementById("profesor-detalles");
  const materiasSection = document.getElementById("materias");
  
  // Función para mostrar la información de los profesores de la materia seleccionada
  function mostrarProfesor(materia) {
    const listaProfesores = profesores[materia];
    let contenido = `<h2>Profesores de ${materia}</h2>`;
    listaProfesores.forEach((profesor) => {
      contenido += `
        <div class="profesor-detalle">
          <h3>${profesor.nombre}</h3>
          <p><strong>Experiencia:</strong> ${profesor.experiencia}</p>
          <p><strong>Contacto:</strong> ${profesor.contacto}</p>
        </div>
      `;
    });
    profesorDetalles.innerHTML = contenido;
    materiasSection.style.display = "none";
    profesorInfo.style.display = "block";
  }
  
  // Función para volver a la lista de materias
  function volverALista() {
    profesorInfo.style.display = "none";
    materiasSection.style.display = "flex";
  }
  