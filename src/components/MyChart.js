import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
  labels: Array.from({ length: 101 }, (_, i) => i), // Percentiles from 0 to 100
  datasets: [
    {
      label: 'Data',
      data: [0, 1, 2, 3, 5, 8, 12, 18, 25, 35, 45, 55, 65, 75, 85, 95, 100, 95, 85, 75, 65, 55, 45, 35, 25, 18, 12, 8, 5, 3, 2, 1, 0], // Example data points
      fill: false,
      borderColor: 'rgba(0,0,0,1)', // Change line color to black
      borderWidth: 1, // Decrease line width
      tension: 0.1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false, // Hide tooltips (value section)
    },
  },
  scales: {
    x: {
      grid: {
        display: false, // Hide grid lines on the x-axis
      },
      title: {
        display: false,
        text: 'Percentile',
      },
      ticks: {
        callback: function (value, index) {
          if (value % 25 === 0) {
            return value;
          }
        },
      },
    },
    y: {
      grid: {
        display: false, // Hide grid lines on the y-axis
      },
      title: {
        display: false,
        text: 'Value',
      },
      ticks: {
        display: false, // Hide y-axis values
      },
    },
  },
  annotation: {
    annotations: {
      line1: {
        type: 'line',
        yMin: 0,
        yMax: 100,
        xMin: 100,
        xMax: 100,
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 2,
        label: {
          content: 'your percentile',
          enabled: true,
          position: 'top',
        },
      },
    },
  },
};

const MyChart = () => {
  return <Line data={data} options={options} />;
};

export default MyChart;
