import { Mail, Phone, MapPin } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { submitContactForm } from '../services/api';
import { Button } from './Button';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      await submitContactForm(formData);
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#F4EFE6] scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#1C160C]">Got Questions?</h2>
          
          <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 shadow-sm mb-12">
            {status === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md text-green-800">
                Thank you for your message. We'll get back to you soon!
              </div>
            )}

            {status === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md text-red-800">
                {errorMessage}
              </div>
            )}

            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#1C160C] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 bg-white border border-[#E9DFCE] rounded-md text-[#1C160C] placeholder-[#4B4639] focus:outline-none focus:ring-2 focus:ring-[#015C3B] focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#1C160C] mb-2">
                  Email <span className="text-[#015C3B]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 bg-white border border-[#E9DFCE] rounded-md text-[#1C160C] placeholder-[#4B4639] focus:outline-none focus:ring-2 focus:ring-[#015C3B] focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#1C160C] mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2 bg-white border border-[#E9DFCE] rounded-md text-[#1C160C] placeholder-[#4B4639] focus:outline-none focus:ring-2 focus:ring-[#015C3B] focus:border-transparent"
                  placeholder="Your phone number"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#1C160C] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 bg-white border border-[#E9DFCE] rounded-md text-[#1C160C] placeholder-[#4B4639] focus:outline-none focus:ring-2 focus:ring-[#015C3B] focus:border-transparent resize-none"
                  placeholder="Your message"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </Button>
            </div>
          </form>

          <div className="space-y-4">
            {[
              { Icon: Mail, text: "aacounsellingonline@gmail.com", href: "mailto:aacounsellingonline@gmail.com" },
              { Icon: Phone, text: "(234) 567-8900", href: "tel:+12345678900" },
              { Icon: MapPin, text: "British Columbia, Canada" }
            ].map((contact, index) => (
              <div key={index} className="flex items-center justify-center gap-2">
                <contact.Icon className="h-5 w-5 text-[#015C3B]" />
                {contact.href ? (
                  <a href={contact.href} className="text-[#4B4639] hover:text-[#015C3B] transition-colors duration-300">
                    {contact.text}
                  </a>
                ) : (
                  <span className="text-[#4B4639]">{contact.text}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}