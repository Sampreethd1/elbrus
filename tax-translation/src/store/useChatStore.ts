import { defineStore } from "pinia";

export const chatStore = defineStore("chatStore", {
    state: () => ({
        activeFile: null,
        messages: [] as String[],
    }),
    actions: {
        setActiveFile(file: any) {
            this.activeFile = file;
        },
        addMessage(message: string) {
            this.messages.push(message);
        },
    },
});