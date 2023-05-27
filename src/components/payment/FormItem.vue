<template>
  <li v-if="dataItem.type === 'select'" class="form-payment__row form-payment__dropdowm dropdown-menu">
    <label class="form-payment__label">{{dataItem.name}}</label>
    <div
      @click="isOpen = !isOpen"
      class="form-payment__label form-payment__input dropdown-menu__label input-width"
      :class="isOpen ? '_active' : ''"
    >
      <span>{{ modelValue }}</span>
    </div>
    <ul class="dropdown-menu__items" :class="isOpen ? '_active' : ''">
      <li
        @click="updateFormValue(item.name);isOpen = false;onBlur(dataItem.objId, destination, dataItem.validation)"
        v-for="item in countriesList"
        :key="item.id"
        class="dropdown-menu__item form-payment__input"
        :class="item.name === modelValue ? '_selected' : ''"
      >
        {{ item.name }}
      </li>
    </ul>
  </li>
  <li v-else :class="isRadio ? 'form-payment__inline' : 'form-payment__row'">
    <div v-if="!isCheckbox" class="form-payment__label">{{ dataItem.name }}</div>
    <div :class="isRadio ? 'radio-block' : 'form-payment__row'">
      <div v-if="isCheckbox && dataItem.text" class="form-payment__text">{{ dataItem.text }}</div>
      <template v-if="isRadio">
        <div v-for="item in dataItem.items" :key="item.id" class="radio-block-row">
          <input
            :name="dataItem.objId"
            :value="item.value"
            :id="item.value"
            :type="dataItem.type"
            :checked="item.value === formValue"
            :class="[
              dataItem.type === 'text' ? 'form-payment__input input-width' : 'form-payment__radiobox',
              vuelidate && vuelidate.$error ? 'invalid-data-input' : '',
              vuelidate && vuelidate.$dirty ? 'valid-data-input' : '',
            ]"
            @change="onBlur(dataItem.objId, destination, dataItem.validation)"
            @input="updateFormValue($event.target.value)"
          >
          <label :for="item.value" class="form-payment__label-radio">{{ item.name }}</label>
        </div>
      </template>
      <div v-else class="radio-block form-payment__row">
        <input
          :name="dataItem.objId"
          :value="formValue"
          :id="dataItem.objId"
          :type="dataItem.type"
          :placeholder="dataItem.placeholder"
          :class="[
            isText ? 'form-payment__input input-width' : 'form-payment__radiobox',
            vuelidate && vuelidate.$error ? 'invalid-data-input' : '',
            vuelidate && vuelidate.$dirty ? 'valid-data-input' : '',
          ]"
          @change="onBlur(dataItem.objId, destination, dataItem.validation)"
          @input="updateFormValue($event.target.value)"
        >
        <label v-if="isCheckbox" :for="dataItem.objId" class="form-payment__label-radio">{{ dataItem.name }}</label>
      </div>
      <slot></slot>
      <ol v-if="vuelidate && vuelidate.$error && vuelidate.$dirty" class="invalid-data-box">
        <li v-if="vuelidate.$invalid" class="invalid-data-mark">
          Invalid value
        </li>
        <li v-if="(isCheckbox && vuelidate.sameAs.$invalid) || (!isCheckbox && vuelidate.required.$invalid)" class="invalid-data-mark">
          This area is required
        </li>
        <li v-if="vuelidate.numeric" class="invalid-data-mark">
          This area is numeric
        </li>
        <li v-if="dataItem.objId === 'password' && vuelidate.$invalid" class="invalid-data-mark">
          Might be more than 8 characters
        </li>
      </ol>
    </div>
  </li>
</template>
<script>
export default {
  props: {
    vuelidate: {
      type: Object,
      required: true,
    },
    modelValue: {
      type: String,
      required: true,
    },
    dataItem: {
      type: Object,
      required: true,
    },
    destination: {
      type: String,
      required: true,
    },
    countriesList: {
      type: Array,
    },
  },
  data() {
    return {
      isOpen: false,
    }
  },
  computed: {
    formValue: {
      get() {
        return this.modelValue;
      },
      set(newValue) {
        this.$emit('update:modelValue', newValue);
      }
    },
    isCheckbox() {
      return this.dataItem.type === 'checkbox' ? true : false;
    },
    isRadio() {
      return this.dataItem.type === 'radio' ? true : false;
    },
    isText() {
      return this.dataItem.type === 'text' ? true : false;
    },
  },
  methods: {
    updateFormValue(value) {
      if(this.isCheckbox) {
        this.formValue = !this.formValue;
        return
      }
      this.formValue = value;
    },
    onBlur(value, dest, validation){
      this.$emit('onBlur', value, dest, validation)
    },
  }
}
</script>