import { createContext, useContext } from 'react';

export const ConsultationContext = createContext({ open: () => {} });

/** Opens the "Book a consultation" dialog from anywhere inside <ConsultationProvider>. */
export const useConsultation = () => useContext(ConsultationContext);
