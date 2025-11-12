import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Modal, Pressable, View } from 'react-native';
import React, { useState } from "react";



  export default function App() {
  const [modalNew, setModalNew] = useState(false);

return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Pressable onPress={() => setModalNew(true)}>
        <Text style={styles.messageText}>Show modal message</Text>
      </Pressable>
      <Modal
        animationType="none"
        transparent={true}
        visible={modalNew}
        onRequestClose={() => setModalNew(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>This is the modal...</Text>
            <Pressable
              style={styles.closeButton}
              onPress={() => setModalNew(false)}
            >
              <Text style={styles.closeText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
  },
  messageText: {
    fontSize: 18,
    color: "#000808ff",
    fontWeight: "600",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    padding: 30,
    alignItems: "center",
    elevation: 5,
    width: "80%",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
  closeButton: {
    backgroundColor: "#f1f4f7ff",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  closeText: {
    color: "black",
    fontWeight: "600",
  },
});
