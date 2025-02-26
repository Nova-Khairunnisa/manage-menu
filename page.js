import React from 'react';
import './App.css';

const friendsSI = [
  { name: 'Teman SI 1', image: 'images.jpg' },
  { name: 'Teman SI 2', image: 'images.jpg' },
  { name: 'Teman SI 3', image: 'images.jpg' },
  { name: 'Teman SI 4', image: 'images.jpg' },
  { name: 'Teman SI 5', image: 'images.jpg' },
];

const friendsKA = [
  { name: 'Teman KA 1', image: 'images.jpg' },
  { name: 'Teman KA 2', image: 'images.jpg' },
  { name: 'Teman KA 3', image: 'images.jpg' },
  { name: 'Teman KA 4', image: 'images.jpg' },
  { name: 'Teman KA 5', image: 'images.jpg' },
];

const friendsBD = [
  { name: 'Teman BD 1', image: 'images.jpg' },
  { name: 'Teman BD 2', image: 'images.jpg' },
  { name: 'Teman BD 3', image: 'images.jpg' },
  { name: 'Teman BD 4', image: 'images.jpg' },
  { name: 'Teman BD 5', image: 'images.jpg' },
];

const Card = ({ className, friends }) => {
  return (
    <div className="card">
      <div className="card-header">{className}</div>
      <div className="card-body">
        {friends.map((friend, index) => (
          <div className="profile-circle" key={index}>
            <img src={friend.image} alt={friend.name} className="profile-img" />
          </div>
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="container">
      <Card className="SI" friends={friendsSI} />
      <Card className="KA" friends={friendsKA} />
      <Card className="BD" friends={friendsBD} />
    </div>
  );
};

export default App;
