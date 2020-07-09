<template>
  <div>
    <q-btn
      outline
      color="white"
      text-color="primary"
      icon="add"
      @click="toolbar = true"
      style="width: 150px;margin-left:8px;margin-top:20px;"
    />
    <!-- <q-btn label="With QToolbar" color="primary" @click="toolbar = true" /> -->
    <q-dialog v-model="toolbar">
      <q-card style="width: 700px; max-width: 80vw;">
        <q-toolbar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
          </q-avatar>
          <q-toolbar-title><span class="text-weight-bold">添加支出类型</span></q-toolbar-title>
          <q-btn flat round dense icon="close" v-close-popup />
        </q-toolbar>

        <q-card-section>
          <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
            <div class="row">
              <div class="col col-mgr-100">
                <q-select
                  outlined
                  v-model="selected"
                  :options="level1Options"
                  label="归属类别名称"
                  lazy-rules
                  :rules="[val => (val !== null && val !== '') || 'Please select a subtype']"
                />
              </div>
              <div class="col col-mgr-100">
                <q-input
                  outlined
                  v-model="subCode"
                  label="父类别编码"
                  disable
                  readonly
                  lazy-rules
                  :rules="[val => (val !== null && val !== '') || 'not empty']"
                />
              </div>
            </div>
            <div class="row">
              <div class="col col-mgr-100">
                <q-input
                  outlined
                  v-model="form.name"
                  label="名称"
                  lazy-rules
                  :rules="[val => (val !== null && val !== '') || 'not empty']"
                />
              </div>
              <div class="col col-mgr-100">
                <q-input
                  outlined
                  v-model="form.code"
                  label="编码"
                  lazy-rules
                  :rules="[val => (val !== null && val !== '') || 'not empty']"
                />
              </div>
            </div>
            <div class="row">
              <div class="col col-mgr-100">
                <q-input v-model="form.note" label="说明" :maxlength="20" />
              </div>
            </div>
            <div>
              <q-btn label="Submit" type="submit" color="primary" />
              <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import { addDicts } from '@/services/personal';

export default {
  data() {
    return {
      toolbar: this.toolbarIn,
      selected: null,
      form: {
        name: '',
        code: '',
        state: '1',
        note: '',
      },
    };
  },
  props: {
    toolbarIn: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    toolbarIn(val) {
      this.toolbar = val;
    },
    toolbar(val) {
      this.$emit('updateToolbar', val);
    },
  },
  computed: {
    ...mapGetters({
      enums: 'Personal/enums',
      enumsMap: 'Personal/enumsMap',
    }),
    level1Options() {
      const options = this.enums('root');
      options.unshift({ value: 0, label: '根节点', code: 'root' });
      return options;
    },
    subCode() {
      return this.selected ? this.selected.code : '';
    },
  },
  methods: {
    onReset() {
      this.form = {
        name: '',
        code: '',
        state: '1',
        note: '',
      };
      this.selected = null;
    },
    onSubmit() {
      const params = { ...this.form };
      params.subtype_name = this.selected.label;
      params.subtype_code = this.selected.code;
      addDicts(params).then(res => {
        if (res.retCode === '000000') {
          this.toolbar = false;
          this.$store.dispatch('Personal/getEnums');
          this.$q.notify('保存成功！');
        }
      });
    },
  },
};
</script>
