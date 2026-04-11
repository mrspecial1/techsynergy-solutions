/**
 * Analytics Utility
 * Tracks user interactions and conversions for optimization
 * Integrates with Google Analytics (gtag)
 */

declare global {
  interface Window {
    gtag?: (command: string, ...args: any[]) => void;
  }
}

/**
 * Track CTA button clicks
 */
export const trackCTAClick = (buttonName: string, location: string) => {
  if (window.gtag) {
    window.gtag("event", "cta_click", {
      button_name: buttonName,
      location: location,
      timestamp: new Date().toISOString(),
    });
  }
  console.log(`[Analytics] CTA Click: ${buttonName} from ${location}`);
};

/**
 * Track form submissions
 */
export const trackFormSubmit = (formName: string, formType: string) => {
  if (window.gtag) {
    window.gtag("event", "form_submit", {
      form_name: formName,
      form_type: formType,
      timestamp: new Date().toISOString(),
    });
  }
  console.log(`[Analytics] Form Submit: ${formName} (${formType})`);
};

/**
 * Track lead magnet interactions
 */
export const trackLeadMagnetInteraction = (action: string) => {
  if (window.gtag) {
    window.gtag("event", "lead_magnet_" + action, {
      timestamp: new Date().toISOString(),
    });
  }
  console.log(`[Analytics] Lead Magnet: ${action}`);
};

/**
 * Track WhatsApp engagement
 */
export const trackWhatsAppClick = () => {
  if (window.gtag) {
    window.gtag("event", "whatsapp_click", {
      timestamp: new Date().toISOString(),
    });
  }
  console.log(`[Analytics] WhatsApp Click`);
};

/**
 * Track section views (scroll tracking)
 */
export const trackSectionView = (sectionName: string) => {
  if (window.gtag) {
    window.gtag("event", "section_view", {
      section_name: sectionName,
      timestamp: new Date().toISOString(),
    });
  }
  console.log(`[Analytics] Section View: ${sectionName}`);
};

/**
 * Track pricing tier selection
 */
export const trackPricingSelection = (tier: string) => {
  if (window.gtag) {
    window.gtag("event", "pricing_selection", {
      pricing_tier: tier,
      timestamp: new Date().toISOString(),
    });
  }
  console.log(`[Analytics] Pricing Selection: ${tier}`);
};

/**
 * Track portfolio/case study views
 */
export const trackCaseStudyView = (projectName: string) => {
  if (window.gtag) {
    window.gtag("event", "case_study_view", {
      project_name: projectName,
      timestamp: new Date().toISOString(),
    });
  }
  console.log(`[Analytics] Case Study View: ${projectName}`);
};

/**
 * Track FAQ interactions
 */
export const trackFAQInteraction = (question: string, category: string) => {
  if (window.gtag) {
    window.gtag("event", "faq_expand", {
      question: question,
      category: category,
      timestamp: new Date().toISOString(),
    });
  }
  console.log(`[Analytics] FAQ: ${category} - ${question}`);
};

/**
 * Track testimonial views
 */
export const trackTestimonialView = (clientName: string) => {
  if (window.gtag) {
    window.gtag("event", "testimonial_view", {
      client_name: clientName,
      timestamp: new Date().toISOString(),
    });
  }
  console.log(`[Analytics] Testimonial View: ${clientName}`);
};

/**
 * Track page scroll depth
 */
export const trackScrollDepth = (depth: number) => {
  if (window.gtag) {
    window.gtag("event", "scroll_depth", {
      scroll_percentage: depth,
      timestamp: new Date().toISOString(),
    });
  }
};

/**
 * Track time on page
 */
export const trackTimeOnPage = (timeInSeconds: number) => {
  if (window.gtag) {
    window.gtag("event", "time_on_page", {
      time_seconds: timeInSeconds,
      timestamp: new Date().toISOString(),
    });
  }
};
