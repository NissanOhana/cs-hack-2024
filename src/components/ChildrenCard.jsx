import React, { useEffect, useState } from 'react';
import { Card, Typography, Button } from '@mui/material';
import AddChildModal from './AddChildModal';
import { db } from '../firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore';

export function ChildrenCard() {
  const [children, setChildren] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchChildren = async () => {
      const childrenCollection = collection(db, 'children');
      const childrenSnapshot = await getDocs(childrenCollection);
      const childrenList = await Promise.all(
        childrenSnapshot.docs.map(async (doc) => {
          const childData = doc.data();
          const imageNum = childData.imageNum || 1;
          const imageUrl = await fetchImage(imageNum);
          return { id: doc.id, ...childData, imageUrl };
        })
      );
      setChildren(childrenList);
    };

    fetchChildren();
  }, []);

  const fetchImage = async (num) => {
    const response = await fetch(
      `https://dragonball-api.com/api/characters/${num}`
    );
    const data = await response.json();
    return data.image;
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const addNewChild = async (child) => {
    const imageNum = Math.floor(Math.random() * 20) + 1;
    const imageUrl = await fetchImage(imageNum);
    try {
      const docRef = await addDoc(collection(db, 'children'), {
        ...child,
        imageNum,
      });
      setChildren([...children, { ...child, id: docRef.id, imageUrl }]);
      handleCloseModal();
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <div>
      {children.map((child) => (
        <Card
          key={child.id}
          className="card"
          sx={{ display: 'flex', mb: 2, p: 2 }}
        >
          <div style={{ flex: '1 1 auto' }}>
            <Typography variant="body1">Name: {child.name}</Typography>
            <Typography variant="body1">Age: {child.age}</Typography>
            <Typography variant="body1">School: {child.school}</Typography>
            <Typography variant="body1">Date: {child.date}</Typography>
          </div>
          <img
            src={child.imageUrl}
            alt="Character"
            style={{ width: 100, height: 100 }}
          />
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
