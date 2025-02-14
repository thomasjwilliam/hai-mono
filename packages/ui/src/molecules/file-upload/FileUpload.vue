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
import {computed, ref} from 'vue';
// https://primevue.org/fileupload/
import FileUpload from 'primevue/fileupload';
import Button from "../../atoms/button/Button.vue";

const props = defineProps<{
  accept: "csv" | "json"
  onUpload: () => void;
}>()

const accept = computed(() => {
  if (props.accept === "csv") {
    return ".csv";
  } else {
    return ".json";
  }
})

const fileUpload = ref();

const upload = () => {
  fileUpload.value.upload();
};

</script>
