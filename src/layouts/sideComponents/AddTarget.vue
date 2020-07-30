<template>
  <q-card class="my-card" style="height:100%">
    <q-list>
      <q-item>
        <q-item-section>
          <!-- <q-icon name="menu"/> -->
          制定目标
        </q-item-section>
        <q-item-section avatar>
          <div class="q-gutter-sm row items-center no-wrap">
            <q-btn round dense flat color="grey-8" icon="notifications">
              <q-badge color="red" text-color="white" floating>
                2
              </q-badge>
              <q-tooltip>Notifications</q-tooltip>
            </q-btn>
            <q-btn round flat>
              <q-avatar size="26px">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
              </q-avatar>
              <q-tooltip>Account</q-tooltip>
            </q-btn>
          </div>
        </q-item-section>
      </q-item>
    </q-list>
    <q-separator inset />
    <q-card-section>
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input
          dense
          outlined
          autogrow
          v-model="form.target_title"
          label="标题"
          lazy-rules
          :rules="[val => (val && val.length > 0) || 'Please type something']"
        />
        <q-input dense outlined autogrow v-model="form.target_motivation" label="动机" lazy-rules :rules="[val => val && val.length > 0]" />
        <q-input dense outlined autogrow v-model="form.target_content" label="目标内容" lazy-rules :rules="[val => val && val.length > 0]" />
        <q-input dense outlined autogrow v-model="form.target_measurable" label="衡量标准" lazy-rules :rules="[val => val && val.length > 0]" />
        <q-input dense outlined v-model="form.target_time_bound" label="计划完成时间" mask="date" :rules="['date']">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                <q-date v-model="form.target_time_bound" @input="() => $refs.qDateProxy.hide()" />
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
        <div>
          <q-btn label="Submit" type="submit" color="primary" />
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>
    </q-card-section>
  </q-card>
</template>
<script>
import { date } from 'quasar';
import { addTarget } from '@/services/targets';

export default {
  data() {
    return {
      form: {
        target_title: '',
        target_content: '',
        target_measurable: '',
        target_motivation: '',
        target_time_bound: date.formatDate(Date.now(), 'YYYY/MM/DD'),
      },
    };
  },

  methods: {
    onSubmit() {
      addTarget(this.form).then(res => {
        if (res.retCode === '000000') {
          this.$q.notify('保存成功！');
        }
      });
    },
    onReset() {
      this.form.target_title = '';
      this.form.target_content = '';
      this.form.target_measurable = '';
      this.form.target_time_bound = '';
    },
  },
};
</script>
