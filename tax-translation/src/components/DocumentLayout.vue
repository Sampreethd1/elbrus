
<template>
    <div class="w-2/6 m-4 bg-grey-200">
        <div class="flex-col gap-4 align-middle flex-wrap mb-4">
            <div class="">
                <DocumentSection @showModal="showModal($event)"></DocumentSection>
            </div>
            <div class="flex mt-4">
                <ol class="w-full">
                    <li class="mb-3" v-for="file in uploadedFiles" :key="file.name">
                        <VFileUploadItem type="pdf" state="completed" :name="file.name" :size="file.size" language="en"
                            data-test="FileUploadItem" @click-delete="deleteFile(file)" @click-file="previewFile(file, file.name)" />
                    </li>
                </ol>
            </div>
        </div>
        <div  v-if="selectedFile" class="w-full draggable-preview">
            <div class="flex justify-between mb-2 items-center">
                <h2>Preview of {{ previewedFileName }}:</h2>
                <VButton item-id="close-button" variant="tertiary" v-on:click="closePreview">
                    <template #default>Close Preview</template>
                </VButton>
            </div>
            <div>
                <iframe :src="fileUrl" width="100%" height="600"></iframe>
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';
import DocumentSection from './DocumentSection.vue';
import { notSupportedFiles } from '../utility/helper';
import { VFileUploadItem, VButton, VCard  } from "@oneport/core-ui";

const selectedFile = ref<File | null>(null);
const fileUrl = ref<string | null>(null);
let alertArray: Array<any> = [];
const uploadedFiles = ref<Array<File>>([]);
const previewedFileName = ref<string>('');


const showModal = (files: FileList | null) => {
    if (!files) return;

    let selectedFile: Array<File & { error?: string }> = Array.from(files);
    const unSupportedFile: typeof selectedFile = notSupportedFiles(selectedFile);
    if (unSupportedFile.length) {
        unSupportedFile.forEach((file) => {
            alertArray.push({
                alertType: 'info',
                message: file.error,
            });
        });
    }
    if (selectedFile.length !== 0) {
        uploadedFiles.value = [...uploadedFiles.value, ...selectedFile];
    }

};

const previewFile = (file: File, fileName: string) => {
    selectedFile.value = file;
    fileUrl.value = URL.createObjectURL(file);
    previewedFileName.value = fileName;
};

const closePreview = () => {
    selectedFile.value = null;
    fileUrl.value = null;
};

const deleteFile = (file: File) => {
    uploadedFiles.value = uploadedFiles.value.filter(f => f !== file);
    if (selectedFile.value === file) {
        closePreview();
    }
}


</script>
  
<style scoped></style>
  