-- SQL commands to run in Supabase SQL Editor
-- This creates the giveaway_entries table

-- Create the giveaway_entries table
CREATE TABLE giveaway_entries (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    ip_address TEXT
);

-- Add unique constraint to prevent duplicate emails
ALTER TABLE giveaway_entries ADD CONSTRAINT unique_email UNIQUE (email);

-- Create index for faster email lookups
CREATE INDEX idx_giveaway_entries_email ON giveaway_entries (email);

-- Create index for sorting by creation date
CREATE INDEX idx_giveaway_entries_created_at ON giveaway_entries (created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE giveaway_entries ENABLE ROW LEVEL SECURITY;

-- Policy to allow anyone to insert entries (for the giveaway form)
CREATE POLICY "Anyone can submit giveaway entries" ON giveaway_entries
    FOR INSERT WITH CHECK (true);

-- Policy to allow selecting entries (you can modify this based on your needs)
-- This policy allows anyone to read entries (you might want to restrict this)
CREATE POLICY "Anyone can view entries" ON giveaway_entries
    FOR SELECT USING (true);

-- Optional: Add a comment to the table
COMMENT ON TABLE giveaway_entries IS 'Stores email entries for the website giveaway contest';

-- Display the table structure
\d giveaway_entries;