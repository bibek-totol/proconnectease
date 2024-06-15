import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

// npx expo install react-native-webview

export default function Chatbot() {
  return (
    <WebView
      style={styles.container}
      source={{ uri: "https://mediafiles.botpress.cloud/96d614c1-dffb-463b-a258-24d76bab532d/webchat/bot.html" }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 64,
  },
});