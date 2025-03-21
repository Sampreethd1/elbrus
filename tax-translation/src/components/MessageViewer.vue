<template>
  <div>
    <VCard>
      <template #default>
        <div class="flex gap-3xs items-center">
          <h3 class="text-heading-3">Chat Messages</h3>
        </div>
        <div class="text-text-secondary">
          
        <div v-for="(msg, index) in getMessage" :key="index" class="text-line"> {{ msg }}</div>
         
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

</script>
<style scoped>
.text-line {
  height: 20px;
  background-color: #ccc;
  margin-bottom: 10px;
  width: 80%;
}
</style>