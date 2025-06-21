import './App.css';
import { useState } from 'react';
import useFetchProducts from './hooks/useFetchProducts';

function App() {
  const [search, setSearch] = useState('');
  const url = search.trim() ? `/api/products?search=${encodeURIComponent(search)}` : null;
  const { products, error, loading } = useFetchProducts(url);

  return (
    <>
      <h1>Products</h1>

      {/* ✅ Search Input */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: '8px', width: '300px', marginBottom: '1rem' }}
      />

      {loading && <p>Loading products...</p>}

      {!loading && error && <p style={{ color: 'red' }}>{error}</p>}

      {/* ✅ Show results only if search has value and products found */}
      {!loading && !error && search && products.length > 0 && (
        <>
          <h2>Found {products.length} Product(s)</h2>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <h3>{product.name}</h3>
                <p>Price: ${product.price}</p>
                <img src={product.image} alt={product.name} width="150" />
              </li>
            ))}
          </ul>
        </>
      )}

      {/* ✅ Show message if no products found */}
      {!loading && !error && search && products.length === 0 && (
        <p>No products match your search.</p>
      )}
    </>
  );
}

export default App;
