<template>
  <q-card flat class="my-card">
    <q-card-section>
      <div class="text-h6">计划</div>
      <div class="text-subtitle2">by wangfy</div>
    </q-card-section>
    <q-stepper v-model="step" vertical color="primary" animated>
      <q-step :name="1" title="制定计划" icon="settings" :done="step > 1">
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md" ref="formulate">
          <q-input square outlined autogrow v-model="form.plan_profile" label="计划简述" lazy-rules :rules="[val => val && val.length > 0]" />
          <q-input square outlined autogrow v-model="form.plan_content" label="计划内容" lazy-rules :rules="[val => val && val.length > 0]" />
          <q-input square outlined v-model="form.plan_start_date" label="计划开始时间" mask="date" :rules="['date']">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                  <q-date v-model="form.plan_start_date" @input="() => $refs.qDateProxy.hide()" />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          <q-input square outlined v-model="form.plan_end_date" label="计划结束时间" mask="date" :rules="['date']">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                  <q-date v-model="form.plan_end_date" @input="() => $refs.qDateProxy.hide()" />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </q-form>
        <q-stepper-navigation>
          <q-btn @click="clickStep('formulate', 2)" color="primary" label="Continue" />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="2" title="任务分解" caption="将计划拆分为多个任务" icon="create_new_folder" :done="step > 2">
        <q-form ref="formTask">
          <q-input
            square
            outlined
            autogrow
            v-model="tasks[index]"
            v-for="(task, index) in tasks"
            :key="index"
            :label="`任务${index + 1}`"
            lazy-rules
            :rules="[val => val && val.length > 0]"
          >
            <template v-slot:after v-if="index === tasks.length - 1 && tasks.length < 5">
              <q-icon name="add" @click="addTask()" />
            </template>
            <template v-slot:after v-else>
              <q-icon name="delete_outline" @click="delTask(index)" />
            </template>
          </q-input>
        </q-form>
        <q-stepper-navigation>
          <q-btn @click="clickStep('formTask', 3)" color="primary" label="Continue" :done="step > 2" />
          <q-btn flat @click="step = 1" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="3" title="日期设置" caption="可自行调整执行日期，默认每天执行" icon="assignment" :done="step > 3">
        <task-list ref="taskList" :taskMap="taskMap" :startDate="form.plan_start_date" :endDate="form.plan_end_date" v-on:taskBlock="taskBlock" />
        <q-stepper-navigation>
          <q-btn @click="clickStep('', 4)" color="primary" label="Continue" />
          <q-btn flat @click="step = 2" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="4" title="查看详情" icon="add_comment">
        <q-card flat>
          <q-list dense>
            <q-item>
              <q-item-label>简述：{{ form.plan_profile }}</q-item-label>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>{{ form.plan_start_date }} - {{ form.plan_end_date }}</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-label>{{ form.plan_content }}</q-item-label>
            </q-item>
          </q-list>
          <q-separator />
          <q-item tag="label" v-ripple v-for="(item, index) in tasks" :key="index">
            <q-item-section>
              <q-item-label>{{ item }}</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-btn flat icon="event" round color="primary">
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                  <q-date v-model="proxyDate" minimal :events="taskContentList[item]"></q-date>
                </q-popup-proxy>
              </q-btn>
            </q-item-section>
          </q-item>
        </q-card>

        <q-stepper-navigation>
          <q-btn color="primary" label="Finish" />
          <q-btn flat @click="step = 3" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
  </q-card>
</template>
<script>
import { date } from 'quasar';
import { getMonthFirstAndEnd } from '@/utils/common';
import TaskList from '@/components/TaskList';
// import { addTarget } from '@/services/targets';

export default {
  components: {
    TaskList,
  },
  data() {
    return {
      step: 1,
      form: {
        plan_profile: '适当运动+控制饮食',
        plan_content: '每天晨跑5公里，跑完进行10分钟拉伸，每晚完成泡沫轴全身放松课程，瘦小腿课程',
        plan_start_date: date.formatDate(Date.now(), 'YYYY/MM/DD'),
        plan_end_date: '',
      },
      tasks: [''],
      taskMap: {},
      taskContentList: {},
      proxyDate: new Date(),
    };
  },
  // computed: {
  //   events() {

  //   }
  // },
  mounted() {
    const sae = getMonthFirstAndEnd();
    this.form.plan_end_date = date.formatDate(sae.end, 'YYYY/MM/DD');
  },
  methods: {
    onSubmit() {
      // addTarget(this.form).then(res => {
      //   if (res.retCode === '000000') {
      //     this.$q.notify('保存成功！');
      //   }
      // });
    },
    onReset() {
      this.form.plan_profile = '';
      this.form.plan_content = '';
      this.form.plan_start_date = date.formatDate(Date.now(), 'YYYY/MM/DD');
      this.form.target_time_bound = '';
    },
    clickStep(ref, step) {
      if (step === 3) {
        const from = new Date(this.form.plan_start_date);
        const to = new Date(this.form.plan_end_date);
        let newDate = new Date(this.form.plan_start_date);
        while (date.isBetweenDates(newDate, from, to, { inclusiveFrom: true, inclusiveTo: true })) {
          this.taskMap[date.formatDate(newDate, 'YYYY/MM/DD')] = this.tasks.map(item => {
            const each = {};
            each.content = item;
            each.check = true;
            return each;
          });
          newDate = date.addToDate(newDate, { days: 1 });
        }
      }
      if (step === 4) {
        const map = {};
        const list = Object.keys(this.taskMap);
        for (let i = 0; i < list.length; i += 1) {
          const newDate = list[i];
          this.taskMap[newDate].forEach(item => {
            if (!map[item.content]) {
              map[item.content] = [];
            }
            if (item.check) {
              map[item.content].push(newDate);
            }
          });
        }
        console.log(map);
        this.taskContentList = map;
      }
      if (ref) {
        this.$refs[ref].validate().then(result => {
          if (result) {
            this.step = step;
            this.date = this.form.plan_start_date;
          }
        });
      } else {
        this.step = step;
      }
    },
    addTask() {
      if (this.tasks.length < 5) {
        this.tasks.push('');
      }
    },
    delTask(index) {
      this.tasks.splice(index, 1);
    },
    taskBlock({ index, res, today }) {
      this.taskMap[today][index].check = res;
      this.$refs.taskList.$forceUpdate();
    },
  },
};
</script>
