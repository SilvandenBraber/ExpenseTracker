import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";

function AllExpenses(props) {
  const expensesCtx = useContext(ExpensesContext);
  return (
    <ExpensesOutput
      expenses={expensesCtx.expenses}
      expensesPeriod={"Total"}
      fallbackText="No registered expenses found."
    />
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AllExpenses;
