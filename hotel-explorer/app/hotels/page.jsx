//import Link from 'next/link';
import hotels from '../../data/hotels.json';
import HotelList from '../../components/HotelList';
import Layout from '../../components/Layout';

export default function HotelsPage(){
  return (
    <Layout>
      <h1>All Hotels</h1>
      <HotelList hotels={hotels} />
    </Layout>
  );
}