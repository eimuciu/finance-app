import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import StyledInput from "../atoms/Input";
import StyledSelect from "../atoms/Select";
import Button from "../atoms/Button";
import commonData from "../../commonData.json";

const validateExpense = values => {
  const errors = {};
  if (!values.date) {
    errors.date = "Required";
  }

  if (!values.category) {
    errors.category = "Required";
  }

  if (!values.amount) {
    errors.amount = "Required";
  } else if (values.amount < 0) {
    errors.amount = ">0 only";
  }

  if (!values.description) {
    errors.description = "Required";
  }

  return errors;
};

const ExpenseForm = ({ addExpense }) => {
  function currentDate() {
    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      "0" +
      (today.getMonth() + 1) +
      "-" +
      "0" +
      today.getDate();
    return date;
  }

  return (
    <Formik
      initialValues={{
        date: currentDate(),
        category: "Food",
        description: "",
        amount: ""
      }}
      validate={validateExpense}
      onSubmit={(values, { resetForm }) => {
        addExpense(values);
        resetForm();
      }}
    >
      <Form>
        <Field name="date" type="date" as={StyledInput} />
        <ErrorMessage name="date" />
        <Field name="category" as={StyledSelect}>
          {commonData.expenseCategory.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </Field>
        <ErrorMessage name="category" />
        <Field
          name="amount"
          type="number"
          placeholder="0.00"
          as={StyledInput}
        />
        <ErrorMessage name="amount" />
        <Field
          name="description"
          type="text"
          placeholder="Note"
          as={StyledInput}
        />
        <ErrorMessage name="description" />
        <Button type="submit" text="Add" />
      </Form>
    </Formik>
  );
};

export default ExpenseForm;
