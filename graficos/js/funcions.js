document.addEventListener("DOMContentLoaded", function() {
  function actualizarGrafico(chartId, datos) {
    new Chartist.Bar(
      `#${chartId}`,
      {
        labels: ["Dato 1", "Dato 2"],
        series: [datos],
      },
      {
        seriesBarDistance: 10,
        reverseData: true,
        horizontalBars: true,
        axisY: {
          offset: 70,
        },
      }
    );
  }

  window.enviarDatos = function(chartId, dato1Id, dato2Id) {
    let dato1 = document.getElementById(dato1Id).value;
    let dato2 = document.getElementById(dato2Id).value;

    let datos = [dato1, dato2];
    actualizarGrafico(chartId, datos);
  };
});

/*
window.onload = (event) => {
  new Chartist.Bar(
    "#student",
    {
      labels: ["Organismos Acad. Comunes", "Grado y Tenico superior"],
      series: [[47983, 148642]],
    },
    {
      seriesBarDistance: 10,
      reverseData: true,
      horizontalBars: true,
      axisY: {
        offset: 70  },
    }
  );

  new Chartist.Bar(
    "#teacher",
    {
      labels: ["Tiempo Completo", "Medio Tiempo", "Por Hora"],
      series: [[188, 69, 2909]],
    },
    {
      seriesBarDistance: 10,
      reverseData: true,
      horizontalBars: true,
      axisY: {
        offset: 70,
      },
    }
  );

  new Chartist.Bar(
    "#egresados",
    {
      labels: ["Grado", "Postgrado"],
      series: [[6579, 3443]],
    },
    {
      seriesBarDistance: 10,
      reverseData: true,
      horizontalBars: true,
      axisY: {
        offset: 70,
      },
    }
  );

  new Chartist.Bar(
    "#research",
    {
      labels: ["Finalizados", "En Ejecución"],
      series: [[10, 276]],
    },
    {
      seriesBarDistance: 10,
      reverseData: true,
      horizontalBars: true,
      axisY: {
        offset: 70,
      },
    }
  );
};
*/