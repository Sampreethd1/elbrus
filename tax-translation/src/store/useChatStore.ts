import { postData } from "@/api";
import { defineStore } from "pinia";
import { computed, reactive } from "vue";

export const useChatStore = defineStore("chatStore", () => {
  // #region State
  const state:any = reactive({ receivedMessage: [] });

  // #region Getters
  const getMessage = computed(() => {
    console.log(state.receivedMessage, "state.receivedMessage")
    return state.receivedMessage;
  });

  // #region Actions
   async function addMessage(msg: string) {
    const response: any = await postData(msg);
    let conversation: any = {} ;
    conversation.question = msg;
    conversation.answer = response
    state.receivedMessage.push(conversation);
  }

  return {
    addMessage,
    state,
    getMessage,
  };
});
