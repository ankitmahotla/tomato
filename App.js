import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import OrderList from "./components/OrderList/OrderList";
import Navbar from "./components/Navbar/Navbar";
import { OrderProvider } from "./context/OrderContext";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <OrderProvider>
        <Navbar />
        <OrderList />
      </OrderProvider>
      <StatusBar hidden={true} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
