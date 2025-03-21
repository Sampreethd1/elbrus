<template>
  <div class="flex items-center justify-start w-full space-x-2">
    <VInput
      data-test="Input"
      value=""
      v-model="newMessage"
      placeholder="Type a message. . ."
      v-on:leftinputiconclick="() => ({})"
      v-on:rightinputiconclick="() => ({})"
      style="width: 70%"
    />
    <VButton
      item-id="storybook-button"
      variant="primary"
      v-on:click="sendMessage()"
      v-on:mouseenter="sendMessage()"
      class="w-22 inline-flex items-center justify-center rounded-md text-sm font-medium text-[#f9fafb] disabled:pointer-events-none disabled:opacity-50 bg-black hover:bg-[#111827E6] h-10 px-4 py-2"
    >
      <template #default>Send</template>
    </VButton>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { ref, watch } from "vue";

import { useChatStore } from "@/store/useChatStore";
import { VInput, VButton } from "@oneport/core-ui";

const chatStore = useChatStore();
const { getMessage } = storeToRefs(useChatStore());
const newMessage = ref("");

const sendMessage = async () => {
  console.log("send button");
  if (newMessage.value.trim()) {
    await chatStore.addMessage(newMessage.value);
    newMessage.value = "";
  }
};
</script>
