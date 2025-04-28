//import Link from 'next/link';
import hotels from '../../data/hotels.json';
import HotelList from '../../components/HotelList';

export default function HotelsPage(){
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Explore Hotels</h1>
      <HotelList hotels={hotels} />
    </div>
  );
}