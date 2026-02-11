type Spec = {
  label: string;
  value: string;
};

type CarSpecsProps = {
  specs: Spec[];
};

export function CarSpecs({ specs }: CarSpecsProps) {
  return (
    <section className="space-y-6">
      {/* Título */}
      <h2 className="text-xl font-semibold">Ficha técnica</h2>

      {/* Specs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {specs.map((spec, index) => (
          <div
            key={index}
            className="rounded-xl border border-neutral-200 bg-neutral-50 p-4"
          >
            <p className="text-xs uppercase tracking-wide text-neutral-500">
              {spec.label}
            </p>
            <p className="mt-1 text-sm font-medium text-neutral-900">
              {spec.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
