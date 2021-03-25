<template>
  <q-card class="my-card-table">
    <q-card-section class="flex-space-between">
      <div>
        <div class="text-h6">日计划表</div>
        <div class="text-subtitle2">日期：2020-11-09</div>
      </div>
    </q-card-section>

    <q-separator />

    <q-card-actions vertical>
      <div class="row">
        <div class="col-12 col-md-8">
          <div class="column">
            <div class="col">
              <div class="row">
                <div class="col">
                  <div class="card-col-6">
                    <q-card bordered class="card-table-transparent">
                      <q-card-section>
                        <div class="text-h6">重点工作</div>
                        <div class="text-subtitle2">今天一定要完成的几件事</div>
                      </q-card-section>

                      <q-separator inset />

                      <q-card-section>
                        <q-input dense prefix="1"></q-input>
                        <q-input dense prefix="2"></q-input>
                        <q-input dense prefix="3"></q-input>
                        <q-input dense prefix="4"></q-input>
                      </q-card-section>
                    </q-card>
                  </div>
                </div>
                <div class="col">
                  <div class="card-col-6">
                    <q-card bordered class="card-table-transparent">
                      <q-card-section>
                        <div class="text-h6">今日安排</div>
                        <div class="text-subtitle2">会议/拜访/调研/应酬</div>
                      </q-card-section>

                      <q-separator inset />

                      <q-card-section>
                        <q-input dense prefix="1"></q-input>
                        <q-input dense prefix="2"></q-input>
                        <q-input dense prefix="3"></q-input>
                        <q-input dense prefix="4"></q-input>
                      </q-card-section>
                    </q-card>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="row">
                <div class="col">
                  <div class="card-col-6">
                    <q-card bordered class="card-table-transparent">
                      <q-card-section>
                        <div class="text-h6">重点工作拆解</div>
                        <div class="text-subtitle2">将重点工作拆解到可以执行的程度</div>
                      </q-card-section>

                      <q-separator inset />
                      <q-card-section horizontal>
                        <q-card-section style="width:50%">
                          <q-input dense prefix="1"></q-input>
                          <q-input dense prefix="2"></q-input>
                          <q-input dense prefix="3"></q-input>
                          <q-input dense prefix="4"></q-input>
                        </q-card-section>

                        <q-separator vertical />

                        <q-card-section style="width:50%">
                          <q-input dense prefix="5"></q-input>
                          <q-input dense prefix="6"></q-input>
                          <q-input dense prefix="7"></q-input>
                          <q-input dense prefix="8"></q-input>
                        </q-card-section>
                      </q-card-section>
                    </q-card>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="row">
                <div class="col">
                  <div class="card-col-6">
                    <q-card bordered class="card-table-transparent">
                      <q-card-section>
                        <div class="text-h6">紧急任务</div>
                        <div class="text-subtitle2">突发的紧急工作，零碎工作</div>
                      </q-card-section>

                      <q-separator inset />
                      <q-card-section horizontal>
                        <q-card-section style="width:50%">
                          <q-input dense prefix="1"></q-input>
                          <q-input dense prefix="2"></q-input>
                          <q-input dense prefix="3"></q-input>
                        </q-card-section>

                        <q-separator vertical />

                        <q-card-section style="width:50%">
                          <q-input dense prefix="4"></q-input>
                          <q-input dense prefix="5"></q-input>
                          <q-input dense prefix="6"></q-input>
                        </q-card-section>
                      </q-card-section>
                    </q-card>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="row">
                <div class="col">
                  <div class="card-col-6">
                    <q-card bordered class="card-table-transparent">
                      <q-card-section>
                        <div class="text-h6">提升工作</div>
                        <div class="text-subtitle2">对自我或团队有长期价值的工作（如学习，复盘，研讨）</div>
                      </q-card-section>

                      <q-separator inset />
                      <q-card-section horizontal>
                        <q-card-section style="width:50%">
                          <q-input dense prefix="1"></q-input>
                          <q-input dense prefix="2"></q-input>
                          <q-input dense prefix="3"></q-input>
                        </q-card-section>

                        <q-separator vertical />

                        <q-card-section style="width:50%">
                          <q-input dense prefix="4"></q-input>
                          <q-input dense prefix="5"></q-input>
                          <q-input dense prefix="6"></q-input>
                        </q-card-section>
                      </q-card-section>
                    </q-card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="column">
            <div class="col-12">
              <div class="card-col-6">
                <q-card bordered class="card-table-transparent">
                  <q-card-section>
                    <div class="text-h6">日程安排</div>
                    <div class="text-subtitle2">将左边的事务放入时间表</div>
                  </q-card-section>

                  <q-separator inset />

                  <q-card-section>
                    <q-input dense prefix="7:00-8:00"></q-input>
                    <q-input dense prefix="8:00-9:00"></q-input>
                    <q-input dense prefix="9:00-10:00"></q-input>
                    <q-input dense prefix="10:00-11:00"></q-input>
                    <q-input dense prefix="11:00-12:00"></q-input>
                    <q-input dense prefix="12:00-14:00"></q-input>
                    <q-input dense prefix="14:00-15:00"></q-input>
                    <q-input dense prefix="15:00-16:00"></q-input>
                    <q-input dense prefix="16:00-17:00"></q-input>
                    <q-input dense prefix="17:00-18:00"></q-input>
                    <q-input dense prefix="18:00-19:00"></q-input>
                    <q-input dense prefix="19:00-21:00"></q-input>
                    <q-input dense prefix="21:00-23:00"></q-input>
                    <q-input dense prefix="23:00-00:00"></q-input>
                  </q-card-section>
                </q-card>
              </div>
              <div class="card-col-6">
                <q-card bordered class="card-table-transparent">
                  <q-card-section>
                    <div class="text-h6">当日小结</div>
                    <div class="text-subtitle2">待提升工作，明日建议，自我复盘</div>
                  </q-card-section>

                  <q-separator inset />

                  <q-card-section>
                    <div style="height: 293px">
                      <q-input filled type="textarea" rows="15"/>
                    </div>
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </q-card-actions>
  </q-card>
</template>
<style lang="scss" scoped>
.card-col-6 {
  margin: 10px;
  // background-color: aquamarine;
  .q-field__prepend {
    font-size: 14px;
  }
}
.my-card-table {
  // background: url('../../assets/GXOU59djQU0.jpg');
  background: url('../../assets/Zwps-6miGFY.jpg');
  background-size: cover;
}
.card-table-transparent {
  opacity:0.7;
  // background-color: rgba(255, 255, 255, 0);
}
</style>
