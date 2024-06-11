import React, { useState } from 'react';
import { Card, Typography, Button } from '@mui/material';
import AddChildModal from './AddChildModal';

const mockData = [
  {
    id: 1,
    name: 'Harry Potter',
    age: 11,
    school: 'Hogwarts',
    date: '2024-01-01',
  },
  {
    id: 2,
    name: 'Hermione Granger',
    age: 11,
    school: 'Hogwarts',
    date: '2024-01-01',
  },
];

export function ChildrenCard() {
  const [children, setChildren] = useState(mockData);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const addNewChild = (child) => {
    setChildren([...children, { ...child, id: children.length + 1 }]);
  };

  return (
    <div>
      {children.map((child) => (
        <Card key={child.id} className="card" sx={{ mb: 2, p: 2 }}>
          <Typography variant="body1">Name: {child.name}</Typography>
          <Typography variant="body1">Age: {child.age}</Typography>
          <Typography variant="body1">School: {child.school}</Typography>
          <Typography variant="body1">Date: {child.date}</Typography>
        </Card>
      ))}
      <Button variant="contained" onClick={handleOpenModal}>
        Add New Child
      </Button>
      <AddChildModal
        open={modalOpen}
        handleClose={handleCloseModal}
        addNewChild={addNewChild}
      />
    </div>
  );
}
