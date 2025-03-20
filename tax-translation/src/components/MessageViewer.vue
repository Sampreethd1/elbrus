<template>

    <div v-if="chatStore.messages.length">
        <h3 class="text-lg font-bold">Chat Messages</h3>
        <p v-for="(msg, index) in chatStore.messages" :key="index">{{ msg }}</p>
    </div>
    </template>
    
    <script setup>
    import { useChatStore } from "@/store/useChatStore";
    
    const chatStore = useChatStore();
    </script>