import { CarGallery } from '@/components/cars/CarGallery';
import { CarInfo } from '@/components/cars/CarInfo';
import { CarCTA } from '@/components/cars/CarCTA';
import { CarSpecs } from '@/components/cars/CarSpecs';

export default function CarDetailPage() {
  // MOCK TEMPORÁRIO
  const car = {
    name: 'Civic Touring',
    brand: 'Honda',
    model: 'Touring',
    year: 2022,
    price: 139900,
    images: [
      '/mock/car1.jpg',
      '/mock/car2.jpg',
      '/mock/car3.jpg',
      '/mock/car4.jpg',
    ],
    specs: [
      { label: 'Km', value: '32.000' },
      { label: 'Combustível', value: 'Gasolina' },
      { label: 'Câmbio', value: 'Automático' },
      { label: 'Cor', value: 'Preto' },
    ],
  };

  return (
    <main className="max-w-7xl mx-auto px-6 py-10 space-y-12">
      <CarGallery images={car.images} />

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10">
        <CarInfo
          name={car.name}
          brand={car.brand}
          model={car.model}
          year={car.year}
        />

        <CarCTA price={car.price} />
      </div>

      <CarSpecs specs={car.specs} />
    </main>
  );
}
