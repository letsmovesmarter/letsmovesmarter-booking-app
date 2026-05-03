"use client";

import { FormEvent, useMemo, useState } from "react";
import { getSupabaseClient } from "@/lib/supabaseClient";

type FormState = {
  name: string;
  date: string;
  address: string;
};

const initialFormState: FormState = {
  name: "",
  date: "",
  address: ""
};

function isSaturday(dateValue: string) {
  if (!dateValue) {
    return false;
  }

  const date = new Date(`${dateValue}T00:00:00`);
  return date.getDay() === 6;
}

export function BookingForm() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const dateError = useMemo(() => {
    return isSaturday(form.date) ? "Saturday delivery is unavailable. Choose Sunday-Friday." : "";
  }, [form.date]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    if (!form.name.trim() || !form.date || !form.address.trim()) {
      setStatus("error");
      setMessage("Please complete every field.");
      return;
    }

    if (dateError) {
      setStatus("error");
      setMessage(dateError);
      return;
    }

    setStatus("loading");

    try {
      const supabase = getSupabaseClient();
      const { error } = await supabase.from("bookings").insert({
        name: form.name.trim(),
        booking_date: form.date,
        address: form.address.trim()
      });

      if (error) {
        setStatus("error");
        setMessage(error.message);
        return;
      }
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Could not submit booking.");
      return;
    }

    setStatus("success");
    setMessage("Booking request received. We'll follow up soon to confirm your tote delivery.");
    setForm(initialFormState);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full border border-[#d8d1c4] bg-white p-6 shadow-[0_24px_80px_rgba(25,33,31,0.12)]"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-[#19211f]">Reserve your totes</h2>
        <p className="mt-2 text-sm leading-6 text-[#5f6f69]">
          Send a booking request and the team will confirm availability.
        </p>
      </div>

      <label className="block">
        <span className="text-sm font-semibold text-[#24312d]">Name</span>
        <input
          className="mt-2 w-full border border-[#cfc7ba] bg-[#fbfaf7] px-4 py-3 outline-none transition focus:border-[#0f766e] focus:bg-white"
          value={form.name}
          onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
          placeholder="Maria Johnson"
          autoComplete="name"
        />
      </label>

      <label className="mt-4 block">
        <span className="text-sm font-semibold text-[#24312d]">Delivery date</span>
        <input
          className="mt-2 w-full border border-[#cfc7ba] bg-[#fbfaf7] px-4 py-3 outline-none transition focus:border-[#0f766e] focus:bg-white"
          value={form.date}
          onChange={(event) => setForm((current) => ({ ...current, date: event.target.value }))}
          type="date"
        />
      </label>

      <label className="mt-4 block">
        <span className="text-sm font-semibold text-[#24312d]">Address</span>
        <textarea
          className="mt-2 min-h-28 w-full resize-y border border-[#cfc7ba] bg-[#fbfaf7] px-4 py-3 outline-none transition focus:border-[#0f766e] focus:bg-white"
          value={form.address}
          onChange={(event) => setForm((current) => ({ ...current, address: event.target.value }))}
          placeholder="1201 S Main St, Joplin, MO 64804"
          autoComplete="street-address"
        />
      </label>

      <button
        className="mt-6 w-full bg-[#0f766e] px-5 py-3 font-bold text-white transition hover:bg-[#115e59] disabled:cursor-not-allowed disabled:bg-[#8aa9a5]"
        disabled={status === "loading"}
        type="submit"
      >
        {status === "loading" ? "Sending..." : "Submit booking"}
      </button>

      {(message || dateError) && (
        <p
          className={`mt-4 text-sm leading-6 ${
            status === "success" ? "text-[#0f766e]" : "text-[#b42318]"
          }`}
        >
          {message || dateError}
        </p>
      )}
    </form>
  );
}
