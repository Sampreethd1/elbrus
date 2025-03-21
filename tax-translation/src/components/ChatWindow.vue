<template>
  <div class="flex items-center justify-start w-full space-x-2">
    <div class="fixed -bottom-2 right-0" @click="toggleOpen">
      <img src="../assets/floatingOpen.svg" v-if="!isChatOpen" /><img
        src="../assets/floatingClose.svg"
        v-if="isChatOpen"
      />
    </div>
    <transition name="slide">
      <div
        class="window-container fixed bottom-12 right-4 fixed shadow-xl border-l border-solid border-border-disabled bg-background-primary justify-between w-105 overflow-y-auto"
      >
        <div class="grid main-wrapper">
          <div v-if="isChatOpen">
            <div
              class="modal-header flex items-center pl-6 pr-6 greeting-container"
            >
              <div class="greeting-text">
                Hi, Laura! <span class="emoji">👋</span><br />
                How can we help you today?
              </div>
            </div>
            <div class="option" @click="handleCardClick">
              <VCard>
                <template #default>
                  <div class="flex gap-3xs items-center">
                    <div class="icon">❓</div>
                    <h3 class="text-heading-3">Ask a question</h3>
                  </div>
                  <div class="text-text-secondary">
                    <div class="text-line">
                      Our AI assistant will reply instantly with answers to a
                      range of tax topics.
                    </div>
                  </div>
                </template>
              </VCard>
            </div>
            <div class="option">
              <VCard>
                <template #default>
                  <div class="flex gap-3xs items-center">
                    <div class="icon">🔍</div>
                    <h3 class="text-heading-3">Search for help</h3>
                  </div>
                  <div class="text-text-secondary">
                    <div class="text-line">
                      Get answers to commonly asked questions and search our
                      support articles.
                    </div>
                  </div>
                </template>
              </VCard>
            </div>
            <div class="option">
              <VCard>
                <template #default>
                  <div class="flex gap-3xs items-center">
                    <div class="icon">🎧</div>
                    <h3 class="text-heading-3">Contact support</h3>
                  </div>
                  <div class="text-text-secondary">
                    <div class="text-line">
                      Reach out to our support team to get hands-on assistance.
                    </div>
                  </div>
                </template>
              </VCard>
            </div>
          </div>
          <div v-if="openChatPanel">
            <div v-if="isLoading" class="mr-4 ml-4">
            <div class="mt-2 h-4 rounded-sm animate-pulse" style="background-color: #f1f3f3"></div>
            <div class="mt-2 h-4 rounded-sm animate-pulse" style="background-color: #f1f3f3"></div>
            <div class="mt-2 h-4 rounded-sm animate-pulse" style="background-color: #f1f3f3"></div>
            <div class="mt-2 h-4 rounded-sm animate-pulse" style="background-color: #f1f3f3"></div>
            <div class="mt-2 h-4 rounded-sm animate-pulse" style="background-color: #f1f3f3"></div>
            <div class="mt-2 h-4 rounded-sm animate-pulse" style="background-color: #f1f3f3"></div>
            <div class="mt-2 h-4 rounded-sm animate-pulse" style="background-color: #f1f3f3"></div>
            <div class="mt-2 h-4 rounded-sm animate-pulse" style="background-color: #f1f3f3"></div>
            <div class="mt-2 h-4 rounded-sm animate-pulse" style="background-color: #f1f3f3"></div>
            <div class="mt-2 h-4 rounded-sm animate-pulse" style="background-color: #f1f3f3"></div>
            <div class="mt-2 h-4 rounded-sm animate-pulse" style="background-color: #f1f3f3"></div>
            <div class="mt-2 h-4 rounded-sm animate-pulse" style="background-color: #f1f3f3"></div>
            <div class="mt-2 h-4 rounded-sm animate-pulse" style="background-color: #f1f3f3"></div>
            <div class="mt-2 h-4 rounded-sm animate-pulse" style="background-color: #f1f3f3"></div>
            <div class="mt-2 h-4 rounded-sm animate-pulse" style="background-color: #f1f3f3"></div>
            <div class="mt-2 h-4 rounded-sm animate-pulse" style="background-color: #f1f3f3"></div>
        
           
          </div>
            <div v-else>
              <MessageViewer />
            </div>
            <div>
              <div class="w-full">
                <VInput
                  data-test="Input"
                  value=""
                  v-model="newMessage"
                  placeholder="Ask a Question"
                  v-on:leftinputiconclick="() => ({})"
                  v-on:rightinputiconclick="() => ({})"
                />
              </div>

              <div class="w-full pt-2">
                <VButton
                  item-id="storybook-button"
                  variant="primary"
                  v-on:click="sendMessage()"
                  class="w-full inline-flex items-center justify-center rounded-md text-sm font-medium text-[#f9fafb] disabled:pointer-events-none disabled:opacity-50 bg-black hover:bg-[#111827E6] h-10 px-4 py-2"
                >
                  <template #default>Send</template>
                </VButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { ref, watch } from "vue";
import { useChatStore } from "@/store/useChatStore";
import { VInput, VButton, VCard } from "@oneport/core-ui";
import FloatingOpen from "@/assets/floatingOpen.svg";
import FloatingClose from "@/assets/floatingClose.svg";
import MessageViewer from "./MessageViewer.vue";

const chatStore = useChatStore();
const { getMessage } = storeToRefs(useChatStore());
const newMessage = ref("");
const isChatOpen = ref(false);
const openChatPanel = ref(false);
const isLoading = ref(false);

const sendMessage = async () => {

  if (newMessage.value.trim()) {
    isLoading.value = true;
    await chatStore.addMessage(newMessage.value);
    newMessage.value = "";
    isLoading.value =false;
  }
};

const toggleOpen = () => {
  isChatOpen.value = !isChatOpen.value;
  openChatPanel.value = false;
};
const handleCardClick = () => {
  isChatOpen.value = false;
  openChatPanel.value = !openChatPanel.value;
};
</script>
<style scoped>
/* Container for the greeting message */
.greeting-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8rem;
  background: linear-gradient(135deg, purple, rgb(53, 74, 209), pink);
  font-family: Arial, sans-serif;
}

/* Styling for the greeting text */
.greeting-text {
  color: white;
  font-size: 1.5em;
  text-align: center;
}
.option {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}

.option:hover {
  background: rgba(255, 255, 255, 0.2);
}

.window-container {
  z-index: 99;
}
</style>
