import BarChart from "../components/BarChart";
import PieChart from '../components/PieChart'
import DoughnutChart from "../components/DoughnutChart";
import { Crypto } from '../types/crypto'

interface HomeProps {
  data: Crypto[],
}

const Home: React.FC<HomeProps> = (props) => {

  return (
    <div className='container flex flex-col text-white'>
      <BarChart data={props.data} />
      <div className="flex gap-x-28">
        <PieChart data={props.data} />
        <DoughnutChart data={props.data} />
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {

  const res = await fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
    method: 'GET',
    headers: {
      'X-CMC_PRO_API_KEY': process.env['API_KEY'] || ''
    }
  })
  const data = await res.json();
  return {
    props: {
      data: data,
    },
  };

};

export default Home;