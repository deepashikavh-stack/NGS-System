-- NGS System Database Schema

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Visitor Management
CREATE TABLE visitors (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    nic_passport TEXT NOT NULL,
    type TEXT NOT NULL, -- 'Pre-registered', 'Walk-in'
    purpose TEXT NOT NULL,
    entry_time TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    exit_time TIMESTAMP WITH TIME ZONE,
    status TEXT DEFAULT 'Pending', -- 'Pending', 'Approved', 'Rejected'
    is_pre_registered BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Staff & Employee Entry
CREATE TABLE staff_entries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    staff_id TEXT NOT NULL,
    name TEXT,
    entry_time TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    exit_time TIMESTAMP WITH TIME ZONE,
    status TEXT DEFAULT 'Auto-confirmed',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Vehicle Entry Management
CREATE TABLE vehicle_entries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    vehicle_number TEXT NOT NULL,
    vehicle_type TEXT NOT NULL,
    driver_name TEXT NOT NULL,
    entry_time TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    exit_time TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Audit Logs
CREATE TABLE audit_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    action TEXT NOT NULL, -- 'Create', 'Update', 'Confirm', 'Report Generation'
    table_name TEXT,
    record_id UUID,
    user_id TEXT, -- Use Text for now or UUID if linked to auth.users
    details JSONB,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Roles and Access Control (Simplified for this version)
-- You can use Supabase Auth for this, but these tables help track app-level logic.
CREATE TABLE users (
    id UUID PRIMARY KEY REFERENCES auth.users(id),
    full_name TEXT,
    role TEXT NOT NULL -- 'Security Officer', 'School Management'
);

-- Create some default roles/access logic if needed
