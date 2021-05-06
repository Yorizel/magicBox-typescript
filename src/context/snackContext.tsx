import React, { createContext, ReactNode, useState } from 'react';
import { Snackbar } from '@material-ui/core';
import { Alert, AlertProps } from '@material-ui/lab';

interface Snack {
  open: boolean;
  message: string;
  color: AlertProps['severity'];
}
type setter = React.Dispatch<Snack>;

interface Values {
  snack: Snack;
  setSnack: setter | Function;
}
type child = ReactNode | any;

export const SnackContext = createContext<Values>({
  snack: { open: false, message: '', color: 'error' },
  setSnack: ({ open, message, color }: Snack) => {
    return { open, message, color };
  }
});

export default function SnackProvider({ children }: child) {
  const [snack, setSnack] = useState<Snack>({
    open: false,
    message: '',
    color: 'error'
  });
  return (
    <SnackContext.Provider value={{ snack, setSnack }}>
      <Snackbar
        open={snack.open}
        autoHideDuration={3000}
        onClose={() =>
          setSnack((prevState) => ({
            ...prevState,
            open: false
          }))
        }
      >
        <Alert variant={'filled'} severity={snack.color}>
          {snack.message}
        </Alert>
      </Snackbar>
      {children}
    </SnackContext.Provider>
  );
}
