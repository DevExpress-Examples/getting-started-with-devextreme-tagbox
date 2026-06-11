<script setup lang="ts">
import { DxTagBox } from 'devextreme-vue/tag-box';
import type { ValueChangedEvent } from 'devextreme/ui/tag_box';
import DataSource from 'devextreme/data/data_source';
import { data } from '../data';

const dataSource = new DataSource({
  store: {
    data,
    type: 'array',
    key: 'ID',
  },
  group: 'Category',
});

const dropDownOptions = {
  height: 300,
};

function onValueChanged(e: ValueChangedEvent): void {
  console.log(e.previousValue);
  console.log(e.value);
}
</script>

<template>
  <DxTagBox
    id="tag-box"
    :data-source="dataSource"
    value-expr="ID"
    display-expr="Name"
    :search-enabled="true"
    :show-selection-controls="true"
    :grouped="true"
    :multiline="true"
    :max-displayed-tags="6"
    label="Products"
    label-mode="floating"
    @value-changed="onValueChanged"
    :drop-down-options="dropDownOptions"
  />
</template>

<style scoped>
#tag-box {
  width: 500px;
}
</style>
