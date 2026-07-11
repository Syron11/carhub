function Hero() {
  return (
    <section className="py-20">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
          Premium Car Marketplace
        </p>

        <h1 className="mt-4 text-5xl font-bold leading-tight text-white">
          Find your dream car with confidence.
        </h1>

        <p className="mt-6 text-lg text-gray-400">
          Explore premium vehicles, compare specifications and discover the
          perfect car for your lifestyle.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-500">
            Explore Cars
          </button>

          <button className="rounded-xl border border-gray-700 px-6 py-3 font-semibold text-white transition hover:border-gray-500">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;