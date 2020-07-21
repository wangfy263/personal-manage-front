<template>
  <div class="q-gutter-md" style="display: flex; flex-wrap: wrap">
    <q-date v-model="date" :options="optionsFn" :events="events" minimal />
    <q-list bordered padding style="min-width: 290px; max-width: 650px">
      <q-item-label header>任务列表</q-item-label>
      <q-item tag="label" v-ripple v-for="(item, index) in taskList" :key="index">
        <q-item-section>
          <q-item-label :class="!item.check ? 'line-through' : ''">{{ item.content }}</q-item-label>
          <!-- <q-item-label caption>
            Notify me about updates to apps or games that I downloaded
          </q-item-label> -->
        </q-item-section>
        <q-item-section side top>
          <div class="text-grey-8 q-gutter-xs">
            <q-toggle :value="item.check" checked-icon="check" color="green" unchecked-icon="clear" @input="taskBlock(index, !item.check)" />
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>
<style scoped>
.line-through {
  text-decoration: line-through;
}
</style>
<script>
import { date } from 'quasar';

export default {
  data() {
    return {
      date: '',
      events: [],
    };
  },
  props: {
    taskMap: {
      type: Object,
      default: () => {},
    },
    startDate: {
      type: String,
      default: '',
    },
    endDate: {
      type: String,
      default: '',
    },
  },
  computed: {
    taskList() {
      return this.taskMap[this.date];
    },
    // events() {},
  },
  mounted() {
    this.date = this.startDate;
    this.getEvents();
  },
  methods: {
    optionsFn(d) {
      return d >= this.startDate && d <= this.endDate;
    },
    taskBlock(index, res) {
      const today = this.date;
      this.$emit('taskBlock', { index, res, today });
      this.getEvents();
    },
    getEvents() {
      const from = new Date(this.startDate);
      const to = new Date(this.endDate);
      let newDate = new Date(this.startDate);
      const arr = [];
      while (date.isBetweenDates(newDate, from, to, { inclusiveFrom: true, inclusiveTo: true })) {
        if (this.taskMap[date.formatDate(newDate, 'YYYY/MM/DD')].reduce((res, current) => current.check || res, false)) {
          arr.push(date.formatDate(newDate, 'YYYY/MM/DD'));
        }
        newDate = date.addToDate(new Date(newDate), { days: 1 });
      }
      this.events = arr;
    }
  },
};
</script>
