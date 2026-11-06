create extension if not exists pgcrypto;
create table if not exists public.waitlist_registrations (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  audience text not null check (audience in ('creator','company','cofounder_investor')),
  registered_at timestamptz not null default now(),
  constraint waitlist_registrations_email_normalized unique (email),
  constraint waitlist_registrations_email_lowercase check (email = lower(email))
);
alter table public.waitlist_registrations enable row level security;
revoke all on public.waitlist_registrations from anon, authenticated;
grant select, insert on public.waitlist_registrations to service_role;