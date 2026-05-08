function Footer() {
  return (
    <footer id="footer" className="bg-zinc-950 px-6 py-14 text-zinc-300 md:px-12">
      <div className="mx-auto grid max-w-6xl gap-10 border-t border-white/10 pt-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="section-eyebrow text-amber-200">Contact</p>
          <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight text-white md:text-4xl">
            Ready to shortlist better properties?
          </h2>
          <p className="mt-4 max-w-lg leading-7 text-zinc-400">
            Share your budget, preferred location, and property type. Parivesh
            Realty will help you find options worth visiting.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white">
            Call
          </p>
          <div className="mt-5 flex flex-col gap-3">
            <a href="tel:9050553363" className="hover:text-white">9050553363</a>
            <a href="tel:7303319337" className="hover:text-white">7303319337</a>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white">
            Email
          </p>
          <a
            href="mailto:parveshrealty@gmail.com"
            className="mt-5 block break-words hover:text-white"
          >
            parveshrealty@gmail.com
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Parivesh Realty. All rights reserved.</p>
        <p>Premium real estate advisory</p>
      </div>
    </footer>
  );
}

export default Footer;
