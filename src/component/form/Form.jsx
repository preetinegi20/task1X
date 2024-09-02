import React from "react";

function form() {
  const handleSubmit = () => {};
  return (
    <>
      <div className="form-container">
        <form>
          <input type="text" placeholder="Enter keyword..." />
          <select name="" id="">
            <option value="Rent1">Rent1</option>
            <option value="Rent2">Rent2</option>
            <option value="Rent3">Rent3</option>
            <option value="Rent4">Rent4</option>
          </select>
          <select name="" id="">
            <option value="">Bed1</option>
            <option value="">Bed2</option>
            <option value="">Bed3</option>
          </select>
          <select name="" id="">
            <option value="">Bath1</option>
            <option value="">Bed2</option>
            <option value="">Bed3</option>
          </select>
          <button onSubmit={handleSubmit}> Search</button>
        </form>
      </div>
    </>
  );
}

export default form;
