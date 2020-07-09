<template>
  <div>
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <div class="row">
        <div class="col col-mgr-100">
          <q-select
            outlined
            standout="bg-teal text-white"
            v-model="form.level1Res"
            :options="level1Options"
            label="一级分类"
            lazy-rules
            :rules="[val => (val !== null && val !== '') || 'Please select a first level type']"
          />
        </div>
        <div class="col col-mgr-100">
          <q-select
            outlined
            standout="bg-teal text-white"
            v-model="form.level2Res"
            :options="level2Options"
            label="二级分类"
            lazy-rules
            :rules="[val => (val !== null && val !== '') || 'Please select a second level type']"
          />
        </div>
      </div>
      <div class="row">
        <div class="col col-mgr-100">
          <q-input
            outlined
            hint="单位: 元"
            standout="bg-teal text-white"
            v-model="form.money"
            label="金额"
            lazy-rules
            :rules="[
              val => (val !== null && val !== '') || 'not empty',
              val => val > 0 || 'It has to be greater than 0',
            ]"
          />
        </div>
        <div class="col col-mgr-100">
          <q-input
            outlined
            standout="bg-teal text-white"
            v-model="form.date"
            label="添加时间"
            mask="date"
            :rules="['date']"
          >
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                  <q-date v-model="form.date" @input="() => $refs.qDateProxy.hide()" />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </div>
      <div class="row">
        <div class="col col-mgr-100">
          <q-input standout="bg-teal text-white" v-model="form.remark" label="备注" />
        </div>
      </div>
      <div>
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import { date } from 'quasar';
import { addExpends } from '@/services/personal';

export default {
  data() {
    return {
      accept: false,
      form: {
        level1Res: '',
        level2Res: '',
        money: 0,
        date: date.formatDate(Date.now(), 'YYYY/MM/DD'),
        remark: '',
      },
    };
  },
  computed: {
    ...mapGetters({
      enums: 'Personal/enums',
    }),
    level1Options() {
      return this.enums('root');
    },
    level2Options() {
      return this.enums(this.form.level1Res.code);
    },
  },
  mounted() {},
  methods: {
    onSubmit() {
      const params = {
        expend_money: Number(this.form.money) * 100,
        expend_time: this.form.date,
        login_no: 'wangfy',
        type_level_first: this.form.level1Res.code,
        type_level_second: this.form.level2Res.code,
        remark: this.form.remark,
      };
      addExpends(params).then(res => {
        if (res.retCode === '000000') {
          this.$q.notify('保存成功！');
        }
      });
    },
    onReset() {
      this.form.level1Res = '';
      this.form.level2Res = '';
      this.form.money = 0;
      this.form.date = date.formatDate(Date.now(), 'YYYY/MM/DD');
      this.form.remark = '';
    },
    checkFileType(files) {
      return files.filter(file => file.type === 'image/png');
    },
  },
};
</script>
