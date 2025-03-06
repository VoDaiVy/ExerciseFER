import React, { useState } from 'react';

function ProductList() {
  const [products] = useState([
    { id: 1, name: 'Cơm gà' },
    { id: 2, name: 'Cao Lầu' },
    { id: 3, name: 'Mỳ Quảng' },
    { id: 4, name: 'Bánh tráng cuốn thịt heo' },
  ]);

  const [selectedProducts, setSelectedProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

 
  const handleCheckboxChange = (event) => {
    const productId = parseInt(event.target.value, 10);
    if (event.target.checked) {
      setSelectedProducts([...selectedProducts, productId]);
    } else {
      setSelectedProducts(selectedProducts.filter(id => id !== productId));
    }
  };


  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Danh sách sản phẩm</h2>

      <input
        type="text"
        placeholder="Tìm sản phẩm..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

 
      {filteredProducts.length > 0 ? (
        filteredProducts.map(product => (
          <div key={product.id}>
            <input
              type="checkbox"
              id={product.id}
              value={product.id}
              checked={selectedProducts.includes(product.id)}
              onChange={handleCheckboxChange}
            />
            <label htmlFor={product.id}>{product.name}</label>
          </div>
        ))
      ) : (
        <p>Không tìm thấy sản phẩm nào.</p>
      )}

      {selectedProducts.length > 0 && (
        <p>
          Bạn đã chọn: {selectedProducts.map(id => products.find(p => p.id === id)?.name).join(', ')}
        </p>
      )}
    </div>
  );
}

export default ProductList;