
import React from 'react';
import { Language } from './translations';

export interface Project {
  id: string;
  title: string;
  // Updated to localized object to match constant data
  category: Record<Language, string>;
  imageUrl: string;
  gallery: string[];
  year: string;
  has3D?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  avatar: string;
}
