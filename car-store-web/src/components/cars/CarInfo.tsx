type CarInfoProps = {
  name: string;
  brand: string;
  model: string;
  year: number;
};

export function CarInfo({ name, brand, model, year }: CarInfoProps) {
  return (
    <div className="space-y-2">
      <p className="text-sm uppercase tracking-wide text-neutral-500">
        {brand} • {year}
      </p>

      <h1 className="text-3xl font-semibold">
        {name}
      </h1>

      <p className="text-neutral-600">
        Modelo: {model}
      </p>
    </div>
  );
}
