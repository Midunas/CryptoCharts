import { NextPage } from 'next'
import React, { useEffect, useRef, useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import type { ChartData, ChartOptions } from 'chart.js';
import { Crypto } from '../types/crypto';
import moment from 'moment';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface GraphProps {
  data: Crypto[]
}

const PriceGraph: NextPage<GraphProps> = (props) => {

  //TODO: Make many selections possible, to compare data. 
  //TODO: Fetch crypto news on selected crypto coin?

  const selectRef = useRef<HTMLSelectElement>(null);
  const [cryptos, setCryptos] = useState<Crypto | null>(null);
  const [selected, setSelected] = useState<any | null>('bitcoin');
  const cryptoArray = props.data

  const [options, setOptions] = useState<ChartOptions<'line'>>({
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: "white",
          font: {
            size: 18
          }
        }
      },
      title: {
        display: true,
        color: 'white',
        font: {
          size: 18
        },
        text: 'Crypto Price 30 days',
      },
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
    },
  });

  const data = {
    labels: cryptos?.prices.map((price: number[]) => { return moment.unix(price[0] / 1000).format('MM-DD') }),
    datasets: [
      {
        label: selected,
        data: cryptos?.prices.map((price: number[]) => { return price[1] }),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  const getCrypto = async (selectValue: string) => {
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${selectValue}/market_chart?vs_currency=usd&days=30&interval=daily`)
    const data = await res.json()
    setCryptos(data)
  }

  useEffect(() => {
    getCrypto(selected)
  }, [selected])



  return (
    <div className='w-[1000px] mx-auto mt-20'>
      <select
        className='p-1 rounded text-white bg-zinc-600'
        ref={selectRef}
        name='Crypto'
        onChange={() => setSelected(selectRef.current!.value)}
      >
        {cryptoArray?.map((x: Crypto, i: number) => {
          return <option key={i} value={x.id.toLowerCase()}>{x.id}</option>
        })
        }
      </select>
      <div>
        {props ? <Line options={options} data={data} /> : null}
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {

  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
  const data = await res.json();

  return {
    props: {
      data,
    },
  };

};

export default PriceGraph;