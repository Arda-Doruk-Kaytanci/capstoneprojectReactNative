import React from "react";
import {
  ScrollView,
  Text,
  View,
  TextInput,
  Image,
  Pressable,
  StyleSheet,
  FlatList,
} from "react-native";
import { styles } from "./Onboarding";
export default function Homepage() {
  const [category, setCategory] = React.useState("Starters");
  const CATEGORIES_DATA = {
    Starters: [
      {
        id: "1",
        name: "Bruschetta",
        desc: "Grilled bread with tomatoes",
        price: "$5.99",
      },
      {
        id: "2",
        name: "Stuffed Grape Leaves",
        desc: "Delicious grape leaves stuffed with rice",
        price: "$6.99",
      },
      {
        id: "3",
        name: "Hummus",
        desc: "Creamy chickpea dip with olive oil",
        price: "$4.99",
      },
      {
        id: "4",
        name: "Falafel",
        desc: "Crispy chickpea fritters",
        price: "$5.99",
      },
      {
        id: "5",
        name: "Caprese Salad",
        desc: "Tomatoes, mozzarella, and basil",
        price: "$6.99",
      },
      {
        id: "6",
        name: "Stuffed Mushrooms",
        desc: "Mushrooms filled with cheese and herbs",
        price: "$6.49",
      },
    ],
    Mains: [
      {
        id: "7",
        name: "Grilled Salmon",
        desc: "Freshly grilled salmon with lemon butter sauce",
        price: "$14.99",
      },
      {
        id: "8",
        name: "Lamb Chops",
        desc: "Tender lamb chops with rosemary",
        price: "$18.99",
      },
      {
        id: "9",
        name: "Chicken Alfredo",
        desc: "Creamy pasta with grilled chicken",
        price: "$13.99",
      },
      {
        id: "10",
        name: "Beef Kabob",
        desc: "Grilled beef skewers with vegetables",
        price: "$16.99",
      },
      {
        id: "11",
        name: "Vegetarian Lasagna",
        desc: "Layers of pasta with vegetables and cheese",
        price: "$12.99",
      },
      {
        id: "12",
        name: "Eggplant Parmesan",
        desc: "Breaded eggplant with marinara sauce",
        price: "$11.99",
      },
    ],
    Desserts: [
      {
        id: "13",
        name: "Baklava",
        desc: "Traditional layered pastry with nuts and honey",
        price: "$4.99",
      },
      {
        id: "14",
        name: "Tiramisu",
        desc: "Classic Italian dessert",
        price: "$5.99",
      },
      {
        id: "15",
        name: "Chocolate Lava Cake",
        desc: "Warm cake with a gooey chocolate center",
        price: "$6.99",
      },
      {
        id: "16",
        name: "Cheesecake",
        desc: "Rich and creamy cheesecake",
        price: "$5.99",
      },
      {
        id: "17",
        name: "Gelato",
        desc: "Italian-style ice cream",
        price: "$4.49",
      },
      {
        id: "18",
        name: "Apple Pie",
        desc: "Classic apple pie with a flaky crust",
        price: "$4.99",
      },
    ],
    Drinks: [
      {
        id: "19",
        name: "Lemonade",
        desc: "Refreshing lemonade made with fresh lemons",
        price: "$2.99",
      },
      {
        id: "20",
        name: "Iced Tea",
        desc: "Chilled tea served with ice",
        price: "$2.99",
      },
      {
        id: "21",
        name: "Espresso",
        desc: "Rich and bold espresso",
        price: "$3.49",
      },
      {
        id: "22",
        name: "Cappuccino",
        desc: "Espresso with steamed milk foam",
        price: "$4.49",
      },
      {
        id: "23",
        name: "Smoothie",
        desc: "Fresh fruit blended into a smoothie",
        price: "$5.99",
      },
      {
        id: "24",
        name: "Sparkling Water",
        desc: "Bubbly and refreshing",
        price: "$1.99",
      },
    ],
  };

  const renderItem = ({ item }) => (
    <ScrollView>
      <Text>{item.name}</Text>
      <Text>{item.desc}</Text>
      <Text>{item.price}</Text>
    </ScrollView>
  );

  return (
    <ScrollView>
      <ScrollView>
        <Text>Little Lemon</Text>
        <Text>Chicago</Text>
        <Text>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes with a modern twist
        </Text>
        <Image source={require("../img/littlelemon.png")}></Image>
      </ScrollView>
      <Text>Order For Delivery</Text>
      <View style={{flexDirection: "row"}}>
        {["Starters", "Mains", "Desserts", "Drinks"].map((cat) => (
          <Pressable
            key={cat}
            style={[styles.button, category === cat && styles.activeButton]}
            onPress={() => setCategory(cat)}
          >
            <Text>{cat}</Text>
          </Pressable>
        ))}
      </View>
      <FlatList
        data={CATEGORIES_DATA[category]}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
  );
}
