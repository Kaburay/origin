const moreOptions = document.querySelector("#bmore");
const bShowMobileLinks = document.querySelector("#bmenu");
const mobileMenu = document.querySelector(".links");
const moreMenu = document.querySelector(".more .menu");

bShowMobileLinks.addEventListener("click", (e) => {
    e.preventDefault();
    mobileMenu.classList.toggle("show");
});

moreOptions.addEventListener("click", (e) => {
    e.preventDefault();
    moreMenu.classList.toggle("show");
});

// Grafica Señal
const ctx = document.getElementById('ecgChart').getContext('2d');
const chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: '',
      data: [],
      fill: false,
      backgroundColor: 'rgba(2, 99, 132, 0.2)',
      borderColor: 'rgba(2, 150, 247, 1)',
      borderWidth: 3,
      pointRadius: 0, // Ocultar puntos para una línea continua
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins:{
      legend: {
        display: false
      },
      title: {
        display: false
      }
    },
    scales: {
      x: {
        grid: {
          display: false // Oculta las líneas de la cuadrícula en el eje X
        },
        ticks: {
          display: false, // Ocultar los valores en el eje Y
        },
        border: {
          display: false // Oculta el borde del eje X
      }
      },
      y: {
        grid: {
          display: false // Oculta las líneas de la cuadrícula en el eje Y
        },
        ticks: {
          display: false, // Ocultar los valores en el eje Y
        },
        border: {
                display: false // Oculta el borde del eje X
        }
      }
    }
  }
});
// Función para actualizar la gráfica
function actualizarGrafica(ir) {
  chart.data.labels.push(``);
  chart.data.datasets[0].data.push(ir);
  
  // Limitar el número de valores en el eje Y a 500
  if (chart.data.datasets[0].data.length > 50) {
    chart.data.labels.splice(0, 2);
    chart.data.datasets[0].data.splice(0, 2);
  }
  
  // Actualizar la gráfica
  chart.update();
}

// Grafica Temperatura
// Inicialización de la gráfica de temperatura
const ctx1 = document.getElementById('tempChart').getContext('2d');
const chart1 = new Chart(ctx1, {
  type: 'bar',
  data: {
    labels: [], // Etiquetas del eje X que se llenarán dinámicamente
    datasets: [{
      label: 'Temperatura',
      data: [], // Datos del eje Y
      backgroundColor: 'rgba(2, 150, 247, 0.6)',
      borderColor: 'rgba(2, 150, 247, 1)',
      borderWidth: 1,
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins:{
      legend: {
        display: false
      },
      title: {
        display: false
      }
    },
    scales: {
      x: {
        grid: {
          display: false // Oculta las líneas de la cuadrícula en el eje X
        },
        ticks: {
          display: false, // Ocultar los valores en el eje Y
        },
        border: {
          display: false // Oculta el borde del eje X
        },
        max: 5,
        min: 0
      },
      y: {
        grid: {
          display: false // Oculta las líneas de la cuadrícula en el eje Y
        },
        ticks: {
          display: false, // Ocultar los valores en el eje Y
        },
        border: {
          display: false // Oculta el borde del eje X
        },
        min: 0, // Limitar el rango del eje Y 
        max: 45
      }
    }
  }
});


// Función para actualizar la gráfica con cada valor de temperatura recibido
function actualizarGraficaTemperatura(temperature) {
  // Agregar una etiqueta vacía para cada nuevo valor en el eje X
  chart1.data.labels.push(``);
  
  // Agregar el valor de temperatura al eje Y
  chart1.data.datasets[0].data.push(temperature);
  
  // Limitar el número de valores a 50, eliminando los más antiguos
  if (chart1.data.datasets[0].data.length > 6) {
    chart1.data.labels.shift(); // Elimina la primera etiqueta
    chart1.data.datasets[0].data.shift(); // Elimina el primer valor de temperatura
  }
  
  // Actualizar el gráfico
  chart1.update();
}

// Grafica Frecuencia Cardiaca
// Inicialización de la gráfica de hr
const ctx2 = document.getElementById('hrChart').getContext('2d');
const chart2 = new Chart(ctx2, {
  type: 'line',
  data: {
    labels: [], // Etiquetas del eje X que se llenarán dinámicamente
    datasets: [{
      label: 'Hr',
      data: [], // Datos del eje Y
      fill: 'start',
      backgroundColor: 'rgba(2, 150, 247, 0.6)',
      borderColor: 'rgba(2, 150, 247, 1)',
      borderWidth: 1,
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins:{
      legend: {
        display: false
      },
      title: {
        display: false
      }
    },
    scales: {
      x: {
        grid: {
          display: false // Oculta las líneas de la cuadrícula en el eje X
        },
        ticks: {
          display: false, // Ocultar los valores en el eje Y
        },
        border: {
          display: false // Oculta el borde del eje X
        },
        max: 10,
        min: 0
      },
      y: {
        grid: {
          display: false // Oculta las líneas de la cuadrícula en el eje Y
        },
        ticks: {
          display: false, // Ocultar los valores en el eje Y
        },
        border: {
          display: false // Oculta el borde del eje X
        },
        min: 0, // Limitar el rango del eje Y 
        max: 150
      }
    }
  }
});


// Función para actualizar la gráfica con cada valor de temperatura recibido
function actualizarGraficaHr(hr) {
  // Agregar una etiqueta vacía para cada nuevo valor en el eje X
  chart2.data.labels.push(``);
  
  // Agregar el valor de temperatura al eje Y
  chart2.data.datasets[0].data.push(hr);
  
  // Limitar el número de valores a 50, eliminando los más antiguos
  if (chart2.data.datasets[0].data.length > 10) {
    chart2.data.labels.shift(); // Elimina la primera etiqueta
    chart2.data.datasets[0].data.shift(); // Elimina el primer valor de temperatura
  }
  
  // Actualizar el gráfico
  chart2.update();
}

// Grafica Frecuencia Cardiaca
// Inicialización de la gráfica de hr
const ctx3 = document.getElementById('spChart').getContext('2d');
const chart3 = new Chart(ctx3, {
  type: 'line',
  data: {
    labels: [], // Etiquetas del eje X que se llenarán dinámicamente
    datasets: [{
      label: 'SpO',
      data: [], // Datos del eje Y
      backgroundColor: 'rgba(2, 150, 247, 0.6)',
      borderColor: 'rgba(2, 150, 247, 1)',
      borderWidth: 1,
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins:{
      legend: {
        display: false
      },
      title: {
        display: false
      }
    },
    scales: {
      x: {
        grid: {
          display: false // Oculta las líneas de la cuadrícula en el eje X
        },
        ticks: {
          display: false, // Ocultar los valores en el eje Y
        },
        border: {
          display: false // Oculta el borde del eje X
        },
        max: 10,
        min: 0
      },
      y: {
        grid: {
          display: false // Oculta las líneas de la cuadrícula en el eje Y
        },
        ticks: {
          display: false, // Ocultar los valores en el eje Y
        },
        border: {
          display: false // Oculta el borde del eje X
        },
        min: 0, // Limitar el rango del eje Y 
        max: 130
      }
    }
  }
});


// Función para actualizar la gráfica con cada valor de temperatura recibido
function actualizarGraficaSp(spo2) {
  // Agregar una etiqueta vacía para cada nuevo valor en el eje X
  chart3.data.labels.push(``);
  
  // Agregar el valor de temperatura al eje Y
  chart3.data.datasets[0].data.push(spo2);
  
  // Limitar el número de valores a 50, eliminando los más antiguos
  if (chart3.data.datasets[0].data.length > 10) {
    chart3.data.labels.shift(); // Elimina la primera etiqueta
    chart3.data.datasets[0].data.shift(); // Elimina el primer valor de temperatura
  }
  
  // Actualizar el gráfico
  chart3.update();
}
