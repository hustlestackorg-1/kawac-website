// Database types for Supabase tables

export type UserRole = 'admin' | 'reviewer' | 'volunteer' | 'intern' | 'partner';

export interface Profile {
    id: string;
    email: string;
    full_name: string | null;
    role: UserRole;
    avatar_url: string | null;
    created_at: string;
    updated_at: string;
}

export type ApplicationStatus = 'pending' | 'reviewed' | 'shortlisted' | 'accepted' | 'rejected';

export type Persona = 'student' | 'professional' | 'international' | 'retiree';

export interface VolunteerApplication {
    id: string;
    full_name: string;
    email: string;
    phone: string | null;
    persona: Persona;
    programs: string[];
    availability: string | null;
    start_date: string | null;
    duration: string | null;
    skills: string[];
    motivation: string | null;
    cv_url: string | null;
    status: ApplicationStatus;
    reviewer_notes: string | null;
    created_at: string;
    updated_at: string;
}

export interface InternshipApplication {
    id: string;
    full_name: string;
    email: string;
    phone: string | null;
    institution: string | null;
    program_of_study: string | null;
    year_of_study: string | null;
    target_program: string | null;
    start_date: string | null;
    duration: string | null;
    cover_letter: string | null;
    cv_url: string | null;
    status: ApplicationStatus;
    reviewer_notes: string | null;
    created_at: string;
}

export type PartnershipType = 'funding' | 'technical' | 'implementation' | 'research' | 'other';

export interface PartnerInquiry {
    id: string;
    organization_name: string;
    contact_name: string;
    email: string;
    phone: string | null;
    partnership_type: PartnershipType;
    message: string | null;
    status: string;
    created_at: string;
}

export interface ContactSubmission {
    id: string;
    name: string;
    email: string;
    subject: string | null;
    message: string;
    created_at: string;
}

export type DocumentCategory = 'annual_report' | 'audit' | 'policy' | 'governance' | 'other';

export interface Document {
    id: string;
    title: string;
    category: DocumentCategory;
    file_url: string;
    is_public: boolean;
    uploaded_by: string | null;
    created_at: string;
}

export interface ImpactMetric {
    id: string;
    program_id: string;
    metric_label: string;
    metric_value: string;
    year: number | null;
    created_at: string;
}

// Database schema type for Supabase client
export interface Database {
    public: {
        Tables: {
            profiles: {
                Row: Profile;
                Insert: Omit<Profile, 'created_at' | 'updated_at'>;
                Update: Partial<Omit<Profile, 'id'>>;
            };
            volunteer_applications: {
                Row: VolunteerApplication;
                Insert: Omit<VolunteerApplication, 'id' | 'created_at' | 'updated_at' | 'status' | 'reviewer_notes'>;
                Update: Partial<Omit<VolunteerApplication, 'id' | 'created_at'>>;
            };
            internship_applications: {
                Row: InternshipApplication;
                Insert: Omit<InternshipApplication, 'id' | 'created_at' | 'status' | 'reviewer_notes'>;
                Update: Partial<Omit<InternshipApplication, 'id' | 'created_at'>>;
            };
            partner_inquiries: {
                Row: PartnerInquiry;
                Insert: Omit<PartnerInquiry, 'id' | 'created_at' | 'status'>;
                Update: Partial<Omit<PartnerInquiry, 'id' | 'created_at'>>;
            };
            contact_submissions: {
                Row: ContactSubmission;
                Insert: Omit<ContactSubmission, 'id' | 'created_at'>;
                Update: Partial<Omit<ContactSubmission, 'id' | 'created_at'>>;
            };
            documents: {
                Row: Document;
                Insert: Omit<Document, 'id' | 'created_at'>;
                Update: Partial<Omit<Document, 'id' | 'created_at'>>;
            };
            impact_metrics: {
                Row: ImpactMetric;
                Insert: Omit<ImpactMetric, 'id' | 'created_at'>;
                Update: Partial<Omit<ImpactMetric, 'id' | 'created_at'>>;
            };
        };
    };
}
