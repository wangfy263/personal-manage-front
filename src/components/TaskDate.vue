<template>
  <q-card class="my-card">
    <!-- <q-card-section> </q-card-section> -->
    <div class="q-pa-md">
      <div class="q-gutter-md" style="display: flex; flex-wrap: wrap">
        <q-date v-model="date" :events="eventsFn" />
        <q-list bordered padding style="max-width: 650px">
          <q-item-label header>任务列表</q-item-label>

          <q-item tag="label" v-ripple>
            <q-item-section side top>
              <q-checkbox v-model="check1" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Notifications</q-item-label>
              <q-item-label caption>
                Notify me about updates to apps or games that I downloaded
              </q-item-label>
            </q-item-section>
            <q-item-section side top>
              <div class="text-grey-8 q-gutter-xs">
                <q-btn class="gt-xs" size="12px" flat dense round icon="delete" />
                <q-btn class="gt-xs" size="12px" flat dense round icon="done" />
                <q-btn size="12px" flat dense round icon="more_vert" />
              </div>
            </q-item-section>
          </q-item>
          <q-item tag="label" v-ripple>
            <q-item-section side top>
              <q-checkbox v-model="check2" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Sound</q-item-label>
              <q-item-label caption>
                Auto-update apps at anytime. Data charges may apply
              </q-item-label>
            </q-item-section>
            <q-item-section side top>
              <div class="text-grey-8 q-gutter-xs">
                <q-btn class="gt-xs" size="12px" flat dense round icon="delete" />
                <q-btn class="gt-xs" size="12px" flat dense round icon="done" />
                <q-btn size="12px" flat dense round icon="more_vert" />
              </div>
            </q-item-section>
          </q-item>

          <q-item tag="label" v-ripple>
            <q-item-section side top>
              <q-checkbox v-model="check3" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Auto-add widgets</q-item-label>
              <q-item-label caption>
                Automatically add home screen widgets
              </q-item-label>
            </q-item-section>
            <q-item-section side top>
              <div class="text-grey-8 q-gutter-xs">
                <q-btn class="gt-xs" size="12px" flat dense round icon="delete" />
                <q-btn class="gt-xs" size="12px" flat dense round icon="done" />
                <q-btn size="12px" flat dense round icon="more_vert" />
              </div>
            </q-item-section>
          </q-item>
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
export default {
  data() {
    return {
      date: '2020/07/19',
      check1: true,
      check2: false,
      check3: false,
    };
  },
  methods: {
    eventsFn(date) {
      const parts = date.split('/');
      return parts[2] % 2 === 0;
    },
  },
};
</script>
