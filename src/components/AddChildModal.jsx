import { useState } from 'react';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';

function AddChildModal({ open, handleClose, addNewChild }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [school, setSchool] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = () => {
    if (name && age && school && date) {
      addNewChild({ name, age, school, date });
      setName('');
      setAge('');
      setSchool('');
      setDate('');
      handleClose(); // Close modal after submission
    } else {
      alert('All fields are required.');
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" component="h2">
          Add New Child
        </Typography>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          sx={{ mt: 2 }}
        />
        <TextField
          label="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          fullWidth
          sx={{ mt: 2 }}
        />
        <TextField
          label="School"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
          fullWidth
          sx={{ mt: 2 }}
        />
        <TextField
          label="Date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          fullWidth
          sx={{ mt: 2 }}
        />
        <Button variant="contained" onClick={handleSubmit} sx={{ mt: 2 }}>
          Submit
        </Button>
      </Box>
    </Modal>
  );
}

export default AddChildModal;
