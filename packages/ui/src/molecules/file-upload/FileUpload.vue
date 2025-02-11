<template>
  <div>
    <FileUpload
        ref="fileUpload"
        mode="basic"
        :accept="accept"
        @uploader="onUpload()"
    />
    <AppButton
        label="Upload"
        @click="upload"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import FileUpload from 'primevue/fileupload';
import AppButton from "../../atoms/button/AppButton.vue";

export interface Props {
  // .json or .csv
  accept: string
  onUpload: () => void;
}

defineProps<Props>()

const fileUpload = ref();

const upload = () => {
  fileUpload.value.upload();
};

</script>
