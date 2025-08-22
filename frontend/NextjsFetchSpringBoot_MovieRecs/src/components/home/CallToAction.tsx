export default function CallToAction() {
  return (
    <section className="w-full min-h-[70vh] bg-gradient-to-r from-colour via-accent to-colour text-contrast py-16 px-6 text-center shadow-xl flex flex-col items-center justify-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Ready to get started?
      </h2>
      <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
        Join thousands of movie lovers using our platform to watch better, faster, and most recent movies.
      </p>
      <div className="flex justify-center gap-4">
        <a
          href="/signup"
          className="bg-colour text-contrast font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-gray-700 transition"
        >
          Get Started
        </a>
        <a
          href="#"
          className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition"
        >
          Book a Demo
        </a>
      </div>
    </section>
  );
}