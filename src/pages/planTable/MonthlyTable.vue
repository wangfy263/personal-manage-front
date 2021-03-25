<template>
  <q-card class="my-card-month-table">
    <q-card-section class="flex-space-between">
      <div>
        <div class="text-h6">月计划表</div>
        <div class="text-subtitle2">月份：2020-11</div>
      </div>
    </q-card-section>

    <q-separator />

    <q-card-actions vertical>
      <div class="row">
        <div class="col-12 col-md-4">
          <div class="column">
            <div class="col-12">
              <div class="card-col-6">
                <q-card bordered class="card-table-transparent">
                  <q-card-section>
                    <div class="text-h6">本月重点工作</div>
                    <div class="text-subtitle2">本月核心KPI</div>
                  </q-card-section>

                  <q-separator inset />

                  <q-card-section style="margin-bottom: 5px">
                    <q-input prefix="1"></q-input>
                    <q-input prefix="2"></q-input>
                    <q-input prefix="3"></q-input>
                    <q-input prefix="4"></q-input>
                    <q-input prefix="5"></q-input>
                    <q-input prefix="6"></q-input>
                    <q-input prefix="7"></q-input>
                    <q-input prefix="8"></q-input>
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-8">
          <div class="column">
            <div class="col">
              <div class="row">
                <div class="col">
                  <div class="card-col-6">
                    <q-card bordered class="card-table-transparent">
                      <q-card-section>
                        <div class="text-h6">本月重点安排</div>
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
                <div class="col">
                  <div class="card-col-6">
                    <q-card bordered class="card-table-transparent">
                      <q-card-section>
                        <div class="text-h6">本月紧急/零碎事项</div>
                        <div class="text-subtitle2">突发的紧急工作/零碎工作</div>
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
                        <div class="text-h6">本月自我提升</div>
                        <div class="text-subtitle2">复习，学习</div>
                      </q-card-section>

                      <q-separator inset />

                      <q-card-section>
                        <q-input dense prefix="1"></q-input>
                        <q-input dense prefix="2"></q-input>
                        <q-input dense prefix="3"></q-input>
                      </q-card-section>
                    </q-card>
                  </div>
                </div>
                <div class="col">
                  <div class="card-col-6">
                    <q-card bordered class="card-table-transparent">
                      <q-card-section>
                        <div class="text-h6">NOTES</div>
                        <div class="text-subtitle2">笔记</div>
                      </q-card-section>

                      <q-separator inset />

                      <q-card-section>
                        <q-input dense prefix="1"></q-input>
                        <q-input dense prefix="2"></q-input>
                        <q-input dense prefix="3"></q-input>
                      </q-card-section>
                    </q-card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <q-card style="margin: 20px 10px" class="card-table-transparent">
        <q-card-actions vertical>
          <div class="row">
            <div class="col">
              <div class="wb-right"><div class="text-h6 text-center q-pa-md">WEEK 1</div></div>
              <div class="wb-top wb-right"><q-input filled type="textarea" rows="20" /></div>
            </div>
            <div class="col">
              <div class="wb-right"><div class="text-h6 text-center q-pa-md">WEEK 2</div></div>
              <div class="wb-top wb-right"><q-input filled type="textarea" rows="20" /></div>
            </div>
            <div class="col">
              <div class="wb-right"><div class="text-h6 text-center q-pa-md">WEEK 3</div></div>
              <div class="wb-top wb-right"><q-input filled type="textarea" rows="20" /></div>
            </div>
            <div class="col">
              <div class="wb-right"><div class="text-h6 text-center q-pa-md">WEEK 4</div></div>
              <div class="wb-top wb-right"><q-input filled type="textarea" rows="20" /></div>
            </div>
            <div class="col">
              <div class=""><div class="text-h6 text-center q-pa-md">WEEK 5</div></div>
              <div class="wb-top"><q-input filled type="textarea" rows="20" /></div>
            </div>
          </div>
        </q-card-actions>
      </q-card>
    </q-card-actions>
  </q-card>
</template>
<style lang="scss">
.my-card-month-table {
  background: url('../../assets/Zwps-6miGFY.jpg');
  background-size: cover;
  .q-field__prefix {
    font-size: 1.25em;
    font-weight: 500;
    line-height: 2rem;
    letter-spacing: 0.0125em;
    color: black;
  }
  .q-field--filled .q-field__control {
    background: rgba(0, 0, 0, 0);
  }
}
</style>
<style lang="scss" scoped>
.card-col-6 {
  margin: 10px;
  // background-color: aquamarine;
  .q-field__prepend {
    font-size: 14px;
  }
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
