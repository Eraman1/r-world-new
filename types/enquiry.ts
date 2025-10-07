export interface EnquiryFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  service?: string;
  message?: string;
  path?: string;
  bookCall?: boolean;
  callDate?: string;
  callTime?: string;
  timezone?: string;
}
