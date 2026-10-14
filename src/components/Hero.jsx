import banner from '../assets/banner-stack.png'

export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-24">
      <div className="grid items-center gap-10 md:grid-cols-2">
        {/* Text side */}
        <div>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Build Your Ideal <span className="text-brand">Development Stack</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600">
            Explore frontend, backend, database, and tooling options, compare them side by side,
            and put together the stack that fits your next project.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#technologies"
              className="rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
            >
              Explore Technologies
            </a>
            <a
              href="#about"
              className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Image side */}
        <div className="flex justify-center md:justify-end">
          <img
            src={banner}
            alt="Layered illustration of a development stack"
            className="w-full max-w-sm md:max-w-md"
          />
        </div>
      </div>
    </section>
  )
}