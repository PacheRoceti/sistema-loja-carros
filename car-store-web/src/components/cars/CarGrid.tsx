import { CarCard } from './CarCard';

export function CarGrid() {
  return (
    <section className="w-full px-6 pb-24 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Dados mockados por enquanto */}
        {Array.from({ length: 6 }).map((_, index) => (
          <CarCard key={index} id={0} name={''} brand={''} year={0} price={0} coverImage={null} />
        ))}
      </div>
    </section>
  );
}
