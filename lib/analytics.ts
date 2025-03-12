/**
 * Track a custom event with Simple Analytics
 * @param eventName The name of the event to track
 * @param options Additional options to pass to Simple Analytics
 */
export function trackEvent(eventName: string, options?: any) {
    if (typeof window !== "undefined" && window.sa_event) {
      window.sa_event(eventName, options)
    }
  }
  
  