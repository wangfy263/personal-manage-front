<template>
  <div class="q-pa-md">
    <q-table
      title="减肥【0级】计划"
      :data="planData"
      :columns="planColumns"
      row-key="name"
      selection="multiple"
      :selected.sync="selected"
      :pagination.sync="pagination"
      :filter="filter"
      grid
      hide-header
    >
      <template v-slot:top-right>
        请选择:
        <q-tabs v-model="tab" no-caps>
          <q-tab class="text-primary" name="已完成" label="已完成" />
          <q-tab class="text-primary" name="未完成" label="未完成" />
        </q-tabs>
      </template>

      <template v-slot:item="props">
        <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition" :style="props.selected ? 'transform: scale(0.95);' : ''">
          <q-card :class="props.selected ? 'bg-grey-2' : ''">
            <q-card-section>
              <q-list dense>
                <q-item>
                  <q-checkbox dense v-model="props.selected" :label="props.row.plan_profile" />
                </q-item>
                <q-item>
                  <q-item-section>
                    <q-item-label>{{ props.row.plan_start_date }} - {{ props.row.plan_end_date }}</q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    <q-item-label caption>
                      {{ props.row.plan_state }}
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
              <q-linear-progress size="25px" :value="progress" color="accent">
                <div class="absolute-full flex flex-center">
                  <q-badge color="white" text-color="accent" :label="progressLabel1" />
                </div>
              </q-linear-progress>
            </q-card-section>
            <q-separator />
            <q-card-section>
              {{ props.row.plan_content }}
            </q-card-section>
          </q-card>
        </div>
      </template>
    </q-table>
    <task-date />
    <q-table
      title="减肥【1级】目标列表"
      :data="targetData"
      :columns="targetColumns"
      row-key="name"
      selection="multiple"
      :selected.sync="selected"
      :pagination.sync="pagination"
      :filter="filter"
      grid
      hide-header
    >
      <template v-slot:top-right>
        请选择:
        <q-tabs v-model="tab" no-caps>
          <q-tab class="text-primary" name="已完成" label="已完成" />
          <q-tab class="text-primary" name="未完成" label="未完成" />
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
              <q-btn flat>目标详情</q-btn>
              <q-btn flat>制定计划</q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </template>
    </q-table>
  </div>
</template>
<style lang="sass">
.grid-style-transition
  transition: transform .28s, background-color .28s
</style>
<script>
import taskDate from '@/components/TaskDate.vue';

export default {
  components: {
    taskDate,
  },
  data() {
    return {
      tab: '未完成',
      tab1: '减肥',
      filter: '',
      selected: [],
      targetColumns: [
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
          target_state: '未完成',
          target_level: '0级',
          parent_target_id: 0,
          create_time: '2020-07-12',
        },
        {
          name: '阅读《君主论》',
          target_id: 2,
          target_title: '阅读《君主论》',
          target_content: '阅读完君主论，并写1000字读后感',
          target_measurable: '1、2周读完；2、1k字读后感',
          target_time_bound: '2020-07-30',
          target_time_bound_real: '',
          target_state: '已完成',
          target_level: '0级',
          parent_target_id: 0,
          create_time: '2020-07-12',
        },
        {
          name: '阅读《Three.js》',
          target_id: 3,
          target_title: '阅读《Three.js》官方文档',
          target_content: '阅读完，并完成练习项目',
          target_measurable: '1、2周读完；2、练习项目',
          target_time_bound: '2020-07-30',
          target_time_bound_real: '',
          target_state: '未完成',
          target_level: '0级',
          parent_target_id: 0,
          create_time: '2020-07-12',
        },
        {
          name: '软考',
          target_id: 3,
          target_title: '软考高级：信息系统项目管理师',
          target_content: '阅读完，并完成练习项目',
          target_measurable: '1、2周读完；2、练习项目',
          target_time_bound: '2020-07-30',
          target_time_bound_real: '',
          target_state: '未完成',
          target_level: '0级',
          parent_target_id: 0,
          create_time: '2020-07-12',
        },
        {
          name: '软考',
          target_id: 3,
          target_title: '软考高级：信息系统项目管理师',
          target_content: '阅读完，并完成练习项目',
          target_measurable: '1、2周读完；2、练习项目',
          target_time_bound: '2020-07-30',
          target_time_bound_real: '',
          target_state: '未完成',
          target_level: '0级',
          parent_target_id: 0,
          create_time: '2020-07-12',
        },
      ],
      pagination: {
        page: 1,
        rowsPerPage: 4,
      },
      planData: [
        {
          plan_id: '1',
          target_id: '1',
          plan_profile: '适当运动+控制饮食',
          plan_content: '每天晨跑5公里，跑完进行10分钟拉伸，每晚完成泡沫轴全身放松课程，瘦小腿课程',
          plan_start_date: '2020-07-01',
          plan_end_date: '2020-07-31',
          plan_type: 0,
          plan_state: '未完成',
          plan_summarize: '已按时完成，其中7，11，25三天未跑完5公里',
        },
      ],
      planColumns: [
        {
          name: 'desc',
          required: true,
          align: 'left',
          field: row => row.target_id,
          format: val => `${val}`,
        },
        { name: 'plan_profile', label: '计划简述', field: 'plan_profile' },
        { name: 'plan_content', label: '计划内容', field: 'plan_content' },
        { name: 'plan_start_date', label: '开始时间', field: 'plan_start_date' },
        { name: 'plan_end_date', label: '结束时间', field: 'plan_end_date' },
        { name: 'plan_state', label: '状态', field: 'plan_state' },
        { name: 'plan_summarize', label: '计划总结', field: 'plan_summarize' },
      ],
      progress: 0.3,
    };
  },
  computed: {
    targetData() {
      return this.data.filter(item => item.target_state === this.tab);
    },
    progressLabel1() {
      return `${(this.progress * 100).toFixed(2)}%`;
    },
  },
};
</script>
