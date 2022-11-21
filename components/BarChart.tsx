import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import Link from 'next/link';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


interface BarChartProps {
  [key: string]: any;
}

interface CryptoObject {
  name: string,
  quote: any,
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {

  const cryptoArray = data.data
  const only10Array = cryptoArray.slice(0, 10)

  const info = {
    labels: only10Array?.map((x: CryptoObject) => x.name),
    datasets: [{
      label: 'Market Cap',
      data: only10Array?.map((x: CryptoObject) => x.quote['USD'].market_cap),
      backgroundColor: [
        'rgba(193, 163, 9, 0.8)',
        'rgba(54,162,235,0.8)',
        'rgba(255,206,86,0.8)',
        'rgba(75,192,192,0.8)',
        'rgba(255,99,132,0.8)',
        '#ffa1b6cc',
      ],
      borderColor: [
        'rgba(193, 163, 9, 1)',
        'rgba(54,162,235,1)',
        'rgba(255,206,86,1)',
        'rgba(75,192,192,1)',
        'rgba(255,99,132,1)',
        'rgba(255,99,132,1)',
      ]
    }]
  }
  const options = {
    plugins: {
      legend: {
        labels: {
          color: "white",
          font: {
            size: 18
          }
        }
      }
    },
    scales: {
      yAxes: {
        ticks: {
          color: 'white',
        }
      },
      xAxes: {

        ticks: {
          color: 'white',
        }
      },
    }
  }

  return (
    <div className='mt-12'>
      <div className=' text-3xl mb-8 justify-end flex'>
        <Link href='/PriceGraph' className='cursor-pointer hover:bg-zinc-700 hover:text-orange-200 p-4 rounded'>Price Graph
        </Link>
      </div>
      <Bar
        data={info}
        options={options}
        height={500}
        width={1000}
      />
    </div>
  )
}

export default BarChart;