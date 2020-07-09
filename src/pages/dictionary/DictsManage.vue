<template>
  <div>
    <q-splitter v-model="splitterModel" style="height: 600px" unit="%">
      <template v-slot:before>
        <div class="q-pa-md">
          <q-tree
            :nodes="root"
            node-key="code"
            label-key="label"
            selected-color="primary"
            :selected.sync="selected"
            default-expand-all
          />
          <add-dialog />
          <!-- <q-btn
            outline
            color="white"
            text-color="primary"
            icon="add"
            @click="addDialogFlag = true"
            style="width: 150px;margin-left:8px;margin-top:20px;"
          /> -->
        </div>
      </template>
      <!-- <template v-slot:separator>
        <q-avatar color="primary" text-color="white" size="40px" icon="drag_indicator" />
      </template> -->
      <template v-slot:after>
        <div class="q-pa-md">
          <q-table
            class="my-sticky-column-table"
            title="字典"
            :data="tableData"
            :columns="columns"
            row-key="name"
            :pagination.sync="pagination"
          >
            <template v-slot:no-data="{ icon, message, filter }">
              <div class="full-width row flex-center text-accent q-gutter-sm">
                <q-icon size="2em" name="sentiment_dissatisfied" />
                <span> Well this is sad... {{ message }} </span>
                <q-icon size="2em" :name="filter ? 'filter_b_and_w' : icon" />
              </div>
            </template>
            <!-- <template v-slot:body-cell-opr="props">
              <q-td :props="props">
                <q-btn
                  size="sm"
                  color="red"
                  icon="delete"
                  outline
                  round
                  @click="update(props.row.id)"
                />
              </q-td>
            </template> -->
            <template v-slot:body="props">
              <q-tr :props="props">
                <q-td key="subtype_code" :props="props">
                  {{ props.row.subtype_code }}
                  <q-popup-edit
                    v-model="editContent.content"
                    title="Update subtype_code"
                    buttons
                    :validate="validatePopup"
                    @before-show="bshow(props.row, 'subtype_code')"
                    @save="save()"
                  >
                    <q-select v-model="editContent.content" :options="level1Options" label="code" />
                    <!-- <q-input v-model="editContent.content" dense autofocus counter /> -->
                  </q-popup-edit>
                </q-td>
                <q-td key="subtype_name" :props="props">
                  {{ props.row.subtype_name }}
                  <q-popup-edit
                    v-model="editContent.content"
                    title="Update subtype_name"
                    buttons
                    :validate="validatePopup"
                    @before-show="bshow(props.row, 'subtype_name')"
                    @save="save()"
                  >
                    <q-select
                      v-model="editContent.content"
                      :options="level2Options"
                      label="name"
                    />
                    <!-- <q-input v-model="editContent.content" dense autofocus /> -->
                  </q-popup-edit>
                </q-td>
                <q-td key="name" :props="props">
                  <div class="text-pre-wrap">{{ props.row.name }}</div>
                  <q-popup-edit
                    v-model="editContent.content"
                    title="Update name"
                    buttons
                    :validate="validatePopup"
                    @before-show="bshow(props.row, 'name')"
                    @save="save()"
                  >
                    <q-input v-model="editContent.content" dense autofocus />
                  </q-popup-edit>
                </q-td>
                <q-td key="code" :props="props">
                  {{ props.row.code }}
                  <q-popup-edit
                    v-model="editContent.conntent"
                    title="Update code"
                    buttons
                    :validate="validatePopup"
                    @before-show="bshow(props.row, 'code')"
                    @save="save()"
                  >
                    <q-input v-model="editContent.content" dense autofocus />
                  </q-popup-edit>
                </q-td>
                <q-td key="note" :props="props">
                  {{ props.row.note }}
                  <q-popup-edit
                    v-model="editContent.content"
                    title="Update note"
                    buttons
                    :validate="validatePopup"
                    @before-show="bshow(props.row, 'note')"
                    @save="save()"
                  >
                    <q-input v-model="editContent.content" dense autofocus />
                  </q-popup-edit>
                </q-td>
                <q-td key="create_time" :props="props">{{ props.row.create_time }}</q-td>
                <q-td key="update_time" :props="props">{{ props.row.update_time }}</q-td>
                <q-td key="opr" :props="props">
                  <q-btn
                    size="sm"
                    color="red"
                    icon="delete"
                    flat
                    round
                    @click="del(props.row.id)"
                  />
                </q-td>
              </q-tr>
            </template>
          </q-table>
        </div>
      </template>
    </q-splitter>
  </div>
</template>
<style lang="sass">
.my-sticky-column-table
  /* specifying max-width so the example can
    highlight the sticky column on any browser window */
  max-width: 1000px

  thead tr:last-child th:last-child
    /* bg color is important for th; just specify one */
    background-color: #fff

  td:last-child
    background-color: #fff

  th:last-child,
  td:last-child
    position: sticky
    right: 0
    z-index: 1
</style>
<script>
import { mapGetters } from 'vuex';
import { dictIcons } from '@/utils/static';
import addDialog from '@/pages/dictionary/AddDialog';
import { updDicts, delDicts } from '@/services/personal';

export default {
  components: {
    addDialog,
  },
  data() {
    return {
      editContent: {},
      splitterModel: 25,
      selected: 'daily_life',
      columns: [
        {
          name: 'subtype_code',
          align: 'left',
          label: '父类型编码',
          field: 'subtype_code',
          sortable: true,
        },
        {
          name: 'subtype_name',
          align: 'left',
          label: '父类型名称',
          field: 'subtype_name',
          sortable: true,
        },
        {
          name: 'name',
          align: 'left',
          label: '名称',
          field: 'name',
          sortable: true,
        },
        {
          name: 'code',
          align: 'left',
          label: '编码',
          field: 'code',
          sortable: true,
        },
        {
          name: 'note',
          align: 'left',
          label: '说明',
          field: 'note',
          sortable: true,
        },
        {
          name: 'create_time',
          align: 'left',
          label: '创建时间',
          field: 'create_time',
          sortable: true,
        },
        {
          name: 'update_time',
          align: 'left',
          label: '上次修改时间',
          field: 'update_time',
          sortable: true,
        },
        {
          name: 'opr',
          align: 'center',
          label: '操作',
          field: 'opr',
        },
      ],
      pagination: {
        descending: false,
        page: 1,
        rowsPerPage: 15,
        // rowsNumber: xx if getting data from a server
      },
    };
  },
  computed: {
    ...mapGetters({
      enums: 'Personal/enums',
      enumsMap: 'Personal/enumsMap',
      enumsMapName: 'Personal/enumsMapName',
    }),
    level1Options() {
      const options = this.enums('root').map(item => {
        const each = item.code;
        // each.label = item.code;
        return each;
      });
      options.unshift('root');
      return options;
    },
    level2Options() {
      const options = this.enums('root').map(item => {
        const each = item.label;
        return each;
      });
      options.unshift('根节点');
      return options;
    },
    tableData() {
      return this.enums(this.selected, true);
    },
    root() {
      const children = this.enums('root').map((item, i) => {
        const each = item;
        each.icon = dictIcons[i];
        return each;
      });
      return [
        {
          label: 'ROOT',
          code: 'root',
          children,
        },
      ];
    },
  },
  methods: {
    getSelected() {
      console.log(this.selected);
    },
    validatePopup(val) {
      return val !== null && val !== '';
    },
    save() {
      const params = {
        id: this.editContent.id,
        [this.editContent.key]: this.editContent.content,
      };
      if (this.editContent.key === 'subtype_code') {
        // eslint-disable-next-line
        params.subtype_name =
          this.editContent.content === 'root'
            ? '根节点'
            : this.enumsMap[this.editContent.content].name;
      } else if (this.editContent.key === 'subtype_name') {
        // eslint-disable-next-line
        params.subtype_code =
          this.editContent.content === '根节点'
            ? 'root'
            : this.enumsMapName[this.editContent.content].code;
      }
      this.$q
        .dialog({
          title: '提示',
          message: '确定要修改吗?',
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          updDicts(params).then(res => {
            if (res.retCode === '000000') {
              this.$q.notify('修改成功！');
              this.$store.dispatch('Personal/getEnums');
            } else {
              this.$q.notify({
                type: 'negative',
                message: 'Exception !',
              });
            }
          });
        });
    },
    update(val) {
      console.log(val);
    },
    bshow(val, key) {
      this.editContent = {
        id: val.id,
        key,
        content: val[key],
      };
    },
    del(id) {
      this.$q
        .dialog({
          title: '提示',
          message: '确定要删除吗?',
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          delDicts({ id }).then(res => {
            if (res.retCode === '000000') {
              this.$q.notify('删除成功！');
              this.$store.dispatch('Personal/getEnums');
            } else {
              this.$q.notify({
                type: 'negative',
                message: 'Exception !',
              });
            }
          });
        });
    },
  },
};
</script>
