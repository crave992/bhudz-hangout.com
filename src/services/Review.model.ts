export interface Review {
  id: string;
  rating: number;
  name?: string | null;
  email?: string | null;
  subject?: string | null;
  message?: string | null;
  status: 'approved' | 'unapproved';
  dateCreated: Date;
}