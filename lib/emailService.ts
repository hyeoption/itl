import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'hye.option';
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_5ummn9h';
const EMAILJS_QUOTE_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_QUOTE_TEMPLATE_ID || 'template_quote_request';
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '7Kk7gV6Kf6nVSj8Fa';

// Initialize EmailJS
export const initEmailJS = () => {
  console.log('🚀 Initializing EmailJS with public key:', EMAILJS_PUBLIC_KEY);
  emailjs.init(EMAILJS_PUBLIC_KEY);
  console.log('✅ EmailJS initialized successfully');
};

// Contact form email template
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Quote form email template
export interface QuoteFormData {
  companyName: string;
  contact: string;
  division: string;
  shipmentCondition: string;
  transportCondition: string;
  originPort: string;
  destinationPort: string;
  originCountry: string;
  destinationCountry: string;
  cbm: string;
  productName: string;
  hsCode: string;
  volume: string;
  cargoType: string;
  title: string;
  content: string;
  contactEmail: string;
  attachment?: string;
}

// Send contact form email
export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    console.log('🔧 EmailJS Contact Config:', {
      serviceId: EMAILJS_SERVICE_ID,
      templateId: EMAILJS_TEMPLATE_ID,
      publicKey: EMAILJS_PUBLIC_KEY
    });

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'Hwarang Co., Ltd.',
      reply_to: formData.email,
    };

    console.log('📧 Sending contact email with params:', templateParams);

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    console.log('Contact email sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Failed to send contact email:', error);
    return false;
  }
};

// Send quote request email
export const sendQuoteEmail = async (formData: QuoteFormData): Promise<boolean> => {
  try {
    console.log('🔧 EmailJS Quote Config:', {
      serviceId: EMAILJS_SERVICE_ID,
      templateId: EMAILJS_QUOTE_TEMPLATE_ID,
      publicKey: EMAILJS_PUBLIC_KEY
    });

    const templateParams = {
      company_name: formData.companyName,
      contact_person: formData.contact,
      contact_email: formData.contactEmail,
      division: formData.division,
      shipment_condition: formData.shipmentCondition,
      transport_condition: formData.transportCondition,
      origin_port: formData.originPort,
      destination_port: formData.destinationPort,
      origin_country: formData.originCountry,
      destination_country: formData.destinationCountry,
      cbm: formData.cbm,
      product_name: formData.productName,
      hs_code: formData.hsCode,
      volume: formData.volume,
      cargo_type: formData.cargoType,
      inquiry_title: formData.title,
      inquiry_content: formData.content,
      to_name: 'Hwarang Co., Ltd.',
      reply_to: formData.contactEmail,
    };

    console.log('📦 Sending quote email with params:', templateParams);

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_QUOTE_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    console.log('Quote email sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Failed to send quote email:', error);
    return false;
  }
};

// Utility function to validate email
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Utility function to validate form data
export const validateContactForm = (formData: ContactFormData): string[] => {
  const errors: string[] = [];
  
  if (!formData.name.trim()) {
    errors.push('Name is required');
  }
  
  if (!formData.email.trim()) {
    errors.push('Email is required');
  } else if (!isValidEmail(formData.email)) {
    errors.push('Please enter a valid email address');
  }
  
  if (!formData.message.trim()) {
    errors.push('Message is required');
  }
  
  return errors;
};

export const validateQuoteForm = (formData: QuoteFormData): string[] => {
  const errors: string[] = [];
  
  if (!formData.companyName.trim()) {
    errors.push('Company name is required');
  }
  
  if (!formData.contact.trim()) {
    errors.push('Contact person is required');
  }
  
  if (!formData.contactEmail.trim()) {
    errors.push('Contact email is required');
  } else if (!isValidEmail(formData.contactEmail)) {
    errors.push('Please enter a valid email address');
  }
  
  if (!formData.originPort.trim()) {
    errors.push('Origin port is required');
  }
  
  if (!formData.destinationPort.trim()) {
    errors.push('Destination port is required');
  }
  
  return errors;
};
