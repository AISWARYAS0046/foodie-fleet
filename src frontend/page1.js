import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Page1 = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);

  const nav = useNavigate();

  const handleBuyItem = (item) => {
    const selectedItemsWithImages = selectedItems.map((selectedItem) => ({
      ...selectedItem,
      image: foodItems.find((foodItem) => foodItem.id === selectedItem.id)?.image,
    }));
    nav("/verify", { state: { selectedItems: selectedItemsWithImages } });
    console.log(`Buying item: ${item.name}`);
  };
  
 
  const styles = {
    backgroundColor: "linear-gradient(to bottom, #36d1dc, #5b86e5)",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    fontFamily: 'Arial, sans-serif',
  };



  const pageStyle = {
    background: 'linear-gradient(to bottom, #ffffff, #f3f3f3)', 
  };
  

  
  
 // Rest of the code...
 const handleAddToCart = (item) => {
  const existingItem = selectedItems.find((selectedItem) => selectedItem.id === item.id);

  if (existingItem) {
    // Item already exists in the cart, increment the quantity
    const updatedItems = selectedItems.map((selectedItem) => {
      if (selectedItem.id === item.id) {
        return {
          ...selectedItem,
          quantity: selectedItem.quantity + 1,
        };
      }
      return selectedItem;
    });
    
    setSelectedItems(updatedItems);
  } else {
    // Item does not exist in the cart, add a new item with image
    const newItem = {
      ...item,
      quantity: 1,
      image: foodItems.find((foodItem) => foodItem.id === item.id)?.image,
    };
    
    setSelectedItems([...selectedItems, newItem]);
  }
};

// Rest of the code...

  const handleRemoveFromCart = (item) => {
    const updatedItems = selectedItems.filter(
      (selectedItem) => selectedItem.id !== item.id
    );
    setSelectedItems(updatedItems);
  };
  const quantityButtonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '2px 5px',
    border: 'none',
    cursor: 'pointer',
  };
  
  const handleDecrementQuantity = (item) => {
    const updatedItems = selectedItems.map((selectedItem) => {
      if (selectedItem.id === item.id) {
        return { ...selectedItem, quantity: selectedItem.quantity - 1 };
      }
      return selectedItem;
    });
  
    setSelectedItems(updatedItems);
  };
  
  const handleIncrementQuantity = (item) => {
    const updatedItems = selectedItems.map((selectedItem) => {
      if (selectedItem.id === item.id) {
        const newQuantity = selectedItem.quantity + 1;
        const newPrice = item.price * newQuantity;
        return { ...selectedItem, quantity: newQuantity, price: newPrice };
      }
      return selectedItem;
    });
  
    setSelectedItems(updatedItems);
  };

  const profileButtonStyle = {
    backgroundColor: 'grey',
    color: 'white',
    padding: '5px 10px',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
    marginBottom:'0px',
  };
  
  
  const removeButtonStyle = {
    backgroundColor: '#dc3545',
    color: 'white',
    padding: '2px 5px',
    border: 'none',
    cursor: 'pointer',
  };
  
  const buyButtonStyle = {
    backgroundColor: '#28a745',
    color: 'white',
    padding: '2px 5px',
    border: 'none',
    cursor: 'pointer',
  };

  const foodItems = [
    { id: 1, name: 'Biriyani', price: 149, image: 'https://media.istockphoto.com/id/1407172051/photo/indian-spicy-chicken-tikka-biryani-with-raita-and-gulab-jamun-served-in-a-dish-top-view-on.jpg?b=1&s=612x612&w=0&k=20&c=uu-95ckdi7s8AXpO4BtNaeClWYH1d-tVpCPqZ0cERcQ=' },
    { id: 2, name: 'Chicken Nuggets', price: 99, image: 'https://images.pexels.com/photos/11519282/pexels-photo-11519282.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: 3, name: 'Malabar Chicken', price: 195, image: 'https://images.pexels.com/photos/13795311/pexels-photo-13795311.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: 4, name: 'Fried Rice', price: 169, image: 'https://images.pexels.com/photos/10293879/pexels-photo-10293879.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: 5, name: 'Burger', price: 198, image: 'https://images.pexels.com/photos/2983099/pexels-photo-2983099.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: 6, name: 'Pizza', price: 359, image: 'https://images.pexels.com/photos/4773769/pexels-photo-4773769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { id: 7, name: 'Chicken Tandoori', price: 329, image: 'https://images.pexels.com/photos/9646843/pexels-photo-9646843.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: 8, name: 'Mutton Tikka', price: 189, image: 'https://images.pexels.com/photos/12312104/pexels-photo-12312104.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: 9, name: 'Parotta', price: 50, image: 'https://media.istockphoto.com/id/1446834008/photo/top-view-of-a-parotta-with-gravy-and-raita-on-the-brown-background.jpg?b=1&s=612x612&w=0&k=20&c=Qtz4KXaeYsbu_g7lslsgdX9aIoAePvJLMyMGq2XTLVI=' },
    { id: 10, name: 'Veg Meals Combo', price: 230, image: 'https://images.pexels.com/photos/14375617/pexels-photo-14375617.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: 11, name: 'Non Veg Meals Combo', price: 299, image: 'https://images.pexels.com/photos/5718067/pexels-photo-5718067.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: 12, name: 'Ice Cream', price: 79, image: 'https://images.pexels.com/photos/2819088/pexels-photo-2819088.jpeg?auto=compress&cs=tinysrgb&w=300' },
    // Food items data
  ];

  const buttonStyle = {
    backgroundColor: '#28a745',
    color: 'white',
    padding: '5px 10px',
    border: 'none',
    cursor: 'pointer',
  };

  const wrapperStyle = {
    backgroundColor: 'white',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    overflowY: 'scroll',
    padding: '150px 80px 0',
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: '10px',
    left: '10px',
    width: 'calc(100% - 20px)',
    zIndex: '1',
  };
  const searchInputStyle = {
    fontSize:'14px',
    color:'white',
    padding: '8px', // Increase the padding for more height
    backgroundColor: 'white',
    border: 'none',
    borderRadius: '50px',
    width: '300px', // Increase the width for a wider search bar
    color: 'blck',
    
  };

  const navigationBarStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    borderRadius: '2px',
    padding: '10px',
    color: 'black',
    width: '1350px',
    backgroundColor: 'black',
  };

  const navigationBarItemStyle = {
    border: '1px solid white',
    padding: '5px 10px',
    borderRadius: '10px',
  };

  const menuContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '80px 120px', // Updated gap property
    marginTop: '20px',
  };

  const foodItemStyle = {
    // ...existing styles
    border: '3px solid #808080',
    borderRadius: '100px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '250px',
    transition: 'border-color 0.3s', // Add transition for smooth effect
    cursor: 'pointer', // Change cursor on hover
    transition: 'transform 0.3s',
    // Hover state
    ':hover': {
      borderColor: '#28a745',
      transform: 'scale(1.1)',
      // Change border color on hover
    },
  };

  const foodImageStyle = {
    width: '200px', // Increased width to 200px
    height: '250px', // Increased height to 150px
    objectFit: 'cover',
    marginBottom: '10px',
    borderRadius: '50px',
  };

  const cartContainerStyle = {
 
    
    borderRadius: '10px',
    padding: '20px',
    marginTop: '10px', // Updated value
    marginLeft: '100px',
    width: '300px',
    alignItems:'crnter',
   
  };

  
  // Filtered food items based on search query
  const filteredFoodItems = foodItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

    return (
      <body style={styles}>
      <div style={wrapperStyle}>
          <div style={pageStyle}>
        {/* <div style={styles}> */}
        <div style={headerStyle}>
          {/* Navigation bar */}
          <div style={navigationBarStyle}>
            
            <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search"
            style={searchInputStyle}
            />
          </div>

          {/* Login and Sign Up buttons */}
          <div>
      <Link to="/" style={buttonStyle}>Login</Link>
      <span>|</span>
      <Link to="/register" style={buttonStyle}>Sign Up</Link>
    </div>
        </div>
        <div>
              <Link to="/profile">
                <button style={profileButtonStyle}>Profile</button>
              </Link>
            </div>

        {/* Rest of the component code */}
        <h1 style={{ fontSize: '24px', textAlign: 'center' }}>FOODIE FLEET</h1>
        <div style={menuContainerStyle}>
          {filteredFoodItems.map((item) => (
            <div key={item.id} style={foodItemStyle}>
              <img src={item.image} alt={item.name} style={foodImageStyle} />
              <span>{item.name}</span>
              <span>₹{item.price.toFixed(2)}</span><div className='cart'>
              <button style={buttonStyle} onClick={() => handleAddToCart(item)}>
                Add to Cart
              </button></div>
            </div>
          ))}
        </div>
        <div style={cartContainerStyle}>
  <h2>Cart</h2>
  {selectedItems.length === 0 ? (
    <p>No items in the cart</p>
  ) : (
    <ul style={{ listStyleType: 'none', padding: '0' }}>
      {selectedItems.map((item) => (
        <li
          key={item.id}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '5px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={item.image}
              alt={item.name}
              style={{ ...foodImageStyle, marginRight: '10px' }}
            />
            <span>{item.name}</span>
          </div>
          <div>
            <button
              style={quantityButtonStyle}
              onClick={() => handleDecrementQuantity(item)}
              disabled={item.quantity === 1}
            >
              -
            </button>
            <span style={{ margin: '0 5px' }}>{item.quantity}</span>
            <button
              style={quantityButtonStyle}
              onClick={() => handleIncrementQuantity(item)}
            >
              +
            </button>
          </div>
          ₹{item.price.toFixed(2)}
          <button
            style={removeButtonStyle}
            onClick={() => handleRemoveFromCart(item)}
          >
            Remove
          </button>
          
          <button
            style={buyButtonStyle}
            onClick={() => handleBuyItem(item)}
          >
            Buy
          </button>
        </li>
      ))}
    </ul>
  )}
      </div>
      </div>
      </div>
      </body>
      
    
    );
  };

  export default Page1;