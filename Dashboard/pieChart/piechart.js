const ctx = document.getElementById('progressChart').getContext('2d');

const data = {
  datasets: [{
    data: [50, 50], // 50% progress
    backgroundColor: [
      'rgba(54, 162, 235, 1)', // Blue color for progress
      'rgba(211, 211, 211, 0.5)' // Light gray color for remaining
    ],
    borderWidth: 5 // Thicker border for clearer visual
  }]
};

const options = {
  cutout: '75%', // Hollow center
  rotation: 0, // Start from the top
  circumference: 360, // Full circle
  plugins: {
    tooltip: {
      enabled: false // Disable tooltips
    },
    legend: {
      display: false // Disable legend
    }
  }
};

new Chart(ctx, {
  type: 'doughnut',
  data: data,
  options: options
});
