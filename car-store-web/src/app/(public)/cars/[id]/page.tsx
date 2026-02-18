import { notFound } from 'next/navigation';

import { CarGallery } from '@/components/cars/CarGallery';
import { CarInfo } from '@/components/cars/CarInfo';
import { CarCTA } from '@/components/cars/CarCTA';
import { CarSpecs } from '@/components/cars/CarSpecs';

interface Car {
  id: string;
  name: string;
  brand: string;
  year: number;
  price: number;
  description: string;
  images: string[];
  specs: {
    label: string;
    value: string;
  }[];
}

type PageProps = {
  params: {
    id: string;
  };
};

export default async function CarDetailPage({ params }: PageProps) {
  const response = await fetch(`http://localhost:3333/cars/${params.id}`, {
    cache: 'no-store',
  });

  if (!response.ok) {
    notFound();
  }

  const car: Car = await response.json();

  return (
    <main className="max-w-7xl mx-auto px-6 py-10 space-y-12">
      <CarGallery images={car.images} />

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10">
        <CarInfo
          name={car.name}
          brand={car.brand}
          year={car.year}
          price={car.price}
          description={car.description}
        />

        <CarCTA price={car.price} />
      </div>

      <CarSpecs specs={car.specs} />
    </main>
  );
}
