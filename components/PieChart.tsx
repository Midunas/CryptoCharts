import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface BarChartProps {
  [key: string]: any;
}

interface CryptoObject {
  name: string,
  quote: any,
}


const PieChart: React.FC<BarChartProps> = ({ data }) => {

  const cryptoArray = data?.data
  const only5Array = cryptoArray?.slice(0, 10)

  const info = {
    labels: only5Array?.map((x: CryptoObject) => x.name),
    datasets: [
      {
        label: '# of Votes',
        data: only5Array?.map((x: CryptoObject) => x.quote['USD'].volume_change_24h),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className='mt-12'>
      <h1 className='text-3xl text-center text-white mb-4'>Volume change 24h</h1>
      <Pie data={info} height={200} width={400} />
    </div>
  )
}

export default PieChart;