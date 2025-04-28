import { useEffect, useState } from 'react';
import { Snackbar, Alert } from '@mui/material';

const TestWarning = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Sahifaga kirganda avtomatik ochiladi
    setOpen(true);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={5000} // 6 sekunddan keyin avtomatik yopiladi
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} // Past, o'rtada chiqadi
    >
      <Alert onClose={handleClose} severity="warning" variant="filled" sx={{ width: '100%' }}>
        Sayt test rejimida ishlayapti!
      </Alert>
    </Snackbar>
  );
};

export default TestWarning;
