<template>
  <div class="q-pa-md">
    <q-table
      title="我的目标"
      :data="targetData"
      :columns="columns"
      row-key="name"
      selection="multiple"
      :selected.sync="selected"
      :filter="filter"
      grid
      hide-header
    >
      <template v-slot:top-right>
        请选择:
        <q-tabs v-model="tab" no-caps>
          <q-tab class="text-primary" :name="1" label="已完成" />
          <q-tab class="text-primary" :name="0" label="未完成" />
        </q-tabs>
      </template>

      <template v-slot:item="props">
        <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition" :style="props.selected ? 'transform: scale(0.95);' : ''">
          <q-card :class="props.selected ? 'bg-grey-2' : ''">
            <q-card-section>
              <q-checkbox dense v-model="props.selected" :label="props.row.name" />
              <div style="float: right">计划完成：{{ props.row.target_time_bound }}</div>
            </q-card-section>
            <q-separator />
            <q-list dense>
              <q-item v-for="col in props.cols.filter(col => col.name !== 'desc')" :key="col.name">
                <q-item-section>
                  <q-item-label>{{ col.label }}</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-item-label caption>{{ col.value }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
            <q-card-actions align="right">
              <q-btn flat @click="$router.push({ name: 'targetDetail' })">目标详情</q-btn>
              <q-btn flat @click="$router.push({ name: 'plan' })">制定计划</q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </template>
    </q-table>
    <q-page-sticky position="bottom-right" :offset="[28, 28]">
      <!-- <q-fab color="purple" icon="keyboard_arrow_up" direction="up"> -->
      <q-btn color="primary" round size="lg" @click="add()" icon="add" />
      <!-- </q-fab> -->
    </q-page-sticky>
  </div>
</template>
<style lang="sass">
.grid-style-transition
  transition: transform .28s, background-color .28s
</style>
<script>
import { findAllTargets } from '@/services/targets';

export default {
  data() {
    return {
      tab: 0,
      filter: '',
      selected: [],
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'Dessert (100g serving)',
          align: 'left',
          field: row => row.target_id,
          format: val => `${val}`,
        },
        { name: 'target_title', label: '标题', field: 'target_title' },
        { name: 'target_content', label: '内容', field: 'target_content' },
        { name: 'target_measurable', label: '衡量标准', field: 'target_measurable' },
        { name: 'target_time_bound', label: '计划完成时间', field: 'target_time_bound' },
        { name: 'target_time_bound_real', label: '实际完成时间', field: 'target_time_bound_real' },
        { name: 'target_state', label: '目标状态', field: 'target_state' },
        { name: 'target_level', label: '目标级别', field: 'target_level' },
      ],
      data: [
        {
          name: '减肥',
          target_id: 1,
          target_title: '减肥',
          target_content: '30天减重至80KG',
          target_measurable: '体重 <= 80KG',
          target_time_bound: '2020-07-30',
          target_time_bound_real: '',
          target_state: 0,
          target_level: 0,
          parent_target_id: 0,
          create_time: '2020-07-12',
        },
      ],
    };
  },
  computed: {
    targetData() {
      return this.data.filter(item => item.target_state === this.tab);
    },
  },
  mounted() {
    this.findTargets();
  },
  methods: {
    findTargets() {
      findAllTargets({}).then(res => {
        if (res.retCode === '000000') {
          this.data = res.data.map(item => {
            const each = item;
            each.name = item.target_title;
            each.target_level = `${item.target_level}级`;
            return each;
          });
        }
      });
    },
    add() {
      this.$store.commit('Personal/SET_RIGHT_DRAWER_OPEN', { open: true, flag: 'addTarget' });
    },
  },
};
</script>
