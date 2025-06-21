import express from 'express'; 

const app = express();

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 59.99,
    image: "https://picsum.photos/seed/headphones/300/200",
  },
  {
    id: 2,
    name: "Smartphone",
    price: 499.99,
    image: "https://picsum.photos/seed/smartphone/300/200",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 39.99,
    image: "https://picsum.photos/seed/speaker/300/200",
  },
  {
    id: 4,
    name: "Gaming Mouse",
    price: 29.99,
    image: "https://picsum.photos/seed/mouse/300/200",
  },
  {
    id: 5,
    name: "Laptop",
    price: 799.99,
    image: "https://picsum.photos/seed/laptop/300/200",
  },
  {
    id: 6,
    name: "Smart Watch",
    price: 149.99,
    image: "https://picsum.photos/seed/smartwatch/300/200",
  },
  {
    id: 7,
    name: "4K Monitor",
    price: 299.99,
    image: "https://picsum.photos/seed/monitor/300/200",
  },
  {
    id: 8,
    name: "Mechanical Keyboard",
    price: 89.99,
    image: "https://picsum.photos/seed/keyboard/300/200",
  },
  {
    id: 9,
    name: "Portable SSD",
    price: 99.99,
    image: "https://picsum.photos/seed/ssd/300/200",
  },
  {
    id: 10,
    name: "Drone Camera",
    price: 349.99,
    image: "https://picsum.photos/seed/drone/300/200",
  },
];

app.get('/api/products', (req, res) => {
  let result = products;


    //   http://localhost:3000/api/products?search=laptop
    // http://localhost:3000/api/products

    // Search filtering
  if (req.query.search) {
    const searchQuery = req.query.search.toLowerCase();
    result = products.filter(product =>
      product.name.toLowerCase().includes(searchQuery)
    );
  }

  // Simulate delay (3 seconds)
  setTimeout(() => {
    res.json(result);
  }, 3000);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
