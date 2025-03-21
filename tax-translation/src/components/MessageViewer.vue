<template>
  <div class="msgContainer">
    <VCard>
      <template #default>
        <div
          class="flex gap-3xs items-center chat-grid border-border-disabled border-t-none md:border-t"
        >
          <div
            class="flex items-center justify-between md:py-md py-sm px-md w-full"
          >
            <h3
              class="flex text-text-default mt-0 text-heading-3 justify-between"
            >
              One Port AI Assistant
            </h3>
            <div class="flex gap-xs items-center" @click="closeChatPanel">
              X
            </div>
          </div>
        </div>
        <div class="text-text-secondary">
         
          <div
            v-for="(msg, index) in getMessage"
            :key="index"
            class="flex flex-col"
          >
            <div class="bg-background-accent-brand-blue-200 bg-blue flex justify-start p-3">
              <b>{{ msg.question }}</b>
            </div>
            <div class="flex">
              <div class="pt-1"><img src="../assets/logo.svg"  class="w-19"/></div>
              <div>{{ msg.answer.response || "No Response" }}</div>
            </div>
          </div>
        </div>
      </template>
    </VCard>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useChatStore } from "@/store/useChatStore";
import { watch, onMounted } from "vue";
import { VCard } from "@oneport/core-ui";

const { getMessage } = storeToRefs(useChatStore());

const closeChatPanel = () => {
  openChatPanel.value = false;
  isChatOpen.value = false;
};
</script>
<style scoped>
.text-line {
  height: 20px;
  background-color: #ccc;
  margin-bottom: 10px;
  width: 80%;
}
.msgContainer {
  min-height: 80vh;
}
</style>
