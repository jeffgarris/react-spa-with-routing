import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import './sass/Shop.scss';

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      'https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get'
    );

    const items = await data.json();
    setItems(items.items);
  }

  return (
    <div id="shop-page">
      <h1>Upcoming Items</h1>
      <ul>
        {items.map(item => (
          <li key={item.itemid}>
            <Link to={`/shop/${item.itemid}`}>{item.name}</Link>
            <Link to={`/shop/${item.itemid}`}><img src={item.item.image} width="100" alt={item.name} /></Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Shop;