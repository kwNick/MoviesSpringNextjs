export default function CallToAction() {
  return (
    <section className="relative w-full min-h-[70vh] text-contrast text-center shadow-xl flex flex-col items-center justify-center ">

      <div className="absolute inset-0 bg-colour -z-10 pointer-events-none" />
      
      <h2 className="text-accent underline text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        Get Started!
      </h2>
      <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
        Join the community of movie lovers using our platform to watch movies the right way.
      </p>
      <div className="flex justify-center gap-4">
        <a
          href="/signup"
          className="bg-contrast text-colour font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-gray-500 transition"
        >
          Get Started
        </a>
        <a
          href="#"
          className="border border-contrast px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition"
        >
          Book a Demo
        </a>
      </div>
    </section>
  );
}