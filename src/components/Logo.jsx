import logo from "../assets/logo.jpg";

function Logo() {
  return (
    <div className="flex items-center gap-3 text-white">
      <img
        src={logo}
        alt="Parivesh Realty"
        className="h-10 w-10 rounded-full border border-white/20 object-cover"
      />
      <div className="leading-tight">
        <p className="text-base font-semibold tracking-wide md:text-lg">Parivesh</p>
        <p className="text-xs uppercase tracking-[0.28em] text-amber-200">Realty</p>
      </div>
    </div>
  );
}

export default Logo;
