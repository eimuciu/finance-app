import React, { useState, useEffect } from "react";
import Dropdown from "../atoms/Dropdown";
import Input from "../atoms/Input";
import commonData from "../../commonData.json";
import Select from "../atoms/Select";

const ExpenseRow = ({ item, removeExpense, saveExpense }) => {
  const [input, setInput] = useState({ ...item });
  const [isEdit, setIsEdit] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  useEffect(() => {
    setInput({ ...item });
  }, [item]);

  function inputHandler(event) {
    setInput({
      ...input,
      [event.target.name]: event.target.value
    });
  }

  function toFixedNumber() {
    let a = parseFloat(input.amount);
    return a.toFixed(2);
  }

  return (
    <tr key={item.id}>
      {isEdit ? (
        <td>
          <Input
            type="date"
            name="date"
            value={input.date}
            onInput={event => inputHandler(event)}
          />
        </td>
      ) : (
        <td>{input.date}</td>
      )}

      {isEdit ? (
        <td>
          <Select
            name="category"
            type="text"
            value={input.category}
            onInput={event => inputHandler(event)}
          >
            text=
            {commonData.expenseCategory.map(item => (
              <option value={item}> {item} </option>
            ))}
          </Select>
        </td>
      ) : (
        <td>{input.category}</td>
      )}

      {isEdit ? (
        <td>
          <Input
            name="amount"
            type="number"
            value={input.amount}
            onInput={event => inputHandler(event)}
          />
        </td>
      ) : (
        <td>€ {toFixedNumber()}</td>
      )}

      {isEdit ? (
        <td>
          <Input
            type="text"
            name="description"
            value={input.description}
            onInput={event => inputHandler(event)}
          />
        </td>
      ) : (
        <td>{input.description}</td>
      )}

      <td>
        <Dropdown
          isDropDownOpen={isDropDownOpen}
          isEdit={isEdit}
          onDropDown={() => setIsDropDownOpen(true)}
          onEdit={() => setIsEdit(true)}
          onRemove={() => removeExpense(item)}
          onSave={() => {
            saveExpense(input);
            setIsEdit(false);
            setIsDropDownOpen(false);
          }}
        />
      </td>
    </tr>
  );
};

export default ExpenseRow;
