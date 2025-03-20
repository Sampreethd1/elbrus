import { defineStore } from "pinia";
import { computed, reactive } from "vue";

export const useChatStore = defineStore("chatStore", () => {
  // #region State
  const state = reactive({ receivedMessage: [] });

  // #region Getters
  const getMessage = computed(() => {
    return state.receivedMessage;
  });

  // #region Actions
  function setActiveFile(file: any) {
    state.activeFile = file;
  }
  function addMessage(msg: string) {
    state.receivedMessage.push(msg);
  }

  return {
    addMessage,
    setActiveFile,
    state,
    getMessage,
  };
});
