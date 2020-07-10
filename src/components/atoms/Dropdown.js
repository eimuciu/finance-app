import React from "react";
import styled from "styled-components";

const Dropdown = ({
  onDropDown,
  onRemove,
  onEdit,
  onSave,
  isEdit,
  isDropDownOpen
}) => (
  <Div className="dropdown">
    <button style={{ cursor: "pointer" }} onClick={onDropDown}>
      #
    </button>
    <Div isDropDownOpen={isDropDownOpen} className="dropdown-content">
      <a href onClick={onRemove}>
        Remove
      </a>
      <a href onClick={onEdit}>
        Edit
      </a>
      <a
        href
        onClick={onSave}
        style={{
          display: isEdit ? "block" : "none",
          backgroundColor: "#44c767"
        }}
      >
        Save
      </a>
    </Div>
  </Div>
);

const Div = styled.div.attrs(() => ({}))`
  cursor: pointer;

  /* The container <div> - needed to position the dropdown content */
  &.dropdown {
    position: relative;
    display: inline-block;
  }

  /* Dropdown Content (Hidden by Default) */
  &.dropdown-content {
    display: ${props => (props.isDropDownOpen ? "block" : "none")};
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    bottom: 21px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  /* Links inside the dropdown */
  &.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  /* Change color of dropdown links on hover */
  &.dropdown-content a:hover {
    background-color: #ddd;
  }
`;

export default Dropdown;
