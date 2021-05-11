import EditOperationScreen from "../screens/EditOperation/EditOperationScreen";
import HomeScreen from "../screens/Home/HomeScreen";
import OperationsScreen from "../screens/Operations/OperationsScreen";

const routes = [
  { path: "/", Component: HomeScreen },
  { path: "/operations", Component: OperationsScreen },
  { path: "/edit-operation/:id", Component: EditOperationScreen },
];

export default routes;