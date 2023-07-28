import { View, Text, ScrollView, FlatList } from "react-native";
import OrderCard from "../OrderCard/OrderCard";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { useContext, useState } from "react";
import {
  Modal,
  Portal,
  Button,
  PaperProvider,
  TextInput,
} from "react-native-paper";
import { OrderContext } from "../../context/OrderContext";

export default function OrderList() {
  const [visible, setVisible] = useState(false);
  const { orders, addOrder } = useContext(OrderContext);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: "white",
    padding: 20,
    paddingVertical: 30,
    position: "absolute",
    top: 50,
    width: "100%",
  };
  const [data, setData] = useState({
    id: uuidv4(),
    name: "",
    dishes: "",
    mobile: "",
    status: false,
    tableId: null,
  });
  const [flag, setFlag] = useState(false);
  return (
    <PaperProvider>
      <View style={{ flex: 1, padding: 10 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: 600 }}>Order List:</Text>
          <Button onPress={showModal}>Add New</Button>
        </View>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}
          >
            <ScrollView keyboardShouldPersistTaps="handled">
              <View>
                <Text
                  style={{ marginBottom: 20, fontSize: 18, fontWeight: 400 }}
                >
                  Create a New Order:
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <TextInput
                    underlineColorAndroid="transparent"
                    placeholder="Name"
                    style={{
                      backgroundColor: "transparent",
                      width: "45%",
                      height: 20,
                      borderWidth: 1,
                      padding: 10,
                    }}
                    value={data.name}
                    onChangeText={(text) => setData({ ...data, name: text })}
                  />
                  <TextInput
                    underlineColorAndroid="transparent"
                    placeholder="Mobile"
                    style={{
                      backgroundColor: "transparent",
                      width: "45%",
                      height: 20,
                      borderWidth: 1,
                      padding: 10,
                    }}
                    value={data.mobile}
                    onChangeText={(text) => setData({ ...data, mobile: text })}
                  />
                </View>
                <TextInput
                  placeholder="Table ID"
                  style={{
                    backgroundColor: "transparent",
                    width: "100%",
                    height: 20,
                    marginTop: 10,
                    borderWidth: 1,
                    padding: 10,
                  }}
                  value={data.tableId}
                  onChangeText={(text) => setData({ ...data, tableId: text })}
                />
                <TextInput
                  placeholder="Dishes"
                  style={{
                    backgroundColor: "transparent",
                    width: "100%",
                    height: 20,
                    marginTop: 10,
                    borderWidth: 1,
                    padding: 10,
                    marginBottom: 15,
                  }}
                  value={data.dishes}
                  onChangeText={(text) => setData({ ...data, dishes: text })}
                />
                <Button
                  mode="contained"
                  onPress={() => {
                    console.log(JSON.stringify(data));
                    addOrder(data);
                    hideModal();
                    setData({
                      id: uuidv4(),
                      name: "",
                      dishes: "",
                      mobile: "",
                      status: false,
                      tableId: null,
                    });
                  }}
                >
                  Submit
                </Button>
              </View>
            </ScrollView>
          </Modal>
        </Portal>
        <View style={{ paddingVertical: 10 }}>
          <FlatList
            data={orders}
            renderItem={({ item }) => <OrderCard item={item} />}
            keyExtractor={(item) => item.id.toString()} // Convert id to string as keyExtractor expects a string
          />
        </View>
      </View>
    </PaperProvider>
  );
}
