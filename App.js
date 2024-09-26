import { StatusBar } from "expo-status-bar";
import AppNavigator from "./navigation/AppNavigation";
import ExpensesContextProvider from "./store/expenses-context";

export default function App() {
  return (
    <ExpensesContextProvider>
      <StatusBar style="light" />
      <AppNavigator />
    </ExpensesContextProvider>
  );
}
