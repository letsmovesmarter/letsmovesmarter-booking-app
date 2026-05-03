import { BookingForm } from "@/components/BookingForm";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f7f4ee]">
      <section className="mx-auto grid min-h-screen w-full max-w-6xl items-center gap-10 px-6 py-10 md:grid-cols-[1fr_440px] lg:px-8">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#0f766e]">
            Joplin, Missouri
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-[#19211f] md:text-6xl">
            Book reusable moving totes without the cardboard chaos.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4b5a55]">
            Let&apos;s Move Smarter delivers sturdy moving totes to your address, then picks them
            up when your move is done. Simple scheduling, local service, and less waste.
          </p>
          <div className="mt-8 grid max-w-xl gap-3 text-sm text-[#35433f] sm:grid-cols-3">
            <div className="border-l-4 border-[#0f766e] bg-white/70 p-4">
              <strong className="block text-[#19211f]">Simple booking</strong>
              Request a date online.
            </div>
            <div className="border-l-4 border-[#c2410c] bg-white/70 p-4">
              <strong className="block text-[#19211f]">Local delivery</strong>
              Serving Joplin moves.
            </div>
            <div className="border-l-4 border-[#334155] bg-white/70 p-4">
              <strong className="block text-[#19211f]">No Saturdays</strong>
              Sunday through Friday.
            </div>
          </div>
        </div>

        <BookingForm />
      </section>
    </main>
  );
}
