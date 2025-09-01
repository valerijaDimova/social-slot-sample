
# Social Slot Sample App

A small Expo React Native sample that demonstrates structure and coding style for an events discovery and community app.

## Tech
- Expo with TypeScript
- Expo Router for navigation
- Supabase client for data layer scaffolding
- Simple components for Discover, Ideas, Connect, Profile
- Stripe hosted checkout placeholder for invite only organiser tickets

## Screens
- Discover: list of events and ad carousel
- Ideas: day plans and media recommendations
- Connect: buddy requests and WhatsApp crew links
- Profile: lightweight profile card with notifications entry point

## Run
1. Install deps
   ```bash
   npm install
   npx expo start
   ```

2. To try the Stripe placeholder
   - Replace the placeholder URL in `components/InviteStripeCheckout.tsx` with a real Stripe Checkout URL from your Stripe dashboard.
   - For a more advanced flow, wire up a backend endpoint that creates a Checkout Session and returns the URL.

3. To use Supabase
   - Create a Supabase project and set `SUPABASE_URL` and `SUPABASE_ANON_KEY` in `.env`.
   - Example schema is included below.

## Example Supabase schema
```sql
create table if not exists events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  starts_at timestamptz not null,
  city text not null,
  image_url text,
  price_cents int,
  is_paid boolean default false,
  external_link text,
  created_at timestamptz default now()
);

create table if not exists buddy_requests (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  event_id uuid not null references events(id),
  message text,
  created_at timestamptz default now()
);
```

## Notes
- This is a showcase repo intended for code review. It focuses on clarity, separation of concerns, and testable UI logic.
