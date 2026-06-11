-- Run this SQL in your Supabase SQL Editor to set up the database

-- Quote Requests Table
CREATE TABLE quote_requests (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  organization TEXT,
  requirement TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Contact Messages Table
CREATE TABLE contact_messages (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Career Applications Table
CREATE TABLE career_applications (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  position TEXT NOT NULL,
  experience TEXT NOT NULL,
  message TEXT,
  resume_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Blog Posts Table (optional - or manage via Supabase dashboard)
CREATE TABLE blog_posts (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT,
  image_url TEXT,
  category TEXT DEFAULT 'News',
  author TEXT DEFAULT 'Ornate Solar Team',
  published_at TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS (Row Level Security)
ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE career_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Allow public inserts for forms
CREATE POLICY "Allow public insert on quote_requests" ON quote_requests FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Allow public insert on contact_messages" ON contact_messages FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Allow public insert on career_applications" ON career_applications FOR INSERT TO anon WITH CHECK (true);

-- Allow public reads for blog posts
CREATE POLICY "Allow public read on blog_posts" ON blog_posts FOR SELECT TO anon USING (true);

-- Sample blog posts
INSERT INTO blog_posts (title, slug, excerpt, image_url, category, author, published_at) VALUES
('India Surpasses US in Solar Capacity Additions', 'india-solar-capacity-2026', 'India has emerged as the world''s second-largest solar growth market, surpassing the US in solar capacity additions.', 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800', 'News', 'Anjali Sharma', NOW() - INTERVAL '7 days'),
('PM KUSUM Yojana: How Farmers Are Benefiting from Solar', 'pm-kusum-farmers-guide', 'A comprehensive guide on how farmers across India are leveraging the PM KUSUM scheme for energy independence.', 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800', 'Policy', 'Arjun Paridwal', NOW() - INTERVAL '14 days'),
('The Future of Battery Energy Storage Systems in India', 'bess-future-india', 'Battery Energy Storage Systems are reshaping India''s energy landscape. Here''s what you need to know.', 'https://images.unsplash.com/photo-1620714223084-8fcacc2107bd?w=800', 'Technology', 'Anjali Sharma', NOW() - INTERVAL '21 days');
