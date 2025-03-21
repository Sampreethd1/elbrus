<template>
  <div id="file-overlay-portal">

    <VFileUpload ref="inputUploadDrag" accept="application/pdf" accept-message="PDF" :max-file-size="5" language="en"
      data-test="FileUpload" @selectedFiles="handleUploadTrigger($event)" multi="true" />
  </div>

  <!-- <div v-if="show">
    <embed :src="filesSelected" width="600" height="400" type="application/pdf" />
  </div> -->
</template>

<script setup lang="ts">
// @ts-ignore
import { VFileUpload } from "@oneport/core-ui";
import { resetFileExplorer } from "../utility/helper";
import { ref } from "vue";


const inputUploadDrag = ref<any>()



const emit = defineEmits<{
  (e: "showModal", event: FileList): void
}>()

const handleUploadTrigger = (event: FileList) => {
  emit("showModal", event);
  resetFileExplorer(inputUploadDrag.value)
}
</script>


<style scoped></style>