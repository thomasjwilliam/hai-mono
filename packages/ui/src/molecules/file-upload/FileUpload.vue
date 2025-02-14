<template>
  <div>
    <FileUpload
        ref="fileUpload"
        mode="basic"
        :accept="accept"
        @uploader="onUpload()"
    />
    <Button
        label="Upload"
        @click="upload"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import FileUpload from 'primevue/fileupload';
import Button from "../../atoms/button/Button.vue";

defineProps<{
  // .json or .csv
  accept: string
  onUpload: () => void;
}>()

const fileUpload = ref();

const upload = () => {
  fileUpload.value.upload();
};

</script>
