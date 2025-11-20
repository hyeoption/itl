"use client";
import { useEffect } from "react";

export default function AboutPage() {
  useEffect(() => {
    // Check URL parameters for language setting
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const langParam = urlParams.get('lang');
      // Redirect to the "Why ITL?" page
      if (langParam === 'ko') {
        window.location.href = '/ko/about/why-hwarang';
      } else {
        window.location.href = '/about/why-hwarang';
      }
    }
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting...</p>
      </div>
    </div>
  );
}