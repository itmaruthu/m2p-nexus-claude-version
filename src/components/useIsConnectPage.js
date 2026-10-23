import { useLocation } from 'react-router-dom';

/** True on the QR business-card page, which hides the site chrome. Ignores a trailing slash (/connect/). */
export function useIsConnectPage() {
  return useLocation().pathname.replace(/\/+$/, '') === '/connect';
}
