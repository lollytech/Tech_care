import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip,);

const Chart = () => {
  const data = {
    labels: ['Oct,2023', 'Nov,2023', 'Dec,2023', 'Jan,2024', 'Feb, 2024', 'Mar,2024'],
    datasets: [
      {
        
        data: [120, 128, 160, 117, 150, 160],
        borderColor: '#E66FD2',
        backgroundColor: '#C26EB4',
        
      },
      {
        data: [110, 64, 81, 110, 97, 77, 80],
        borderColor: '#8C6FE6',
        backgroundColor: '#7E6CAB',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
 
    },
  };

  return (
    <div className=" ">
      <Line data={data} options={options} />
    </div>
  );
};
export default Chart;
