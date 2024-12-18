import axios from 'axios';
import type { Resource } from '../types/resource';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

// Mock data for resources
const mockResources: Resource[] = [
  {
    id: '1',
    title: 'Understanding Anxiety: A Comprehensive Guide',
    summary: 'Learn about the different types of anxiety disorders, their symptoms, and effective coping strategies.',
    content: '...',
    imageUrl: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=1200&q=80',
    category: 'Guides',
    publishedDate: '2024-03-15',
    lastUpdated: '2024-03-20',
    author: {
      name: 'Dr. Sarah Johnson',
      role: 'Clinical Psychologist'
    },
    readingTime: 8,
    relatedResources: ['2', '3'],
    status: 'published'
  },
  {
    id: '2',
    title: '5 Daily Practices for Better Mental Health',
    summary: 'Simple yet effective daily habits that can significantly improve your mental well-being.',
    content: '...',
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
    category: 'Tips',
    publishedDate: '2024-03-10',
    lastUpdated: '2024-03-10',
    author: {
      name: 'Emily Chen',
      role: 'Mental Health Counsellor'
    },
    readingTime: 5,
    relatedResources: ['1', '4'],
    status: 'published'
  }
];

export async function submitContactForm(data: ContactFormData) {
  try {
    const response = await axios.post(
      'https://formspree.io/f/YOUR_FORM_ID',
      data,
      {
        headers: {
          'Accept': 'application/json'
        }
      }
    );
    return response.data;
  } catch (error) {
    throw new Error('Failed to submit form');
  }
}

export async function getResources(): Promise<Resource[]> {
  // In a real application, this would be an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockResources);
    }, 1000);
  });
}