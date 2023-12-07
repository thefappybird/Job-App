import { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { COLORS, icons, images, SIZES } from "../../constants";
import {
  Nearbyjobs,
  Popularjobs,
  Welcome,
} from "../../components";
import { useRouter } from "expo-router";
export default function TabOneScreen() {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={()=>{
              if (searchTerm) {
                router.push(`/search/${searchTerm}`)
              }
            }}
          />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: SIZES.medium,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    backgroundColor: "black",
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
