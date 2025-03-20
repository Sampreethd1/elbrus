<template>

<div v-if="chatStore.activeFile" class="chat-box">
    <h3>Chat for {{ chatStore.activeFile .name}}</h3>
    <input type="text" v-model="message" placeholder="Type a message. . .">
    <button @click="sendMessage">Send</button>
</div>
</template>

<script setup>
import { ref } from "vue";
import { useChatStore } from "@/src/store/useChatStore";

const chatStore = useChatStore();
const message = ref("");

const sendMessage = () => {
    if(message.value.trim()) {
        chatStore.addMessage(message.value);
        message.value = "";
    }
};
</script>