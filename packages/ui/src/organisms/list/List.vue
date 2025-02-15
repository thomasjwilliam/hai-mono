<template>
  <div class="list">
    <div class="list__header">
      <Icon v-if="icon" v-bind="icon" class="list__header-icon" />
      {{ title }}
    </div>

    <div class="list__items">
      <div v-for="item in items"
           class="list__item"
           :class="{'list__item--hover': item.id}"
      >

        <Icon v-if="item.icon"
              v-bind="item.icon"
              class="list__item-icon" />

        <span @click="handleClick(item)">{{ item.title }}</span>

        <div v-if="item.actions"
             class="list__item-actions">

          <button v-for="(action, index) in item.actions"
                  :key="index"
                  class="list__item-action"
                  @click="action.onClick"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {IconProps} from "../../atoms/icon/Icon";
import Icon from "../../atoms/icon/Icon.vue";

type ListItem = {
  actions?: Array<{
    icon: IconProps;
    onClick: () => void;
  }>;
  icon: IconProps;
  id?: string;
  title: string;
}

defineProps<{
  icon?: IconProps;
  items: ListItem[];
  title: string;
}>()

const emit = defineEmits<{
  (e: 'click-item', id: string): void
}>()

const handleClick = (item: ListItem) => {
  if (item.id) {
    emit('click-item', item.id);
  }
};
</script>

<style>

.list {
  width: 100%;
}

.list__header {
  display: flex;
  align-items: center;
  font-weight: bold;
  color: var(--p-text-color);
}

.list__header-icon {
}

/* List Items Container */
.list__items {
  padding: 0;
  margin: 0;
}

/* Individual List Item */
.list__item {
  display: flex;
  align-items: center;
  color: var(--p-text-color);
}

.list__item--hover {
  cursor: pointer;
}

.list__item:last-child {
}

.list__item-icon {
}

/* Actions (Buttons) */
.list__item-actions {
  display: flex;
}

.list__item-action {
  border: none;
  cursor: pointer;
  transition: color 0.2s;
}

.list__item-action:hover {
}
</style>
