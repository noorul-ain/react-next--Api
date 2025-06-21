

### 📁 `backend/README.md`

````markdown
# Express Product API Backend

This is the backend API built with Node.js and Express that serves a list of products. It supports search functionality via a query parameter and simulates delay to mimic real-world latency.

## 📦 Features

- Search products using `?search=...`
- Simulated 3-second delay to test frontend loading states
- Simple JSON-based in-memory product list
- Cancellable requests supported via frontend using AbortController

## 🔧 Technologies

- Node.js
- Express

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
````

2. **Run the server:**

   ```bash
   nodemon index.js
   # or
   node index.js
   ```

3. **API Endpoint:**

   ```
   GET /api/products?search=query
   ```

4. **Example response:**

   ```json
   [
     {
       "id": 2,
       "name": "Smartphone",
       "price": 499.99,
       "image": "https://picsum.photos/seed/smartphone/300/200"
     }
   ]
   ```


### 📁 `frontend/README.md`

```markdown
# React Product Search Frontend

This is the frontend of a product search application built with React. It allows users to search for products by name and fetches filtered results from the backend API in real-time using Axios and AbortController.

## 📦 Features

- Live product search via input
- Only displays results when search query is entered
- Uses AbortController to cancel previous requests during rapid typing
- Error and loading handling
- Image previews for each product

## 🔧 Technologies

- React
- Axios
- AbortController
- Vite or Create React App

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
````

2. **Configure proxy (if using CRA):**
   In `package.json`, add:

   ```json
   "proxy": "http://localhost:3000"
   ```

3. **Run the frontend:**

   ```bash
   npm start
   ```

## 🗂 Folder Structure

```
src/
├── App.jsx
├── hooks/
│   └── useFetchProducts.js
└── index.js
```

## 🔄 API Integration

The frontend fetches data from:

```
GET /api/products?search=productName
```

## 📷 Example

When the user types `laptop`, it calls:

```
/api/products?search=laptop
```

And shows only matching product(s).

```
```
