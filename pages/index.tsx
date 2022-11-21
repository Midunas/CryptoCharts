import BarChart from "../components/BarChart";
import PieChart from '../components/PieChart'
import DoughnutChart from "../components/DoughnutChart";
import NavBar from "../components/NavBar";

interface HomeProps {
  //TODO: write them up
}

const Home = (props: any) => {

  return (
    <>
      <NavBar />
      <div className='container flex flex-col text-white'>
        <BarChart data={props.data} />
        <div className="flex gap-x-28">
          <PieChart data={props.data} />
          <DoughnutChart data={props.data} />
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = async () => {

  const res = await fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
    method: 'GET',
    headers: {
      'X_CMC_PRO_API_KEY': process.env['X_CMC_PRO_API_KEY'] || ''
    }
  })

  const latestPrices = await res.json();

  return {
    props: {
      data: latestPrices,
    },
  };

};

export default Home;