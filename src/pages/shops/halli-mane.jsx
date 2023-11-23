import React, { useState, useEffect } from 'react';
import Offers from '../../components/Offers';
import Navbar from '../../components/Navbar';
import ShopItem from '../../components/ShopItem';

const Cantina = () => {
  const [shopItems, setShopItems] = useState([]);
  const apiUrl = 'http://localhost:4000/api/shops/halli-mane';

  useEffect(() => {
    const fetchShopItems = async () => {
      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error('Failed to fetch shop items');
        }
        const json = await response.json();
        setShopItems(json);
      } catch (error) {
        console.error('Error fetching shop items:', error.message);
      }
    };

    fetchShopItems();
  }, []);

  return (
    <div>
      <Offers caption="10% off hurry!"/>
      <Navbar/>
        {shopItems&& shopItems.map((item) => (
          <ShopItem key={item._id} title={item.title} cost={item.cost} desc={item.desc}/>
        ))}
    </div>
  );
};

export default Cantina;
