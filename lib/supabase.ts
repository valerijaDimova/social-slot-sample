
import 'react-native-url-polyfill/auto';
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL || "https://example.supabase.co",
  process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || "public-anon-key"
);
