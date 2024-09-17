import React, { useState, useMemo } from 'react';
import './boq.css';
import { Slider } from '@mui/material';


const Card = ({ title, price, details, addOns, initialMinimized = false }) => {
  const [selectedAddOns, setSelectedAddOns] = useState({});
  const [isMinimized, setIsMinimized] = useState(initialMinimized);
  const basePrice = useMemo(() => parseInt(price.replace('₹', ''), 10), [price]);

  const handleAddOnChange = (addOn, isChecked) => {
    setSelectedAddOns((prevSelectedAddOns) => ({
      ...prevSelectedAddOns,
      [addOn.name]: isChecked ? addOn.price : 0,
    }));
  };

  const calculateTotalPrice = useMemo(() => {
    return Object.values(selectedAddOns).reduce((total, addOnPrice) => total + addOnPrice, basePrice);
  }, [selectedAddOns, basePrice]);

  const toggleMinimize = () => setIsMinimized((prev) => !prev);

  if (isMinimized) {
    return (
      <div className="minimized-card" onClick={toggleMinimize}>
        <span>{title}</span>
        <div className="info">
          <p>Base Price: ₹{basePrice}</p>
          <p>Total Price: ₹{calculateTotalPrice}</p>
        </div>
        <button className="start-button">Start</button>
      </div>
    );
  }

  return (
    <>
    <div className="card-container">
      <CardSection className="card-image">
        <img src="https://placehold.co/120x120" alt={title} className="image" />
      </CardSection>

      <CardSection className="card-features">
        <h3>{title}</h3>
        <p>{details}</p>
        <button className="edit">Edit</button>
      </CardSection>

      <CardSection className="card-add-ons">
        <button className="add-on">ADD ON +</button>
        <ul>
          {addOns.map((addOn, index) => (
            <li key={index}>
              <label>
                <input
                  type="checkbox"
                  onChange={(e) => handleAddOnChange(addOn, e.target.checked)}
                />
                {addOn.name} (+₹{addOn.price})
              </label>
            </li>
          ))}
        </ul>
      </CardSection>

      <CardSection className="card-summary">
        <h4>Summary</h4>
        <p>Base Price: ₹{basePrice}</p>
        <p>Add-Ons: ₹{Object.values(selectedAddOns).reduce((total, price) => total + price, 0)}</p>
        <p>Total Price: ₹{calculateTotalPrice}</p>
        <button className="done-button" onClick={toggleMinimize}>Done</button>
      </CardSection>
    </div>
    </>
  );
};

const CardSection = ({ className, children }) => {
  return <div className={`card ${className}`}>{children}</div>;
};

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState([1000, 5000]);
  const [compareList, setCompareList] = useState([]);

  const productsData = useMemo(() => [
    {
      title: "Workstation",
      price: "₹2000",
      details: "A functional workstation for your needs.",
      addOns: [
        { name: "Storage", price: 500 },
        { name: "Softboards", price: 200 },
        { name: "Plant Dividers", price: 100 },
        { name: "Raceway", price: 50 },
        { name: "Side Covers", price: 150 }
      ],
      initialMinimized: false
    },
    {
      title: "Conference Table",
      price: "₹4000",
      details: "A large table suitable for meetings.",
      addOns: [
        { name: "Power Outlets", price: 600 },
        { name: "Cable Management", price: 200 },
        { name: "Wireless Charging", price: 300 }
      ],
      initialMinimized: true
    },
    {
      title: "Office Chair",
      price: "₹1500",
      details: "Ergonomic chair with adjustable height.",
      addOns: [
        { name: "Lumbar Support", price: 200 },
        { name: "Headrest", price: 150 },
        { name: "Armrests", price: 100 }
      ],
      initialMinimized: true
    },
    {
      title: "Filing Cabinet",
      price: "₹1200",
      details: "Secure cabinet for storing documents.",
      addOns: [
        { name: "Additional Shelves", price: 200 },
        { name: "Lock System", price: 300 },
        { name: "Fireproofing", price: 500 }
      ],
      initialMinimized: true
    }
  ], []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handleSliderChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleCompareToggle = (product) => {
    setCompareList((prevCompareList) => {
      if (prevCompareList.includes(product)) {
        return prevCompareList.filter((item) => item !== product);
      } else {
        return [...prevCompareList, product];
      }
    });
  };

  const filteredProducts = productsData.filter((product) => {
    const price = parseInt(product.price.replace('₹', ''), 10);
    return (
      product.title.toLowerCase().includes(searchQuery) &&
      price >= priceRange[0] &&
      price <= priceRange[1]
    );
  });

  return (
    <div className="App">
      <div className="search-filter">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearch}
          className="search-bar"
        />
        <Slider
          value={priceRange}
          onChange={handleSliderChange}
          valueLabelDisplay="auto"
          min={1000}
          max={5000}
          className="price-slider"
        />
      </div>

      <div className="products-grid">
        {filteredProducts.map((product, index) => (
          <div key={index}>
            <Card
              title={product.title}
              price={product.price}
              details={product.details}
              addOns={product.addOns}
              initialMinimized={product.initialMinimized}
            />
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default App;
