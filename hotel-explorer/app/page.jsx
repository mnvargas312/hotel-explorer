import Layout from '../components/Layout';
import HotelList from '../components/HotelList';
import hotels from '../data/hotels.json';

export default function HomePage() {
  return (
    <Layout>
      <h1>Welcome to Hotel Explorer</h1>
      <HotelList hotels={hotels} />
    </Layout>
  );
}
