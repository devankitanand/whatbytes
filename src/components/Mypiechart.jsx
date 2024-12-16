// // src/components/MyDoughnutChart.js

// import { Doughnut } from 'react-chartjs-2';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// ChartJS.register(ArcElement, Tooltip, Legend);

// const data = {
//   labels: ['Completed', 'Remaining'],
//   datasets: [
//     {
//       label: 'Progress',
//       data: [12, 3], // 12 parts completed, 3 parts remaining
//       backgroundColor: ['#387ef2', '#e0e0e0'], // Custom colors for completed and remaining parts
//       borderColor: ['#4caf50', '#e0e0e0'],
//       borderWidth: 1,
//     },
//   ],
// };

// const options = {
//   cutout: '70%', // Decrease the cutout to make the arc thicker
//   plugins: {
//     legend: {
//       display: false, // Hide legend
//     },
//     tooltip: {
//       enabled: false, // Hide tooltips
//     },
//   },
// };

// const MyDoughnutChart = () => {
//   return (
//     <div style={{ position: 'relative', width: '150px', height: '150px' }}>
//       <Doughnut data={data} options={options} />
//       <div
//         style={{
//           position: 'absolute',
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//           textAlign: 'center',
//         }}
//       >
//         <img src="/target.png" alt="Target" style={{ width: '50px', height: '50px' }} />
//       </div>
//     </div>
//   );
// };

// export default MyDoughnutChart;

// src/components/MyDoughnutChart.js

"use client";
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const MyDoughnutChart = ({ score }) => {
  const totalQuestions = 15;
  const correctAnswers = parseInt(score.split('/')[0], 10); // Extract correct answers from score
  const remaining = totalQuestions - correctAnswers;

  const data = {
    labels: ['Correct', 'Incorrect'],
    datasets: [
      {
        label: 'Progress',
        data: [correctAnswers, remaining],
        backgroundColor: ['#387ef2', '#e0e0e0'], 
        borderColor: ['#4caf50', '#e0e0e0'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    cutout: '70%', // Decrease the cutout to make the arc thicker
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  return (
    <div style={{ position: 'relative', width: '150px', height: '150px' }}>
      <Doughnut data={data} options={options} />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
        }}
      >
        <img src="/target.png" alt="Target" style={{ width: '50px', height: '50px' }} />
      </div>
    </div>
  );
};

export default MyDoughnutChart;
