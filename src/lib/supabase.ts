import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for database tables
export type QuoteRequest = {
  id?: number
  name: string
  phone: string
  email: string
  organization?: string
  requirement?: string
  created_at?: string
}

export type ContactMessage = {
  id?: number
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  created_at?: string
}

export type BlogPost = {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string
  image_url: string
  category: string
  author: string
  published_at: string
  created_at: string
}

export type CareerApplication = {
  id?: number
  name: string
  email: string
  phone: string
  position: string
  experience: string
  message?: string
  resume_url?: string
  created_at?: string
}
