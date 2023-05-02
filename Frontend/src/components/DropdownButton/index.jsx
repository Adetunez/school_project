import { useState } from "react";
import "./Styles.scss";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

function DropdownButton({ onClick, children }) {
  return (
    <button className="dropdown-button" onClick={onClick}>
      {children}
    </button>
  );
}

function DropdownMenu({ isOpen, children }) {
  return (
    <div className={`dropdown-menu ${isOpen ? "open" : "closed"}`}>
      {children}
    </div>
  );
}

function DropdownMenuItem({ onClick, children }) {
  return (
    <button className="dropdown-menu-item" onClick={onClick}>
      {children}
    </button>
  );
}

export default function Dropdown({ options, onSelect, ID }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = (option, id) => {
    onSelect({ ...option, id });
    setIsOpen(false);
  };

  return (
    <div className="dropdownbtn-container">
      <DropdownButton onClick={handleButtonClick}>
        Action{" "}
        {isOpen ? <MdArrowDropDown size={20} /> : <MdArrowDropUp size={20} />}
      </DropdownButton>
      <DropdownMenu isOpen={isOpen}>
        {options.map((option) => (
          <DropdownMenuItem
            key={option.id}
            onClick={() => handleMenuItemClick(option, ID)}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenu>
    </div>
  );
}

// export default function App() {
//   const options = [
//     { id: 1, label: "Option 1" },
//     { id: 2, label: "Option 2" },
//     { id: 3, label: "Option 3" },
//   ];

//   const handleSelect = (option) => {
//     console.log(option.label);
//   };

//   return (
//     <div className="App">
//       <Dropdown options={options} onSelect={handleSelect} />
//     </div>
//   );
// }
