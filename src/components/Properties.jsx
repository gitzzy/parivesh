import villa from "../assets/villa.jpg";
import appart from "../assets/appart.jpg";
import farm from "../assets/farm.jpg";

function Properties() {
  const data = [
    {
      id: 1,
      title: "Luxury Villa",
      price: "₹1.2 Cr",
      location: "Gated residential pocket",
      details: "4 Beds / Private lawn / Premium frontage",
      img: villa,
    },
    {
      id: 2,
      title: "Modern Apartment",
      price: "₹75 L",
      location: "Connected city address",
      details: "3 Beds / Lift access / Covered parking",
      img: appart,
    },
    {
      id: 3,
      title: "Farm House",
      price: "₹90 L",
      location: "Open estate zone",
      details: "Green belt / Weekend living / Investment fit",
      img: farm,
    },
  ];

  return (
    <section
      id="properties"
      className="relative overflow-hidden bg-zinc-950 px-6 py-24 text-white md:px-12"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(251,191,36,0.14),transparent_28%),linear-gradient(180deg,#09090b_0%,#18181b_100%)]"></div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl">
          <p className="section-eyebrow text-amber-200">
            Find Property
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
            Explore curated properties worth visiting.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400">
            Premium homes, farm houses, and investment-ready addresses selected
            for buyers who want clarity before they visit.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {data.map((p) => (
            <div
              key={p.id}
              className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.08] shadow-2xl shadow-black/30 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-amber-200/40"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
                <p className="absolute bottom-4 left-4 rounded-full bg-white px-3 py-1 text-sm font-semibold text-zinc-950">
                  {p.price}
                </p>
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-amber-200">
                  {p.location}
                </p>
                <h3 className="mt-3 text-xl font-semibold">{p.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-300">{p.details}</p>
                <a
                  href="tel:9050553363"
                  className="mt-5 inline-flex text-sm font-semibold text-white underline decoration-amber-200 underline-offset-8"
                >
                  Enquire now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Properties;
