import React from "react";

function FilterSort({ setCategory, setSort }) {
  return (
    <div className="filters">
      {/* CATEGORY FILTER */}
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        <option value="Electronics & Accessories">
          Electronics & Accessories
        </option>
      </select>

      {/* SORT FILTER */}
      <select onChange={(e) => setSort(e.target.value)}>
        <option value="">Sort By</option>
        <option value="low">Price: Low to High</option>
        <option value="high">Price: High to Low</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
}

export default FilterSort;
