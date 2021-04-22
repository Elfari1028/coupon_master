<template>
  <div style="margin:5px">
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-right="40"
      transition="scale-transition"
      offset-y
      min-width="auto"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
       :disabled="disabled" 
         
          v-model="value"
          :label="label"
          prepend-icon="mdi-calendar"
          readonly
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker v-model="value" @input="menu = false"></v-date-picker>
    </v-menu>
  </div>
</template>
<script>
export default {
  name: "DatePicker",
  props: [
    'label',
    'disabled'
  ],
  data() {
    return {
      menu: false,
    };
  },
};
</script>