create extension if not exists "pgcrypto";

create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  booking_date date not null,
  address text not null,
  status text not null default 'pending',
  created_at timestamptz not null default now(),
  constraint bookings_status_check
    check (status in ('pending', 'confirmed', 'cancelled')),
  constraint bookings_no_saturday_check
    check (extract(dow from booking_date) <> 6)
);

alter table public.bookings enable row level security;

drop policy if exists "Anyone can create booking requests" on public.bookings;

create policy "Anyone can create booking requests"
on public.bookings
for insert
to anon
with check (true);
