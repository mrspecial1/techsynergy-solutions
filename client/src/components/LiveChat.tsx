import { useEffect } from "react";

/**
 * LiveChat Component
 * Integrates Intercom for real-time visitor engagement and lead qualification
 * Intercom provides: live chat, visitor tracking, lead scoring, and automated responses
 */

export default function LiveChat() {
  useEffect(() => {
    // Initialize Intercom
    // Replace 'YOUR_INTERCOM_APP_ID' with your actual Intercom App ID
    const initializeIntercom = () => {
      if (window.Intercom) {
        window.Intercom("boot", {
          app_id: "YOUR_INTERCOM_APP_ID", // Replace with your Intercom App ID
          name: "TechSynergy Solutions",
          email: "hello@techsynergy.com",
          created_at: Math.floor(Date.now() / 1000),
          custom_launcher_selector: ".intercom-launcher",
        });
      }
    };

    // Load Intercom script
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://js.intercomcdn.com/boot.js";
    script.onload = initializeIntercom;
    document.head.appendChild(script);

    return () => {
      // Cleanup on unmount
      if (window.Intercom) {
        window.Intercom("shutdown");
      }
    };
  }, []);

  return null;
}

declare global {
  interface Window {
    Intercom?: (command: string, ...args: any[]) => void;
  }
}
