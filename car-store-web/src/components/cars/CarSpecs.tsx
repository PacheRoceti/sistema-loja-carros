type Spec = {
  label: string;
  value: string;
};

type CarSpecsProps = {
  specs: Spec[];
};

export function CarSpecs({ specs }: CarSpecsProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {specs.map((spec, index) => (
        <div
          key={index}
          className="rounded-lg border border-neutral-200 p-4"
        >
          <p className="text-xs uppercase text-neutral-500">
            {spec.label}
          </p>
          <p className="font-medium">
            {spec.value}
          </p>
        </div>
      ))}
    </div>
  );
}
