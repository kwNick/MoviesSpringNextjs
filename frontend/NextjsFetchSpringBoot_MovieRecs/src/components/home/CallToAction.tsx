import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="relative w-full min-h-[70vh] text-contrast text-center shadow-xl flex flex-col items-center justify-center gap-y-7 lg:gap-y-8 2xl:gap-y-9">

      <div className="absolute inset-0 bg-colour -z-10 pointer-events-none" />
      
      <h2 className="text-accent underline text-3xl md:text-4xl lg:text-5xl font-bold mb-4 [text-shadow:_0px_3px_3px_var(--contrast)]">
        Get Started!
      </h2>
      <p className="text-xl lg:text-2xl mb-8 max-w-2xl mx-auto">
        Join the community of movie lovers using our platform to watch movies the right way.
      </p>
      <div className="flex justify-center gap-4">
        <Link
          href="/signup"
          className="bg-contrast text-colour font-semibold px-6 py-3 rounded-xl [box-shadow:_0px_4px_4px_var(--contrast),_0px_-4px_4px_var(--contrast)] hover:bg-gray-500 hover:[box-shadow:_0px_4px_4px_gray,_0px_-4px_4px_gray] transition"
        >
          Get Started
        </Link>
        <Link
          href="#"
          className="border border-contrast px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition"
        >
          Book a Demo
        </Link>
      </div>
    </section>
  );
}