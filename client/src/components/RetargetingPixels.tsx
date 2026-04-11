import { useEffect } from "react";

/**
 * RetargetingPixels Component
 * Integrates Facebook Pixel and Google Ads conversion tracking
 * Allows you to retarget visitors who don't convert on first visit
 * 
 * Setup Instructions:
 * 1. Replace FACEBOOK_PIXEL_ID with your actual Facebook Pixel ID
 * 2. Replace GOOGLE_CONVERSION_ID with your Google Ads Conversion ID
 * 3. Replace GOOGLE_CONVERSION_LABEL with your Google Ads Conversion Label
 */

export default function RetargetingPixels() {
  useEffect(() => {
    // Facebook Pixel Initialization
    initializeFacebookPixel();

    // Google Ads Conversion Tracking
    initializeGoogleAds();

    // Track page view
    trackPageView();
  }, []);

  const initializeFacebookPixel = () => {
    // Load Facebook Pixel
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(script);

    // Initialize Pixel
    if (!window.fbq) {
      window.fbq = function () {
        if (window.fbq && (window.fbq as any).q) {
          (window.fbq as any).q.push(arguments);
        }
      };
      (window.fbq as any).q = [];
    }
    if (window.fbq) {
      window.fbq("init", "YOUR_FACEBOOK_PIXEL_ID"); // Replace with your Pixel ID
      window.fbq("track", "PageView");
    }
  };

  const initializeGoogleAds = () => {
    // Load Google Ads conversion tracking
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=AW-YOUR_CONVERSION_ID";
    document.head.appendChild(script);

    // Initialize gtag for Google Ads
    if (!window.dataLayer) {
      window.dataLayer = [];
    }
    if (window.gtag) {
      window.gtag("js", new Date());
      window.gtag("config", "AW-YOUR_CONVERSION_ID"); // Replace with your Google Ads ID
    }
  };

  const trackPageView = () => {
    // Track page view in both Facebook and Google
    if (window.fbq) {
      window.fbq("track", "PageView");
    }
  };

  return null;
}

declare global {
  interface Window {
    fbq?: any;
    gtag?: (command: string, ...args: any[]) => void;
    dataLayer?: any[];
  }
}

/**
 * Utility Functions for Manual Event Tracking
 * Use these in other components to track specific events
 */

export const trackFacebookEvent = (eventName: string, data?: Record<string, any>) => {
  if (window.fbq) {
    window.fbq("track", eventName, data);
  }
  console.log(`[Facebook Pixel] Event tracked: ${eventName}`, data);
};

export const trackGoogleConversion = (conversionId: string, conversionLabel: string) => {
  if (window.gtag) {
    window.gtag("event", "conversion", {
      allow_custom_scripts: true,
      send_to: `${conversionId}/${conversionLabel}`,
    });
  }
  console.log(`[Google Ads] Conversion tracked: ${conversionId}/${conversionLabel}`);
};

/**
 * Event Tracking Examples
 * 
 * // Track form submission
 * trackFacebookEvent("Lead", {
 *   content_name: "Website Review Form",
 *   content_type: "lead_form",
 * });
 * 
 * // Track service view
 * trackFacebookEvent("ViewContent", {
 *   content_name: "Web Design Service",
 *   content_type: "product",
 *   value: 500,
 *   currency: "USD",
 * });
 * 
 * // Track button click
 * trackFacebookEvent("Contact", {
 *   content_name: "Get Started Button",
 * });
 * 
 * // Track pricing tier selection
 * trackFacebookEvent("AddToCart", {
 *   content_name: "Growth Package",
 *   value: 1250,
 *   currency: "USD",
 * });
 */
