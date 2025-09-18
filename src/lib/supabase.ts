import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

let supabase: any = null

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey)
} else {
  console.warn('Supabase environment variables not found. Some features may not work.')
}

export { supabase }

// Giveaway entry interface
export interface GiveawayEntry {
  id?: string
  email: string
  created_at?: string
  ip_address?: string
}

// Function to submit giveaway entry
export async function submitGiveawayEntry(email: string, ipAddress?: string) {
  if (!supabase) {
    throw new Error('Supabase client not initialized. Please check environment variables.')
  }

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
  if (!supabase) {
    throw new Error('Supabase client not initialized. Please check environment variables.')
  }

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