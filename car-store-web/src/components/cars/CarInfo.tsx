type CarInfoProps = {
  brand: string;
  name: string;
  year: number;
  price: number;
  description?: string;
};

export function CarInfo({
  brand,
  name,
  year,
  price,
  description,
}: CarInfoProps) {
  return (
    <div className="space-y-4">
      {/* Marca e ano */}
      <p className="text-sm uppercase tracking-wide text-neutral-500">
        {brand} • {year}
      </p>

      {/* Nome do carro */}
      <h1 className="text-3xl font-semibold leading-tight">{name}</h1>

      {/* Preço */}
      <p className="text-2xl font-bold text-neutral-900">
        R$ {price?.toLocaleString("pt-BR") ?? "—"}
      </p>

      {/* Descrição */}
      {description && (
        <p className="pt-4 text-base leading-relaxed text-neutral-600">
          {description}
        </p>
      )}
    </div>
  );
}
