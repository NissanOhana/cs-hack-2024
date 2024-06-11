import { useState } from 'react';

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
  const [children] = useState(mockData);

  return (
    <div>
      {children.map((child) => (
        <div key={child.id} className="card">
          <div>Name: {child.name}</div>
          <div>Age: {child.age}</div>
          <div>School: {child.school}</div>
          <div>Date: {child.date}</div>
        </div>
      ))}
      <button
        onClick={() => {
          /* Future modal trigger */
        }}
      >
        Add New Child
      </button>
    </div>
  );
}
