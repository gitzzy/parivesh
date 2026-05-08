const highlights = [
  {
    value: "12+",
    label: "Years of local market expertise",
  },
  {
    value: "450+",
    label: "Homes, plots, and farm deals handled",
  },
  {
    value: "24 hr",
    label: "Shortlist support for serious buyers",
  },
];

const services = [
  "Verified residential listings",
  "Site visits and negotiation",
  "Investment-ready land options",
  "Documentation guidance",
];

function Highlights() {
  return (
    <section id="about" className="bg-stone-50 px-6 py-20 text-zinc-950 md:px-12">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <div>
          <p className="section-eyebrow">Private Property Advisory</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
            Curated homes, clear advice, and deals handled with quiet confidence.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-600 md:text-lg">
            Parivesh Realty helps buyers and investors discover premium villas,
            apartments, farm houses, and land options with sharper shortlisting
            and local guidance at every step.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service}
              className="rounded-lg border border-zinc-200 bg-white px-5 py-4 text-sm font-medium text-zinc-700 shadow-sm"
            >
              {service}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-14 grid max-w-6xl overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-xl shadow-zinc-200/60 md:grid-cols-3">
        {highlights.map((item) => (
          <div key={item.value} className="border-b border-zinc-200 p-7 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0">
            <p className="text-4xl font-semibold text-zinc-950">{item.value}</p>
            <p className="mt-3 text-sm leading-6 text-zinc-500">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Highlights;
