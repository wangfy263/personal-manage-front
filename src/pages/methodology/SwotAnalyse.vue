<template>
  <div style="height: calc(100%- 64px)">
    <q-stepper v-model="step" ref="stepper" color="primary" animated header-nav>
      <q-step :name="1" title="目标是什么？" icon="settings" :done="done1" style="min-height: 300px;">
        <q-input v-model="swot.goal_name" filled label="我要分析的目标" hint="" type="textarea" rows="15" />
      </q-step>

      <q-step :name="2" title="客观且具体的描述目标" icon="create_new_folder" :done="done2" style="min-height: 200px;">
        <q-splitter v-model="splitterModel" style="height: 550px">
          <template v-slot:before>
            <q-splitter v-model="insideModel" horizontal>
              <template v-slot:before>
                <div class="q-px-md">
                  <div class="text-h5 q-mb-md">范围（S）</div>
                  <q-input v-model="swot.goal_scope" filled label="做什么？" type="textarea" rows="10" />
                </div>
              </template>

              <template v-slot:after>
                <div class="q-px-md">
                  <div class="text-h5 q-mb-md">进度（T）</div>
                  <q-input v-model="swot.goal_time" filled label="花多少时间？" type="textarea" rows="10" />
                </div>
              </template>
            </q-splitter>
          </template>

          <template v-slot:after>
            <q-splitter v-model="insideModel" horizontal>
              <template v-slot:before>
                <div class="q-px-md">
                  <div class="text-h5 q-mb-md">质量（Q）</div>
                  <q-input v-model="swot.goal_quality" filled label="做成什么样子？" type="textarea" rows="10" />
                </div>
              </template>

              <template v-slot:after>
                <div class="q-px-md">
                  <div class="text-h5 q-mb-md">成本（C）</div>
                  <q-input v-model="swot.goal_cost" filled label="花多少钱？" type="textarea" rows="10" />
                </div>
              </template>
            </q-splitter>
          </template>
        </q-splitter>
      </q-step>

      <q-step :name="3" title="SWOT分析" icon="assignment" style="min-height: 200px;" :done="done3">
        <q-splitter v-model="splitterModel" style="height: 550px">
          <template v-slot:before>
            <q-splitter v-model="insideModel" horizontal>
              <template v-slot:before>
                <div class="q-px-md">
                  <div class="text-h5 q-mb-md">S:优势</div>
                  <q-input v-model="swot.Strengths" filled label="Strengths" type="textarea" rows="10" />
                </div>
              </template>

              <template v-slot:after>
                <div class="q-px-md">
                  <div class="text-h5 q-mb-md">O:机会</div>
                  <q-input v-model="swot.Opportunities" filled label="Opportunities" type="textarea" rows="10" />
                </div>
              </template>
            </q-splitter>
          </template>

          <template v-slot:after>
            <q-splitter v-model="insideModel" horizontal>
              <template v-slot:before>
                <div class="q-px-md">
                  <div class="text-h5 q-mb-md">W:劣势</div>
                  <q-input v-model="swot.Weaknesses" filled label="Weaknesses" type="textarea" rows="10" />
                </div>
              </template>

              <template v-slot:after>
                <div class="q-px-md">
                  <div class="text-h5 q-mb-md">T:威胁</div>
                  <q-input v-model="swot.Threats" filled label="Threats" type="textarea" rows="10" />
                </div>
              </template>
            </q-splitter>
          </template>
        </q-splitter>
      </q-step>

      <q-step :name="4" title="得出策略/战略" icon="add_comment" style="min-height: 200px;" :done="done4">
        <div class="column" style="height: 660px;">
          <div class="row col-2">
            <div class="col-2 div-lt"></div>
            <div class="col-5 div-s">
              优势(S)
            </div>
            <div class="col-5 div-w">
              劣势(W)
            </div>
          </div>
          <div class="row col-5">
            <div class="col-2" style="padding-left: 40px">
              <div class="div-o">机会(O)</div>
            </div>
            <div class="col-5 div-so">
              <div class="q-px-md">
                <div class="text-h5 q-mb-md">SO策略-利用优势，抓住威胁</div>
                <q-input v-model="swot.strategy_so" filled label="Threats" type="textarea" rows="10" />
              </div>
            </div>
            <div class="col-5 div-wo">
              <div class="q-px-md">
                <div class="text-h5 q-mb-md">WO策略-抓住机会，规避弱点</div>
                <q-input v-model="swot.strategy_wo" filled label="Threats" type="textarea" rows="10" />
              </div>
            </div>
          </div>
          <div class="row col-5">
            <div class="col-2" style="padding-left: 40px">
              <div class="div-t">威胁(T)</div>
            </div>
            <div class="col-5 div-st">
              <div class="q-px-md">
                <div class="text-h5 q-mb-md">ST策略-利用优势，躲避威胁</div>
                <q-input v-model="swot.strategy_st" filled label="Threats" type="textarea" rows="10" />
              </div>
            </div>
            <div class="col-5 div-wt">
              <div class="q-px-md">
                <div class="text-h5 q-mb-md">WT策略-规避弱点，躲避威胁</div>
                <q-input v-model="swot.strategy_wt" filled label="Threats" type="textarea" rows="10" />
              </div>
            </div>
          </div>
        </div>
      </q-step>
      <q-step :name="5" title="细化分析战略" icon="add_comment" style="min-height: 200px;" :done="done5">
        <q-splitter v-model="splitterModel" style="height: 550px">
          <template v-slot:before>
            <q-splitter v-model="insideModel" horizontal>
              <template v-slot:before>
                <div class="q-px-md">
                  <div class="text-h5 q-mb-md">如何善用每个优势</div>
                  <q-input v-model="swot.use_scheme" filled label="Use" type="textarea" rows="10" />
                </div>
              </template>

              <template v-slot:after>
                <div class="q-px-md q-pt-mx">
                  <div class="text-h5 q-mb-md">如何停止每个劣势</div>
                  <q-input v-model="swot.stop_scheme" filled label="Stop" type="textarea" rows="10" />
                </div>
              </template>
            </q-splitter>
          </template>

          <template v-slot:after>
            <q-splitter v-model="insideModel" horizontal>
              <template v-slot:before>
                <div class="q-px-md">
                  <div class="text-h5 q-mb-md">如何成就每个机会</div>
                  <q-input v-model="swot.Exploit_scheme" filled label="Exploit" type="textarea" rows="10" />
                </div>
              </template>

              <template v-slot:after>
                <div class="q-px-md q-pt-mx">
                  <div class="text-h5 q-mb-md">如何防御每个威胁</div>
                  <q-input v-model="swot.defense_scheme" filled label="Defense" type="textarea" rows="10" />
                </div>
              </template>
            </q-splitter>
          </template>
        </q-splitter>
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn @click="next()" color="primary" :label="step === 5 ? 'Finish' : 'Continue'" />
          <q-btn v-if="step > 1" flat color="primary" @click="$refs.stepper.previous()" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </template>

      <template v-slot:message>
        <q-banner v-if="step === 1" class="bg-purple-8 text-white q-px-lg">
          目标一定是可以实现的，目标要符合实际。 <br />
          √: <br />
          ×:
        </q-banner>
        <q-banner v-else-if="step === 2" class="bg-purple-8 text-white q-px-lg">
          按照“范围（S）、进度（T）、成本（C）、质量（Q）”描述目标，同时，运用SMART原则检查目标是否合理。<br />
          1. 目标必须是具体的（Specific） <br />
          2. 目标必须是可以衡量的（Measurable） <br />
          3. 目标必须是可以达到的（Attainable） <br />
          4. 目标必须和其他目标具有相关性（Relevant） <br />
          5. 目标必须具有明确的截止期限（Time-based）
        </q-banner>
        <q-banner v-else-if="step === 3" class="bg-purple-8 text-white q-px-lg">
          从不同的维度思考SWOT:<br />
          对企业来说：政治，经济，社会文化，技术，资源能力，范围，时间，质量等。<br />
          对个人来说：能力，素质，态度等。<br />
          建议最终保留“5 ± 2“条的SWOT，作为后续决策的基础。<br />
        </q-banner>
        <q-banner v-else-if="step === 4" class="bg-purple-8 text-white q-px-lg">
          SO利用策略：充分利用自己优势，抓住市场当前机会，将机会转化成最大化市场效益的对策；<br />
          WO改进策略：针对自己劣势，在新的市场机会出来时，如何弥补自己短板或者换跑道与竞争对手竞争的对策；<br />
          ST监视策略：市场有优势，但是有新的竞争对手出现，发挥自身优势削弱或者减少威胁；<br />
          WT消除策略：主要指本就是自己劣势，市场上狼多肉少，没法竞争给你，多做亏多，最好的选择就是砍掉这块业务，消除威胁。<br />
        </q-banner>
        <q-banner v-else class="bg-purple-8 text-white q-px-lg">
          对选定的目标，可以用USED技巧进一步思考，产出解决方案
        </q-banner>
      </template>
    </q-stepper>
  </div>
</template>
<script>
import { addSwot, querySwotById, updSwot } from '@/services/swot';

export default {
  data() {
    return {
      step: 1,
      done1: false,
      done2: false,
      done3: false,
      done4: false,
      done5: false,
      textarea: '',
      splitterModel: 50, // start at 50%
      insideModel: 50,
      swot: {
        goal_name: '',
        goal_scope: '',
        goal_quality: '',
        goal_time: '',
        goal_cost: '',
        Strengths: '',
        Opportunities: '',
        Weaknesses: '',
        Threats: '',
        strategy_so: '',
        strategy_wo: '',
        strategy_st: '',
        strategy_wt: '',
        use_scheme: '',
        stop_scheme: '',
        Exploit_scheme: '',
        defense_scheme: '',
      },
    };
  },
  methods: {
    next() {
      if (this.swot.id) {
        this.upd(this.swot);
      } else {
        this.add(this.swot);
      }
      this[`done${this.step}`] = true;
      this.$refs.stepper.next();
    },
    add(param) {
      addSwot(param).then(res => {
        console.log(res);
        if (res.retCode === '000000') {
          this.$set(this.swot, 'id', res.data.id);
          console.log(this.swot);
        }
      });
    },
    upd(param) {
      updSwot(param).then(() => {});
    },
    findById(id) {
      querySwotById({ id }).then(() => {});
    },
  },
};
</script>
<style scoped>
.div-lt {
  border-right: 1px solid;
  /* border-bottom: 1px solid; */
  border-color: rgba(0, 0, 0, 0.12);
}
.div-s {
  border-right: 1px solid;
  /* border-bottom: 1px solid; */
  border-color: rgba(0, 0, 0, 0.12);
  text-align: center;
}
.div-w {
  border-right: 1px solid;
  /* border-bottom: 1px solid; */
  border-color: rgba(0, 0, 0, 0.12);
  text-align: center;
}
.div-o {
  border-right: 1px solid;
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-color: rgba(0, 0, 0, 0.12);
  height: 100%;
}
.div-t {
  border-right: 1px solid;
  border-bottom: 1px solid;
  border-color: rgba(0, 0, 0, 0.12);
  height: 100%;
  /* background: #FE0000; */
}
.div-so {
  border-right: 1px solid;
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-color: rgba(0, 0, 0, 0.12);
}
.div-wo {
  border-right: 1px solid;
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-color: rgba(0, 0, 0, 0.12);
}
.div-st {
  border-right: 1px solid;
  border-bottom: 1px solid;
  border-color: rgba(0, 0, 0, 0.12);
}
.div-wt {
  border-right: 1px solid;
  border-bottom: 1px solid;
  border-color: rgba(0, 0, 0, 0.12);
}
</style>
