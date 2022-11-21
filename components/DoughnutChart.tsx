import React from 'react';
import { Doughnut } from 'react-chartjs-2';
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
  total_supply: number,
}


const DoughnutChart: React.FC<BarChartProps> = ({ data }) => {

  const cryptoArray = data?.data
  const only10Array = cryptoArray?.slice(0, 10)

  const info = {
    labels: only10Array?.map((x: CryptoObject) => x.name),
    datasets: [
      {
        label: '# of Votes',
        data: only10Array?.map((x: CryptoObject) => x.total_supply),
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
      <h1 className='text-3xl text-white'>Total supply</h1>
      <Doughnut data={info} height={200} width={400} />
    </div>
  )
}

export default DoughnutChart;