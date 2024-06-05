const ctx = document.getElementById('myChart').getContext('2d');
const data = {
  labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Real time',
      backgroundColor: 'blue',
      data: [4, 14, 8, 10, 6, 3, 8],
    },
    {
      label: 'Intend time',
      backgroundColor: 'gray',
      data: [8, 13, 12, 16, 12, 5, 16],
    }
  ]
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
      max: 20, // Set the maximum value to 20
      ticks: {
        stepSize: 2, // Set step size to 2 for closer intervals
        color: '#000',
      },
      grid: {
        color: 'rgba(0, 0, 0, 0.1)',
        lineWidth: 1, // Make grid lines thinner
      },
    },
    x: {
      ticks: {
        color: '#000',
      },
      grid: {
        color: 'rgba(0, 0, 0, 0.1)',
      },
      barPercentage: 0.4, // Adjust the width of the bars
      categoryPercentage: 0.8, // Increase the width of the bar groups
    }
  },
  plugins: {
    tooltip: {
      callbacks: {
        label: function(context) {
          let label = context.dataset.label || '';
          if (label) {
            label += ': ';
          }
          label += context.parsed.y;
          return label;
        }
      }
    },
    legend: {
      position: 'bottom',
      labels: {
        color: '#000',
      }
    },
    title: {
      display: true,
      text: 'Work Performance',
      color: '#000',
      font: {
        size: 24,
      }
    }
  },
  responsive: true,
  maintainAspectRatio: false,
};

new Chart(ctx, {
  type: 'bar',
  data: data,
  options: options,
});
