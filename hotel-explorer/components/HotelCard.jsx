'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HotelCard({ hotel }) {

  return (
    <div className="border rounded-md p-4 shadow hover:shadow-lg transition">
      <Link href={`/hotels/${hotel.slug}`}>
        <div>
          <Image 
            src={`/images/${hotel.image}`} 
            alt={hotel.name}
            width={400}
            height={250}
            className="rounded"
          />
          <h2 className="text-xl font-semibold mt-2">{hotel.name}</h2>
          <p className="text-gray-600">{hotel.location}</p>
        </div>
      </Link>
    </div>
  );
}
