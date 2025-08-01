// Form validation utilities
export const validateTransactionCode = (code: string): boolean => {
  // Basic validation for transaction codes
  // Adjust this based on your payment provider's format
  return code.length >= 6 && /^[A-Za-z0-9]+$/.test(code);
};

export const validatePhoneNumber = (phone: string): boolean => {
  // Basic phone number validation for Kenyan numbers
  const cleanPhone = phone.replace(/\s+/g, '');
  return /^(\+254|0)?[17]\d{8}$/.test(cleanPhone);
};

export const validateRequiredField = (value: string): boolean => {
  return value.trim().length > 0;
};

export const formatPhoneNumber = (phone: string): string => {
  // Format phone number for display
  const cleanPhone = phone.replace(/\s+/g, '');
  if (cleanPhone.startsWith('+254')) {
    return cleanPhone;
  } else if (cleanPhone.startsWith('0')) {
    return '+254' + cleanPhone.substring(1);
  } else if (cleanPhone.startsWith('7') || cleanPhone.startsWith('1')) {
    return '+254' + cleanPhone;
  }
  return cleanPhone;
};

// Error message constants
export const ERROR_MESSAGES = {
  REQUIRED_FIELD: 'This field is required',
  INVALID_PHONE: 'Please enter a valid phone number',
  INVALID_TRANSACTION: 'Please enter a valid transaction code',
  DUPLICATE_TRANSACTION: 'This transaction code has already been used',
  NETWORK_ERROR: 'Network error. Please check your connection and try again',
  SERVER_ERROR: 'Server error. Please try again later',
  DUPLICATE_SUBMISSION: 'Please wait a moment before trying again',
} as const; 