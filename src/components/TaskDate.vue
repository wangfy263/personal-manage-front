<template>
  <q-card class="my-card">
    <q-card-section>
      <div class="q-table__title">【任务】{{ plan.plan_profile }}</div>
    </q-card-section>
    <q-separator />
    <div class="q-pa-md">
      <div class="q-gutter-md" style="display: flex; flex-wrap: wrap; justify-content: space-around">
        <q-date v-model="date" :options="options" :events="events" />
        <q-list bordered padding style="max-width: 650px; min-width: 285px">
          <q-item-label header>任务列表</q-item-label>
          <div v-if="dateTask.length > 0">
            <q-item tag="label" v-ripple v-for="(task, index) in dateTask" :key="index">
              <q-item-section avatar top>
                <q-btn color="positive" flat dense round icon="done" v-if="task.task_state" />
                <q-btn color="primary" flat dense round icon="access_alarms" v-else />
              </q-item-section>

              <q-item-section>
                <q-item-label>{{ task.task_content }}</q-item-label>
                <q-item-label caption>
                  {{ finishOptionsMap[task.task_state] }}
                </q-item-label>
              </q-item-section>
              <q-item-section side top>
                <div class="text-grey-8 q-gutter-xs">
                  <q-btn
                    color="primary"
                    flat
                    dense
                    round
                    icon="done"
                    v-if="!task.task_state && isOverTime"
                    @click="doneTask(task.task_id)"
                  />
                  <!-- <q-btn size="12px" flat dense round icon="more_vert" /> -->
                </div>
              </q-item-section>
            </q-item>
          </div>
          <div style="margin-left: 18px" v-else>{{ this.date }}没有任务</div>
        </q-list>
      </div>
    </div>
    <!-- <q-card-actions align="right">
      <q-btn flat>Action 1</q-btn>
      <q-btn flat>Action 2</q-btn>
    </q-card-actions> -->
  </q-card>
</template>
<script>
import { date } from 'quasar';
import { mapGetters } from 'vuex';
import { findPlanByPK, updateTask } from '@/services/targets';

export default {
  data() {
    return {
      date: date.formatDate(new Date(), 'YYYY/MM/DD'),
      plan: {},
      tasks: [],
      events: [],
    };
  },
  props: {
    planId: {
      type: Number,
      default: 0,
    },
    checkDate: {
      type: String,
      default: '',
    },
  },
  watch: {
    planId() {
      this.getPlanTasks();
    },
  },
  created() {
    this.getPlanTasks();
  },
  computed: {
    ...mapGetters({
      finishOptionsMap: 'Personal/finishOptionsMap',
    }),
    options() {
      const from = new Date(this.plan.plan_start_date);
      const to = new Date(this.plan.plan_end_date);
      let newDate = new Date(this.plan.plan_start_date);
      const arr = [];
      while (date.isBetweenDates(newDate, from, to, { inclusiveFrom: true, inclusiveTo: true })) {
        arr.push(date.formatDate(newDate, 'YYYY/MM/DD'));
        newDate = date.addToDate(new Date(newDate), { days: 1 });
      }
      // console.log(`options:${arr}`);
      return arr;
    },
    dateTask() {
      return this.tasks.filter(item => item.task_date.replace(/-/g, '/') === this.date);
    },
    isOverTime() {
      const dateTarget = new Date(this.date);
      const dateFrom = date.adjustDate(new Date(), { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });
      const dateTo = new Date(this.plan.plan_end_date);
      // console.log(dateTarget);
      // console.log(dateFrom);
      // console.log(dateTo);
      // console.log(date.isBetweenDates(dateTarget, dateFrom, dateTo, { inclusiveFrom: true, inclusiveTo: true }));
      return date.isBetweenDates(dateTarget, dateFrom, dateTo, { inclusiveFrom: true, inclusiveTo: true });
    },
  },
  methods: {
    getPlanTasks() {
      findPlanByPK({ id: this.planId }).then(res => {
        if (res.retCode === '000000') {
          this.plan = res.data.plan;
          this.tasks = res.data.tasks;
          this.date = !this.checkDate ? this.plan.plan_start_date.replace(/-/g, '/') : this.checkDate;
          this.getEvents();
        }
      });
    },
    getEvents() {
      const arr = [];
      this.tasks.forEach(item => {
        const d = date.formatDate(item.task_date, 'YYYY/MM/DD');
        if (!arr.includes(d)) {
          arr.push(d);
        }
      });
      // console.log(`event:${arr}`);
      this.events = arr;
    },
    doneTask(id) {
      const state = 1;
      updateTask({ id, task_state: state }).then(res => {
        if (res.retCode === '000000') {
          this.$q.notify('操作成功！');
          this.$emit('taskChange', this.date);
        }
      });
    },
  },
};
</script>
