import EditOperationScreen from "../screens/EditOperation/EditOperationScreen";
import HomeScreen from "../screens/Home/HomeScreen";
import OperationsScreen from "../screens/Operations/OperationsScreen";
import CreateOperationScreen from "../screens/CreateOperation/CreateOperationScreen";

const routes = [
  { path: "/", Component: HomeScreen },
  { path: "/operations", Component: OperationsScreen },
  { path: "/edit-operation/:id", Component: EditOperationScreen },
  { path: "/create-operation", Component: CreateOperationScreen },
];

export default routes;