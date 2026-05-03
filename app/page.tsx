import { BookingForm } from "@/components/BookingForm";
import { WattsonPlaceholder } from "@/components/WattsonPlaceholder";

const steps = [
  {
    title: "Choose your date",
    copy: "Tell us where and when you want totes delivered. Delivery and pickup run Sunday through Friday."
  },
  {
    title: "Pack with totes",
    copy: "Use sturdy reusable totes instead of hunting for boxes, tape, and one more marker that disappeared."
  },
  {
    title: "We pick them up",
    copy: "When your weekly rental is done, we collect the empty totes. No storage service, no clutter left behind."
  }
];

const benefits = [
  "Reusable totes stack cleanly and protect better than tired cardboard.",
  "Weekly rentals work for 1 week, 2 weeks, or longer moves.",
  "Delivery and pickup keep moving supplies off your errand list.",
  "Local Joplin launch with systems built to scale carefully."
];

const packages = [
  {
    name: "Apartment",
    detail: "Starter bundle for small moves, studio spaces, or targeted room packing."
  },
  {
    name: "Home",
    detail: "A balanced tote count for most local household moves."
  },
  {
    name: "Custom",
    detail: "For larger homes, office moves, or multiple-week rental plans."
  }
];

const faqs = [
  {
    question: "How long can I rent totes?",
    answer: "Rentals are weekly. Start with one week, then request two weeks or more when your move needs extra time."
  },
  {
    question: "Are you open Saturdays?",
    answer: "No. Delivery and pickup are available Sunday through Friday. Saturdays are closed."
  },
  {
    question: "Do you provide storage?",
    answer: "No. The core service is reusable moving tote rental with delivery and pickup."
  },
  {
    question: "Will you offer packing materials?",
    answer: "Packing materials may be added later, but totes are the main service today."
  }
];

function LogoMark({ inverted = false }: { inverted?: boolean }) {
  return (
    <div className="flex items-center gap-3" aria-label="Let's Move Smarter">
      <div className="relative grid h-11 w-11 place-items-center rounded-2xl border border-[#87CEEB]/60 bg-white shadow-sm">
        <div className="h-6 w-4 rounded-t-full border-2 border-[#333333] bg-[#87CEEB]/45" />
        <div className="absolute bottom-2 h-2 w-5 rounded-sm border-2 border-[#333333] bg-[#D4A855]/70" />
      </div>
      <span className={`text-lg font-black tracking-tight ${inverted ? "text-white" : "text-[#333333]"}`}>
        Let&apos;s Move Smarter
      </span>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  copy,
  inverted = false
}: {
  eyebrow: string;
  title: string;
  copy: string;
  inverted?: boolean;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#D4A855]">{eyebrow}</p>
      <h2 className={`mt-3 text-3xl font-black tracking-tight md:text-5xl ${inverted ? "text-white" : "text-[#333333]"}`}>
        {title}
      </h2>
      <p className={`mt-5 text-base leading-8 md:text-lg ${inverted ? "text-white/70" : "text-[#5b6265]"}`}>
        {copy}
      </p>
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#F8F7F2] text-[#333333]">
      <header className="sticky top-0 z-30 border-b border-[#333333]/10 bg-[#F8F7F2]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <LogoMark />
          <div className="hidden items-center gap-7 text-sm font-semibold text-[#333333]/75 md:flex">
            <a className="transition hover:text-[#333333]" href="#how-it-works">How it works</a>
            <a className="transition hover:text-[#333333]" href="#pricing">Packages</a>
            <a className="transition hover:text-[#333333]" href="#faq">FAQ</a>
            <a className="rounded-full bg-[#333333] px-5 py-2.5 text-white transition hover:bg-[#1f1f1f]" href="#booking">
              Book totes
            </a>
          </div>
        </nav>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:grid-cols-[1.02fr_0.98fr] md:px-8 md:py-24">
        <div>
          <p className="inline-flex rounded-full border border-[#87CEEB]/50 bg-white px-4 py-2 text-sm font-bold text-[#333333] shadow-sm">
            Reusable moving tote rentals launching in Joplin, Missouri
          </p>
          <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[1.02] tracking-tight text-[#333333] md:text-7xl">
            A smarter way to pack, move, and unpack.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#555f63] md:text-xl">
            Let&apos;s Move Smarter delivers reusable totes to your door, gives you weekly rental
            flexibility, then picks everything up when the move is done.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a className="rounded-full bg-[#87CEEB] px-7 py-4 text-center font-black text-[#243238] shadow-[0_16px_40px_rgba(135,206,235,0.45)] transition hover:translate-y-[-1px]" href="#booking">
              Start a booking
            </a>
            <a className="rounded-full border border-[#333333]/20 bg-white px-7 py-4 text-center font-black text-[#333333] transition hover:border-[#333333]/40" href="#how-it-works">
              See how it works
            </a>
          </div>
          <div className="mt-10 grid gap-3 text-sm font-semibold text-[#4d5659] sm:grid-cols-3">
            <div className="rounded-2xl bg-white p-4 shadow-sm">Weekly rentals</div>
            <div className="rounded-2xl bg-white p-4 shadow-sm">Sunday-Friday service</div>
            <div className="rounded-2xl bg-white p-4 shadow-sm">No storage service</div>
          </div>
        </div>

        <WattsonPlaceholder />
      </section>

      <section id="how-it-works" className="border-y border-[#333333]/10 bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            copy="A moving supply experience that feels organized from the first click to the final pickup."
            eyebrow="How it works"
            title="Simple enough for moving week."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {steps.map((step, index) => (
              <article className="rounded-[1.5rem] border border-[#333333]/10 bg-[#F8F7F2] p-7" key={step.title}>
                <div className="grid h-11 w-11 place-items-center rounded-full bg-[#87CEEB] text-lg font-black text-[#333333]">
                  {index + 1}
                </div>
                <h3 className="mt-6 text-2xl font-black text-[#333333]">{step.title}</h3>
                <p className="mt-4 leading-7 text-[#5b6265]">{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-[0.9fr_1.1fr] md:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#D4A855]">Why reusable totes</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Less cardboard. More control.</h2>
          <p className="mt-5 text-lg leading-8 text-[#5b6265]">
            Cardboard boxes are unpredictable. Reusable totes are consistent, stackable, and designed
            for real moving operations.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <div className="rounded-[1.25rem] border border-[#87CEEB]/35 bg-white p-6 shadow-sm" key={benefit}>
              <div className="mb-5 h-2 w-16 rounded-full bg-[#D4A855]" />
              <p className="font-semibold leading-7 text-[#454c4f]">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="bg-[#333333] py-20 text-white">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            copy="Exact tote counts and pricing are being finalized for the Joplin launch. These package lanes keep the site ready for real operations."
            eyebrow="Packages"
            inverted
            title="Built for weekly rentals."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {packages.map((item) => (
              <article className="rounded-[1.5rem] border border-white/12 bg-white/[0.06] p-7" key={item.name}>
                <h3 className="text-2xl font-black">{item.name}</h3>
                <p className="mt-4 leading-7 text-white/72">{item.detail}</p>
                <p className="mt-8 rounded-full bg-[#87CEEB] px-5 py-3 text-center text-sm font-black text-[#243238]">
                  Pricing coming soon
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-[1fr_1fr] md:px-8">
        <div className="rounded-[2rem] bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#D4A855]">Service area</p>
          <h2 className="mt-3 text-3xl font-black text-[#333333] md:text-5xl">Starting in Joplin, Missouri.</h2>
          <p className="mt-5 text-lg leading-8 text-[#5b6265]">
            Let&apos;s Move Smarter is launching locally with the systems, brand foundation, and
            operations discipline needed to grow beyond the first market over time.
          </p>
        </div>
        <div className="rounded-[2rem] border border-[#87CEEB]/40 bg-[#87CEEB]/15 p-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#333333]">About</p>
          <h2 className="mt-3 text-3xl font-black text-[#333333]">A local company with bigger standards.</h2>
          <p className="mt-5 text-lg leading-8 text-[#4d5659]">
            The company exists to make moving supplies feel simpler, cleaner, and more reliable.
            Wattson guides the customer experience with practical tips and a little personality.
          </p>
        </div>
      </section>

      <section id="booking" className="border-y border-[#333333]/10 bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#D4A855]">Booking request</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#333333] md:text-5xl">
              Reserve your moving totes.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#5b6265]">
              Submit your name, delivery date, and address. The team will confirm details, tote
              availability, and weekly rental timing.
            </p>
          </div>
          <BookingForm />
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-5xl px-5 py-20 md:px-8">
        <SectionHeading
          copy="Clear rules make the service easier to book and easier to operate."
          eyebrow="FAQ"
          title="Good questions, straight answers."
        />
        <div className="mt-12 grid gap-4">
          {faqs.map((faq) => (
            <article className="rounded-[1.25rem] border border-[#333333]/10 bg-white p-6 shadow-sm" key={faq.question}>
              <h3 className="text-xl font-black text-[#333333]">{faq.question}</h3>
              <p className="mt-3 leading-7 text-[#5b6265]">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="bg-[#333333] px-5 py-12 text-white md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <LogoMark inverted />
            <p className="mt-4 max-w-xl text-sm leading-6 text-white/65">
              Reusable moving tote rental with delivery and pickup. Launching in Joplin, Missouri.
            </p>
          </div>
          <div className="text-sm leading-7 text-white/75">
            <p className="font-black text-[#D4A855]">Contact</p>
            <p>letsmovesmarter@gmail.com</p>
            <p>Joplin, Missouri</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
