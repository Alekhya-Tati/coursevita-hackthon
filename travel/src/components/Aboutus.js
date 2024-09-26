import React from 'react';
import Card from 'react-bootstrap/Card';
import './Aboutus.css'; // Import the CSS file

function Aboutus() {
  return (
    <div className="aboutus-container">
      <Card className="custom-card">
        <Card.Img 
          variant="top" 
          src="https://static6.depositphotos.com/1006568/627/i/450/depositphotos_6274141-stock-photo-travel-%E2%80%93-collection-of-the.jpg" 
          className="custom-card-img" 
        />
        <Card.Body className="custom-card-body">
          <Card.Title>ABOUT US</Card.Title>
          <Card.Text>
            Welcome to Global Horizons Travel, where your journey to discovering the world's most captivating destinations begins. We are more than just a travel agency; we are architects of your travel dreams, curators of memorable experiences, and your trusted companions in exploring the globe.
          </Card.Text>
        </Card.Body>
      </Card>
      

    </div>
  
    
  );
}

export default Aboutus;
