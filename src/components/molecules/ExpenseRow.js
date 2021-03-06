import React from "react";
import Dropdown from "../atoms/Dropdown";
import Input from "../atoms/Input";
import commonData from "../../commonData.json";
import Select from "../atoms/Select";
import useRowLogic from "../customHooks/useRowLogic";

const ExpenseRow = ({ item, removeExpense, saveExpense }) => {
  const {
    input,
    isEdit,
    isDropDownOpen,
    setIsEdit,
    setIsDropDownOpen,
    inputHandler,
    toFixedNumber
  } = useRowLogic(item);

  return (
    <tr>
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
        <td>€ {toFixedNumber(input.amount)}</td>
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
