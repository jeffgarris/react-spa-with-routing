import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './App.css';

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
        console.log(items.items);
        setItems(items.items);
    }

  return (
    <div>
      <h1>Shop Page</h1>
      <ul>
        {items.map(item => (
                <li key={item.itemid}>
                    <Link to={`/shop/${item.itemid}`}>{item.name}</Link>
                    <img src={item.item.image} width="100" alt={item.name} />
                </li>
        ))}
      </ul>
    </div>
  );
}

export default Shop;