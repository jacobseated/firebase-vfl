<template>
  <div id="app">
    <h1>Firebase CRUD Example</h1>
    <v-btn @click="createUser" color="green" variant="tonal" height="48">Create User</v-btn>
    <v-btn @click="readUser" color="green" variant="tonal" height="48">Read User</v-btn>
    <v-btn @click="updateUser" color="green" variant="tonal" height="48">Update User</v-btn>
    <v-btn @click="deleteUser" color="green" variant="tonal" height="48">Delete User</v-btn>
  </div>
</template>

<script>
import { createDocument, readDocument, updateDocument, deleteDocument } from "./firebase";

export default {
  name: "App",
  methods: {
    async createUser() {
      const userData = { name: "John Doe", email: "john@example.com" };
      await createDocument("users", "user1", userData);
    },
    async readUser() {
      const user = await readDocument("users", "user1");
      console.log(user);
    },
    async updateUser() {
      await updateDocument("users", "user1", { email: "john.doe@example.com" });
    },
    async deleteUser() {
      await deleteDocument("users", "user1");
    },
  },
};
</script>