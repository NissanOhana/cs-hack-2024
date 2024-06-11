import { useEffect, useState } from 'react';
import { Card, Typography, Button } from '@mui/material';
import AddChildModal from './AddChildModal';
import { db } from '../firebase'; // Import the configured Firestore database instance
import { collection, getDocs, addDoc } from 'firebase/firestore';

export function ChildrenCard() {
  const [children, setChildren] = useState([]); // State to store the list of children
  const [modalOpen, setModalOpen] = useState(false); // State to control the visibility of the modal

  // useEffect hook to fetch data from Firestore on component mount
  useEffect(() => {
    // TODO:  What is that async??? 🦁 🦁
    const fetchChildren = async () => {
      // Define the collection you're working with ('children' collection)
      const childrenCollection = collection(db, 'children');

      // Fetch documents from the Firestore collection
      const childrenSnapshot = await getDocs(childrenCollection);

      // Map through each document and transform into a usable format for the state
      const childrenList = childrenSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Set the state with the fetched data
      setChildren(childrenList);
    };

    // Call the function to fetch data
    fetchChildren();
  }, []);

  const handleOpenModal = () => {
    setModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setModalOpen(false); // Close the modal
  };

  // Function to add a new child to the Firestore database
  const addNewChild = async (child) => {
    try {
      // Attempt to add a new document to the Firestore collection
      const docRef = await addDoc(collection(db, 'children'), child);

      // If successful, update the local state to include the new child
      setChildren([...children, { ...child, id: docRef.id }]);

      // Close the modal after adding the child
      handleCloseModal();
    } catch (error) {
      // Log any errors that occur during the process
      console.error('Error adding document: ', error);
    }
  };

  // Render the UI for the component
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
