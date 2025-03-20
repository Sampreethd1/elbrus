import { defineStore } from "pinia";

export const useChatStore = defineStore("chatStore", () => {
  // #region State
  const state = {
    activeFile: null,
    messages: [] as string[],
  };

  // #region Getters

  // #region Actions
  function setActiveFile(file: any) {
    state.activeFile = file;
  }
  function addMessage(msg: string) {
    state.messages.push(msg);
  }

  return {
    addMessage,
    setActiveFile,
    state,
  };
});
