export interface ServiceDetail {
  id: string;
  title: string;
  slug: string;
  description: string;
  iconName: string;
  subtitle: string;
  fullDescription: string;
  image?: string;
  howItWorks: {
    title: string;
    description: string;
    subItems?: string[];
  }[];
  benefits: string[];
  specialFeature?: {
    title: string;
    description: string;
  };
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}
