import Link from 'next/link';
import hotels from '../../data/hotels.json';

export default function HotelListPage(){
  return (
    <div>
      <h1>All Hotels</h1>
      {hotels.map(hotel => (
        <div key={hotel.slug}>
          <h2>{hotel.name}</h2>
          <p>{hotel.description}</p>
          <Link href={`/hotels/${hotel.slug}`}>View Details</Link>
        </div>
      ))}
    </div>
  )
}