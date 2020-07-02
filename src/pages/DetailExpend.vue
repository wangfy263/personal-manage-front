<template>
  <div>
    <q-card class="mgb-10">
      <q-card-section>
        <div class="col-2 q-table__title">查询条件</div>
      </q-card-section>

      <q-separator />

      <div class="row">
        <div class="col col-mg-20">
          <q-select
            dense
            outlined
            standout="bg-teal text-white"
            v-model="form.level1Res"
            :options="level1Options"
            label="一级分类"
          />
        </div>
        <div class="col col-mg-20">
          <q-select
            dense
            outlined
            standout="bg-teal text-white"
            v-model="form.level2Res"
            :options="level2Options"
            label="二级分类"
          />
        </div>
      </div>
      <div class="row">
        <div class="col col-mg-20">
          <q-input
            dense
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
        <div class="col col-mg-20"></div>
      </div>
      <q-card-actions align="right">
        <q-btn color="primary" flat @click="query()">Query</q-btn>
        <q-btn color="primary" flat class="q-ml-sm">Reset</q-btn>
      </q-card-actions>
    </q-card>
    <q-table
      :dense="$q.screen.lt.md"
      title="支出明细"
      :data="data"
      :columns="columns"
      row-key="name"
      separator="vertical"
      :pagination.sync="pagination"
      :visible-columns="visibleColumns"
    >
      <template v-slot:no-data="{ icon, message, filter }">
        <div class="full-width row flex-center text-accent q-gutter-sm">
          <q-icon size="2em" name="sentiment_dissatisfied" />
          <span> Well this is sad... {{ message }} </span>
          <q-icon size="2em" :name="filter ? 'filter_b_and_w' : icon" />
        </div>
      </template>
      <template v-slot:top="props">
        <div class="col-2 q-table__title">支出明细</div>

        <q-space />
        <q-select
          v-model="visibleColumns"
          multiple
          borderless
          dense
          options-dense
          :display-value="$q.lang.table.columns"
          emit-value
          map-options
          :options="columns"
          option-value="name"
          style="min-width: 150px"
        />
        <q-btn
          flat
          round
          dense
          :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
          @click="props.toggleFullscreen"
          class="q-ml-md"
        />
      </template>
    </q-table>
  </div>
</template>
<style lang="sass">
.my-sticky-virtscroll-table
  /* max height is important */
  .q-table__middle
    max-height: 200px

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th /* bg color is important for th; just specify one */
    background-color: #fff

  thead tr th
    position: sticky
    z-index: 1
  /* this will be the loading indicator */
  thead tr:last-child th
    /* height of all previous header rows */
    top: 48px
  thead tr:first-child th
    top: 0
.mgb-10
  margin-bottom: 20px
.col-mg-20
  margin: 20px 40px;
</style>
<script>
import { mapGetters } from 'vuex';
import { date } from 'quasar';
import { getListExpends } from '@/services/personal';

export default {
  data() {
    return {
      form: {
        level1Res: '',
        level2Res: '',
        date: date.formatDate(Date.now(), 'YYYY/MM/DD'),
        remark: '',
      },
      visibleColumns: [
        'type_level_first',
        'type_level_second',
        'expend_money',
        'expend_time',
        'remark',
      ],
      pagination: {
        sortBy: 'desc',
        descending: false,
        page: 1,
        rowsPerPage: 10,
        // rowsNumber: xx if getting data from a server
      },
      columns: [
        {
          name: 'type_level_first',
          align: 'left',
          label: '一级分类',
          field: 'type_level_first',
          sortable: true,
        },
        {
          name: 'type_level_second',
          align: 'left',
          label: '二级分类',
          field: 'type_level_second',
          sortable: true,
        },
        {
          name: 'expend_money',
          align: 'left',
          label: '支出金额',
          field: 'expend_money',
          sortable: true,
        },
        {
          name: 'expend_time',
          align: 'left',
          label: '支出时间',
          field: 'expend_time',
          sortable: true,
        },
        {
          name: 'remark',
          align: 'left',
          label: '备注',
          field: 'remark',
          sortable: true,
        },
      ],
      data: [],
    };
  },
  computed: {
    ...mapGetters({
      enums: 'Personal/enums',
      enumsMap: 'Personal/enumsMap',
    }),
    level1Options() {
      return this.enums('root');
    },
    level2Options() {
      return this.enums(this.form.level1Res.code);
    },
  },
  mounted() {
    this.getListExpend(this.form);
  },
  methods: {
    getListExpend(data) {
      const param = JSON.parse(JSON.stringify(data));
      param.date = param.date.replace(/\//g, '-');
      getListExpends(param).then(res => {
        if (res.retCode === '000000') {
          this.data = res.data.map(item => {
            const each = item;
            each.type_level_first = this.enumsMap[item.type_level_first].name;
            each.type_level_second = this.enumsMap[item.type_level_second].name;
            [each.expend_time] = item.expend_time.split(' ');
            return each;
          });
        }
      });
    },
    query() {
      this.getListExpend(this.form);
    },
  },
};
</script>
