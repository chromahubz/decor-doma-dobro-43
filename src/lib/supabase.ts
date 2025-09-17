import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Giveaway entry interface
export interface GiveawayEntry {
  id?: string
  email: string
  created_at?: string
  ip_address?: string
}

// Function to submit giveaway entry
export async function submitGiveawayEntry(email: string, ipAddress?: string) {
  const { data, error } = await supabase
    .from('giveaway_entries')
    .insert([
      {
        email: email.toLowerCase().trim(),
        ip_address: ipAddress
      }
    ])
    .select()

  if (error) {
    console.error('Error submitting giveaway entry:', error)
    throw error
  }

  return data
}

// Function to check if email already exists
export async function checkEmailExists(email: string) {
  const { data, error } = await supabase
    .from('giveaway_entries')
    .select('email')
    .eq('email', email.toLowerCase().trim())
    .limit(1)

  if (error) {
    console.error('Error checking email:', error)
    throw error
  }

  return data && data.length > 0
}