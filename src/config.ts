// Configuration for the landing page
// These values can be overridden via environment variables

export const config = {
  // The URL to redirect CTAs to (e.g., console.kubeletto.com or console-staging.kubeletto.com)
  consoleUrl: import.meta.env.PUBLIC_CONSOLE_URL || 'https://console.kubeletto.com',
};
