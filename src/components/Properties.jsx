import villa from "../assets/villa.jpg";
import appart from "../assets/appart.jpg";
import farm from "../assets/farm.jpg";

function Properties() {
  const data = [
    { id: 1, title: "Luxury Villa", price: "₹1.2 Cr", img: villa },
    { id: 2, title: "Apartment", price: "₹75 L", img: appart },
    { id: 3, title: "Farm House", price: "₹90 L", img: farm },
  ];

  return (
    <section id="properties" className="py-16 px-6 md:px-12">
      <h2 className="text-3xl font-bold text-center mb-10">Properties</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {data.map((p) => (
          <div key={p.id} className="rounded-xl overflow-hidden shadow-lg">
            <img src={p.img} className="h-60 w-full object-cover" />
            <div className="p-4">
              <h3>{p.title}</h3>
              <p>{p.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Properties;