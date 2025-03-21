<template>
  <div class="px-4">
    <MessageViewer v-if="getMessage && getMessage.length" />
    <ChatWindow />
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import ChatWindow from "@/components/ChatWindow.vue";
import MessageViewer from "@/components/MessageViewer.vue";
import { useChatStore } from "@/store/useChatStore";
import { watch } from "vue";

const chatStore = useChatStore();
const { getMessage } = storeToRefs(chatStore);
</script>
