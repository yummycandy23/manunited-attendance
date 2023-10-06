//import React from 'react';
import Chart from 'chart.js/auto';
import { getAttendancesByYear } from './api'; 

(async function() {
  const data = await getAttendancesByYear();
function updateChart(data) {
  const ctx = document.getElementById('attendances');
}
  new Chart(ctx, {
          type: 'bar',
          data: {
            labels: data.labels,
            datasets: [{
              label: 'Data from API',
              data: data.values,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderwidth: 1,
            }],
          },
        });
})();
