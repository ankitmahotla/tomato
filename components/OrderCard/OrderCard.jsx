import { useContext, useState } from "react";
import { View, Text } from "react-native";
import { Button, Card, Checkbox, IconButton } from "react-native-paper";
import { OrderContext } from "../../context/OrderContext";

export default function OrderCard({ item }) {
  const { removeOrder } = useContext(OrderContext);
  const [checked, setChecked] = useState(item.status);
  return (
    <Card
      style={{
        backgroundColor: checked ? "#e6ffe6" : "#ffe6e6",
        marginVertical: 6,
        marginHorizontal: 2,
        position: "relative",
      }}
    >
      {/* <IconButton
        style={{
          alignContent: "right",
          position: "absolute",
          right: 10,
          top: -5,
        }}
        icon="delete"
        iconColor="red"
        size={20}
        onPressIn={() => removeOrder(item.id)}
        disabled={checked}
      /> */}
      {/* <Button
        style={{
          alignContent: "right",
          position: "absolute",
          right: 10,
          top: -5,
        }}
        disabled={checked}
        mode="contained"
        onPressIn={() => removeOrder(item.id)}
      >
        Delete
      </Button> */}
      <Card.Title title={`Table ID #${item.tableId}`} />
      <Card.Content
        style={{
          flexDirection: "row",
          marginTop: -15,
          marginBottom: 10,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 14 }}>{item.dishes}</Text>
        <Checkbox
          status={checked ? "checked" : "unchecked"}
          onPress={() => {
            setChecked(!checked);
          }}
        />
      </Card.Content>
      {!checked && <Button onPress={() => removeOrder(item.id)}>Delete</Button>}
    </Card>
  );
}
