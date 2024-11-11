

// import React, { useState } from "react";

// const FilterSidebar = () => {
//   const [searchText, setSearchText] = useState("");
//   const [priceRange, setPriceRange] = useState([60, 300]);
//   const [selectedCategories, setSelectedCategories] = useState([]);
//   const [selectedBreeds, setSelectedBreeds] = useState([]);
//   const [selectedGender, setSelectedGender] = useState([]);
//   const [selectedLocation, setSelectedLocation] = useState("");

//   const categories = ["Dogs", "Cats", "Rabbit", "Birds", "Fish", "Others"];
//   const breeds = [
//     "Airedale Terrier",
//     "American Eskimo",
//     "Basset Hound",
//     "Bernese Mountain Dog",
//     "Bichon Frise",
//   ];
//   const genders = ["Male", "Female"];
//   const locations = ["All", "NewYork City", "Kansas City", "New Jersey"];

//   // Handle checkbox changes
//   const handleCheckboxChange = (value, state, setState) => {
//     if (state.includes(value)) {
//       setState(state.filter((item) => item !== value));
//     } else {
//       setState([...state, value]);
//     }
//   };

//   // Handle range slider change
//   const handleRangeChange = (event) => {
//     setPriceRange([event.target.value, 300]);
//   };

//   // Handle Apply button click
//   const handleApplyFilters = () => {
//     console.log("Search:", searchText);
//     console.log("Price Range:", priceRange);
//     console.log("Categories:", selectedCategories);
//     console.log("Breeds:", selectedBreeds);
//     console.log("Gender:", selectedGender);
//     console.log("Location:", selectedLocation);
//   };

//   return (
//     <div className="w-64 bg-white p-4 shadow-lg">
//       {/* Search Bar */}
//       <div className="mb-4">
//         <label className="text-sm font-semibold">Filters</label>
//         <input
//           type="text"
//           placeholder="Type Keywords..."
//           className="w-full p-2 border border-gray-300 rounded mt-2"
//           value={searchText}
//           onChange={(e) => setSearchText(e.target.value)}
//         />
//       </div>

//       {/* Price Range */}
//       <div className="mb-4">
//         <label className="text-sm font-semibold">Price Range</label>
//         <input
//           type="range"
//           min="60"
//           max="300"
//           value={priceRange[0]}
//           onChange={handleRangeChange}
//           className="w-full mt-2"
//         />
//         <div className="flex justify-between text-xs mt-1">
//           <span>${priceRange[0]}</span>
//           <span>$300</span>
//         </div>
//       </div>

//       {/* Pet Categories */}
//       <div className="mb-4">
//         <label className="text-sm font-semibold">Pet Categories</label>
//         <div className="mt-2">
//           {categories.map((category, index) => (
//             <div key={index} className="flex items-center mb-2">
//               <input
//                 type="checkbox"
//                 className="mr-2"
//                 onChange={() =>
//                   handleCheckboxChange(category, selectedCategories, setSelectedCategories)
//                 }
//               />
//               <label>{category}</label>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Breeds */}
//       <div className="mb-4">
//         <label className="text-sm font-semibold">Breeds</label>
//         <div className="mt-2">
//           {breeds.map((breed, index) => (
//             <div key={index} className="flex items-center mb-2">
//               <input
//                 type="checkbox"
//                 className="mr-2"
//                 onChange={() => handleCheckboxChange(breed, selectedBreeds, setSelectedBreeds)}
//               />
//               <label>{breed}</label>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Gender */}
//       <div className="mb-4">
//         <label className="text-sm font-semibold">Gender</label>
//         <div className="mt-2">
//           {genders.map((gender, index) => (
//             <div key={index} className="flex items-center mb-2">
//               <input
//                 type="checkbox"
//                 className="mr-2"
//                 onChange={() => handleCheckboxChange(gender, selectedGender, setSelectedGender)}
//               />
//               <label>{gender}</label>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Location */}
//       <div className="mb-4">
//         <label className="text-sm font-semibold">Location</label>
//         <div className="mt-2">
//           {locations.map((location, index) => (
//             <div key={index} className="flex items-center mb-2">
//               <input
//                 type="radio"
//                 name="location"
//                 className="mr-2"
//                 onChange={() => setSelectedLocation(location)}
//               />
//               <label>{location}</label>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Apply Button */}
//       <button
//         className="w-full bg-purple-600 text-white py-2 rounded mt-4"
//         onClick={handleApplyFilters}
//       >
//         APPLY NOW
//       </button>
//     </div>
//   );
// };

// export default FilterSidebar;






// import React, { useState, useEffect, useRef } from "react";
// import "./PriceRanger.css";

// const FilterSidebar = () => {
//   const [searchText, setSearchText] = useState("");
//   const [selectedCategories, setSelectedCategories] = useState([]);
//   const [selectedBreeds, setSelectedBreeds] = useState([]);
//   const [selectedGender, setSelectedGender] = useState([]);
//   const [selectedLocation, setSelectedLocation] = useState("");

//   const categories = ["Dogs", "Cats", "Rabbit", "Birds", "Fish", "Others"];
//   const breeds = ["Airedale Terrier", "American Eskimo", "Basset Hound", "Bernese Mountain Dog", "Bichon Frise"];
//   const genders = ["Male", "Female"];
//   const locations = ["All", "NewYork City", "Kansas City", "New Jersey"];

//   const minPrice = 10;
//   const maxPrice = 389;
//   const priceStep = 10;

//   const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);
//   const minHandleRef = useRef(null);
//   const maxHandleRef = useRef(null);
//   const sliderBarRef = useRef(null);

//   // Function to update price inputs based on handle positions
//   const updatePriceInputs = () => {
//     const sliderWidth = sliderBarRef.current.offsetWidth;
//     const minHandlePos = parseInt(minHandleRef.current.style.left, 10) || 0;
//     const maxHandlePos = parseInt(maxHandleRef.current.style.left, 10) || sliderWidth - 16;

//     const minValue = Math.round((minHandlePos / (sliderWidth - 16)) * (maxPrice - minPrice) + minPrice);
//     const maxValue = Math.round((maxHandlePos / (sliderWidth - 16)) * (maxPrice - minPrice) + minPrice);

//     setPriceRange([minValue, maxValue]);
//   };

//   // Handle dragging for the min and max handles
//   const handleDrag = (handleRef, isMinHandle) => (event) => {
//     const sliderRect = sliderBarRef.current.getBoundingClientRect();
//     const sliderWidth = sliderBarRef.current.offsetWidth;

//     const moveHandle = (moveEvent) => {
//       const mouseX = moveEvent.clientX - sliderRect.left;
//       let newPosition = Math.max(0, Math.min(mouseX, sliderWidth - 16));

//       if (isMinHandle) {
//         const maxHandlePos = parseInt(maxHandleRef.current.style.left, 10) || sliderWidth - 16;
//         newPosition = Math.min(newPosition, maxHandlePos - 16);
//       } else {
  //         const minHandlePos = parseInt(minHandleRef.current.style.left, 10) || 0;
  //         newPosition = Math.max(minHandlePos + 16, newPosition);
  //       }
  
  //       handleRef.current.style.left = newPosition + "px";
  //       updatePriceInputs();
  //     };
  
  //     const stopDrag = () => {
//       document.removeEventListener("mousemove", moveHandle);
//       document.removeEventListener("mouseup", stopDrag);
//     };

//     document.addEventListener("mousemove", moveHandle);
//     document.addEventListener("mouseup", stopDrag);
//   };

//   useEffect(() => {
//     minHandleRef.current.style.left = "0px";
//     maxHandleRef.current.style.left = `${sliderBarRef.current.offsetWidth - 16}px`;
//     updatePriceInputs();
//   }, []);







//     // Handle checkbox changes
//     const handleCheckboxChange = (value, state, setState) => {
//       if (state.includes(value)) {
  //         setState(state.filter((item) => item !== value));
//       } else {
  //         setState([...state, value]);
  //       }
  //     };
  
  
  
  //     // Handle Apply button click
  //     const handleApplyFilters = () => {
//       console.log("Search:", searchText);
//       console.log("Price Range:", priceRange);
//       console.log("Categories:", selectedCategories);
//       console.log("Breeds:", selectedBreeds);
//       console.log("Gender:", selectedGender);
//       console.log("Location:", selectedLocation);
//     };

//   return (
//     <section className="w-64 bg-white p-4 shadow-lg">
//       <div className="mb-4">
//         <label className="text-sm font-semibold">Filters</label>
//         <input
//           type="text"
//           placeholder="Type Keywords..."
//           className="w-full p-2 border border-gray-300 rounded mt-2"
//           value={searchText}
//           onChange={(e) => setSearchText(e.target.value)}
//         />
//       </div>
//       <div className="filter-sidebar">
//         {/* Price Range */}
//         <div className="price-range-container">
//           <h1 className="price-range-title">Price Range</h1>
//           <div className="range-slider">
//             <div className="range-slider-bar" id="sliderBar" ref={sliderBarRef}>
//               <div
//                 className="range-handle range-handle-left"
//                 id="minHandle"
//                 ref={minHandleRef}
//                 onMouseDown={handleDrag(minHandleRef, true)}
//               ></div>
//               <div
//                 className="range-handle range-handle-right"
//                 id="maxHandle"
//                 ref={maxHandleRef}
//                 onMouseDown={handleDrag(maxHandleRef, false)}
//               ></div>
//             </div>
//           </div>
//           <div className="range-inputs">
//             <input type="text" value={`$ ${priceRange[0].toLocaleString()}`} readOnly />
//             <span>-</span>
//             <input type="text" value={`$ ${priceRange[1].toLocaleString()}`} readOnly />
//           </div>
//         </div>
//       </div>
//       {/* Pet Categories */}
//       <div className="mb-4">
//         <label className="text-sm font-semibold">Pet Categories</label>
//         <div className="mt-2">
//           {categories.map((category, index) => (
//             <div key={index} className="flex items-center mb-2">
//               <input
//                 type="checkbox"
//                 className="mr-2"
//                 onChange={() =>
  //                   handleCheckboxChange(category, selectedCategories, setSelectedCategories)
//                 }
//               />
//               <label>{category}</label>
//             </div>
//           ))}
//         </div>
//       </div>
//       {/* Breeds */}
//       <div className="mb-4">
//         <label className="text-sm font-semibold">Breeds</label>
//         <div className="mt-2">
//           {breeds.map((breed, index) => (
//             <div key={index} className="flex items-center mb-2">
//               <input
//                 type="checkbox"
//                 className="mr-2"
//                 onChange={() => handleCheckboxChange(breed, selectedBreeds, setSelectedBreeds)}
//               />
//               <label>{breed}</label>
//             </div>
//           ))}
//         </div>
//       </div>
//       {/* Gender */}
//       <div className="mb-4">
//         <label className="text-sm font-semibold">Gender</label>
//         <div className="mt-2">
//           {genders.map((gender, index) => (
//             <div key={index} className="flex items-center mb-2">
//               <input
//                 type="checkbox"
//                 className="mr-2"
//                 onChange={() => handleCheckboxChange(gender, selectedGender, setSelectedGender)}
//               />
//               <label>{gender}</label>
//             </div>
//           ))}
//         </div>
//       </div>
//       {/* Location */}
//       <div className="mb-4">
//         <label className="text-sm font-semibold">Location</label>
//         <div className="mt-2">
//           {locations.map((location, index) => (
//             <div key={index} className="flex items-center mb-2">
//               <input
//                 type="radio"
//                 name="location"
//                 className="mr-2"
//                 onChange={() => setSelectedLocation(location)}
//               />
//               <label>{location}</label>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Apply Button */}
//       <button
//         className="w-full bg-purple-600 text-white py-2 rounded mt-4"
//         onClick={handleApplyFilters}
//       >
//         APPLY NOW
//       </button>

//     </section>


//   );
// };

// export default FilterSidebar;




import  { useState, useEffect, useRef } from "react";
import "./PriceRanger.css";

const FilterSidebar = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBreeds, setSelectedBreeds] = useState([]);
  const [selectedGender, setSelectedGender] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");

  const categories = ["Dogs", "Cats", "Rabbit", "Birds", "Fish", "Others"];
  const breeds = ["Airedale Terrier", "American Eskimo", "Basset Hound", "Bernese Mountain Dog", "Bichon Frise"];
  const genders = ["Male", "Female"];
  const locations = ["All", "NewYork City", "Kansas City", "New Jersey"];

  const minPrice = 10;
  const maxPrice = 389;

  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);
  const minHandleRef = useRef(null);
  const maxHandleRef = useRef(null);
  const sliderBarRef = useRef(null);

  const [isOutOfBounds, setIsOutOfBounds] = useState(false);

  // Function to update price inputs based on handle positions
  const updatePriceInputs = () => {
    const sliderWidth = sliderBarRef.current.offsetWidth;
    const minHandlePos = parseInt(minHandleRef.current.style.left, 10) || 0;
    const maxHandlePos = parseInt(maxHandleRef.current.style.left, 10) || sliderWidth - 16;

    const minValue = Math.round((minHandlePos / (sliderWidth - 16)) * (maxPrice - minPrice) + minPrice);
    const maxValue = Math.round((maxHandlePos / (sliderWidth - 16)) * (maxPrice - minPrice) + minPrice);

    setPriceRange([minValue, maxValue]);

    // Check if price range is out of bounds
    setIsOutOfBounds(minValue < minPrice || maxValue > maxPrice);
  };

  // Handle dragging for the min and max handles
  const handleDrag = (handleRef, isMinHandle) => () => {
    const sliderRect = sliderBarRef.current.getBoundingClientRect();
    const sliderWidth = sliderBarRef.current.offsetWidth;

    const moveHandle = (moveEvent) => {
      const mouseX = moveEvent.clientX - sliderRect.left;
      let newPosition = Math.max(0, Math.min(mouseX, sliderWidth - 16));

      if (isMinHandle) {
        const maxHandlePos = parseInt(maxHandleRef.current.style.left, 10) || sliderWidth - 16;
        newPosition = Math.min(newPosition, maxHandlePos - 16);
      } else {
        const minHandlePos = parseInt(minHandleRef.current.style.left, 10) || 0;
        newPosition = Math.max(minHandlePos + 16, newPosition);
      }

      handleRef.current.style.left = newPosition + "px";
      updatePriceInputs();
    };

    const stopDrag = () => {
      document.removeEventListener("mousemove", moveHandle);
      document.removeEventListener("mouseup", stopDrag);
    };

    document.addEventListener("mousemove", moveHandle);
    document.addEventListener("mouseup", stopDrag);
  };

  useEffect(() => {
    minHandleRef.current.style.left = "0px";
    maxHandleRef.current.style.left = `${sliderBarRef.current.offsetWidth - 16}px`;
    updatePriceInputs();
  }, []);

  // Handle checkbox changes
  const handleCheckboxChange = (value, state, setState) => {
    if (state.includes(value)) {
      setState(state.filter((item) => item !== value));
    } else {
      setState([...state, value]);
    }
  };

  // Handle Apply button click
  const handleApplyFilters = () => {
    console.log("Search:", searchText);
    console.log("Price Range:", priceRange);
    console.log("Categories:", selectedCategories);
    console.log("Breeds:", selectedBreeds);
    console.log("Gender:", selectedGender);
    console.log("Location:", selectedLocation);
  };
  return (
    <section className="w-64 bg-white p-4 shadow-lg">
      <div className="mb-4">
        <label className="text-sm font-semibold">Filters</label>
        <input
          type="text"
          placeholder="Type Keywords..."
          className="w-full p-2 border border-gray-300 rounded mt-2"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div className="filter-sidebar">
        {/* Price Range */}
        <div className="price-range-container">
        <h1 className="price-range-title">Price Range</h1>
        <div
          className={`range-slider-bar ${isOutOfBounds ? "bg-gray-400" : ""}`}
          ref={sliderBarRef}
        >
          <div
            className="range-handle range-handle-left"
            ref={minHandleRef}
            onMouseDown={handleDrag(minHandleRef, true)}
          ></div>
          <div
            className="range-handle range-handle-right"
            ref={maxHandleRef}
            onMouseDown={handleDrag(maxHandleRef, false)}
          ></div>
        </div>
        <div className="range-inputs">
          <input type="text" value={`$ ${priceRange[0].toLocaleString()}`} readOnly />
          <span>-</span>
          <input type="text" value={`$ ${priceRange[1].toLocaleString()}`} readOnly />
        </div>
      </div>

      </div>
      {/* Pet Categories */}
      <div className="mb-4">
        <label className="text-sm font-semibold">Pet Categories</label>
        <div className="mt-2">
          {categories.map((category, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="checkbox"
                className="mr-2"
                onChange={() =>
                  handleCheckboxChange(category, selectedCategories, setSelectedCategories)
                }
              />
              <label>{category}</label>
            </div>
          ))}
        </div>
      </div>
      {/* Breeds */}
      <div className="mb-4">
        <label className="text-sm font-semibold">Breeds</label>
        <div className="mt-2">
          {breeds.map((breed, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="checkbox"
                className="mr-2"
                onChange={() => handleCheckboxChange(breed, selectedBreeds, setSelectedBreeds)}
              />
              <label>{breed}</label>
            </div>
          ))}
        </div>
      </div>
      {/* Gender */}
      <div className="mb-4">
        <label className="text-sm font-semibold">Gender</label>
        <div className="mt-2">
          {genders.map((gender, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="checkbox"
                className="mr-2"
                onChange={() => handleCheckboxChange(gender, selectedGender, setSelectedGender)}
              />
              <label>{gender}</label>
            </div>
          ))}
        </div>
      </div>
      {/* Location */}
      <div className="mb-4">
        <label className="text-sm font-semibold">Location</label>
        <div className="mt-2">
          {locations.map((location, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="radio"
                name="location"
                className="mr-2"
                onChange={() => setSelectedLocation(location)}
              />
              <label>{location}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Apply Button */}
      <button
        className="w-full bg-purple-600 text-white py-2 rounded mt-4"
        onClick={handleApplyFilters}
      >
        APPLY NOW
      </button>

    </section>


  );
};

export default FilterSidebar;
