import React from 'react';

// Custom SVG Icons for Premium Sections
export const Icons = {
  // Certificate/Badge Icon
  Certificate: () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 4L28 16H40L30 24L34 36L24 28L14 36L18 24L8 16H20L24 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  ),

  // Precision/Quality Icon
  Precision: () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2" fill="none"/>
      <circle cx="24" cy="24" r="12" stroke="currentColor" strokeWidth="2" fill="none"/>
      <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2" fill="none"/>
      <line x1="24" y1="6" x2="24" y2="12" stroke="currentColor" strokeWidth="2"/>
      <line x1="24" y1="36" x2="24" y2="42" stroke="currentColor" strokeWidth="2"/>
      <line x1="6" y1="24" x2="12" y2="24" stroke="currentColor" strokeWidth="2"/>
      <line x1="36" y1="24" x2="42" y2="24" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),

  // Support/Communication Icon
  Support: () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M40 20C40 28.8366 32.8366 36 24 36C21.5 36 19.2 35.4 17.2 34.4L8 36L10 28C8.6 25.6 8 22.9 8 20C8 11.1634 15.1634 4 24 4C32.8366 4 40 11.1634 40 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="18" cy="20" r="2" fill="currentColor"/>
      <circle cx="24" cy="20" r="2" fill="currentColor"/>
      <circle cx="30" cy="20" r="2" fill="currentColor"/>
    </svg>
  ),

  // Crown/Excellence Icon
  Crown: () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 36H42V40H6V36Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M8 18L14 24L20 12L24 20L28 12L34 24L40 18V36H8V18Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none"/>
      <circle cx="8" cy="18" r="2" fill="currentColor"/>
      <circle cx="24" cy="12" r="2" fill="currentColor"/>
      <circle cx="40" cy="18" r="2" fill="currentColor"/>
    </svg>
  ),

  // Checklist/Process Icon
  Checklist: () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="8" width="32" height="32" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M14 20L18 24L26 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="18" y1="30" x2="34" y2="30" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="18" y1="34" x2="28" y2="34" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),

  // Tooth/Dental Icon (Premium Style)
  Tooth: () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 8C18 8 14 12 14 18V28C14 32 15 36 17 38C18 39 19 40 20 40C21 40 22 39 22 37V30C22 28 23 27 24 27C25 27 26 28 26 30V37C26 39 27 40 28 40C29 40 30 39 31 38C33 36 34 32 34 28V18C34 12 30 8 24 8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none"/>
    </svg>
  ),

  // Award/Medal Icon
  Award: () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="18" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M17 24L15 40L24 35L33 40L31 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="24" cy="18" r="5" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  ),

  // Shield/Protection Icon
  Shield: () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 4L8 10V22C8 30 12 37 24 42C36 37 40 30 40 22V10L24 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none"/>
      <path d="M18 24L22 28L30 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
};
