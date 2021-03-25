<template>
  <q-card class="my-card-year-table">
    <q-card-section class="flex-space-between">
      <div>
        <div class="text-h6">2020年计划表</div>
        <!-- <div class="text-subtitle2"></div> -->
      </div>
    </q-card-section>

    <q-separator />

    <q-card-actions vertical>
      <div class="row">
        <div class="col">
          <div class="card-col-6">
            <q-card bordered class="card-table-transparent">
              <q-card-section>
                <div class="text-h6">STEP 1 明确目标</div>
              </q-card-section>

              <q-separator inset />

              <q-card-section>
                <div class="row">
                  <div class="col">
                    <div class="">
                      <div class="text-h6 text-center q-pa-md"><q-icon name="looks_one" style="font-size: 25px" />基本目标</div>
                    </div>
                    <div class="q-pa-lg wb-top">
                      <q-input prefix="1"></q-input>
                      <q-input prefix="2"></q-input>
                      <q-input prefix="3"></q-input>
                      <q-input prefix="4"></q-input>
                    </div>
                  </div>
                  <div class="col">
                    <div class="">
                      <div class="text-h6 text-center q-pa-md"><q-icon name="looks_two" style="font-size: 25px" />跳跃目标</div>
                    </div>
                    <div class="q-pa-lg wb-top">
                      <q-input prefix="1"></q-input>
                      <q-input prefix="2"></q-input>
                      <q-input prefix="3"></q-input>
                      <q-input prefix="4"></q-input>
                    </div>
                  </div>
                  <div class="col">
                    <div class="">
                      <div class="text-h6 text-center q-pa-md"><q-icon name="looks_3" style="font-size: 25px" />冲刺目标</div>
                    </div>
                    <div class="q-pa-lg wb-top">
                      <q-input prefix="1"></q-input>
                      <q-input prefix="2"></q-input>
                      <q-input prefix="3"></q-input>
                      <q-input prefix="4"></q-input>
                    </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="card-col-6">
            <q-card bordered class="card-table-transparent">
              <q-card-section>
                <div class="text-h6">STEP 2 达成目标的路径</div>
              </q-card-section>

              <q-separator inset />

              <q-card-section>
                <div class="row">
                  <div class="col">
                    <div class="">
                      <div class="text-h6 text-center q-pa-md wb-right">阶段</div>
                    </div>
                    <div class="q-pa-lg wb-top wb-right"></div>
                    <div class="q-pa-lg wb-top wb-right"></div>
                  </div>
                  <div class="col">
                    <div class="">
                      <div class="text-h6 text-center q-pa-md wb-right">增加</div>
                    </div>
                    <div class="q-pa-lg wb-top wb-right"></div>
                    <div class="q-pa-lg wb-top wb-right"></div>
                  </div>
                  <div class="col">
                    <div class="">
                      <div class="text-h6 text-center q-pa-md wb-right">保留</div>
                    </div>
                    <div class="q-pa-lg wb-top wb-right"></div>
                    <div class="q-pa-lg wb-top wb-right"></div>
                  </div>
                  <div class="col">
                    <div class="">
                      <div class="text-h6 text-center q-pa-md">删除</div>
                    </div>
                    <div class="q-pa-lg wb-top"></div>
                    <div class="q-pa-lg wb-top"></div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </q-card-actions>
  </q-card>
</template>
<script>
// eslint-disable-next-line
// import { looks_one } from '@quasar/extras/material-icons';

export default {
  data() {
    return {
      step: 4,
      // looksOne: looks_one,
    };
  },
};
</script>
<style lang="scss" scoped>
.card-col-6 {
  margin: 10px;
  // background-color: aquamarine;
  .q-field__prepend {
    font-size: 14px;
  }
}
.my-card-year-table {
  // background: url('../../assets/GXOU59djQU0.jpg');
  background: url('../../assets/Zwps-6miGFY.jpg');
  background-size: cover;
}
.card-table-transparent {
  opacity: 0.7;
  // background-color: rgba(255, 255, 255, 0);
}
.wb-top {
  border-top: black solid 1px;
}
.wb-bottom {
  border-bottom: black solid 1px;
}
.wb-left {
  border-left: black solid 1px;
}
.wb-right {
  border-right: black solid 1px;
}
</style>
