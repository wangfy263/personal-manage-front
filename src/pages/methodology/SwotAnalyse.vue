<template>
  <div>
    <q-stepper v-model="step" ref="stepper" color="primary" animated header-nav>
      <q-step :name="1" title="目标是什么？" icon="settings" :done="done1" style="min-height: 200px;">
        <q-input v-model="text" filled autogrow label="我要分析的目标" hint="" />
      </q-step>

      <q-step :name="2" title="客观且具体的描述目标" caption="Optional" icon="create_new_folder" :done="done2" style="min-height: 200px;">
        范围-做什么？ 进度-花多少时间？ 质量-做成什么样子？ 成本-花多少钱？
      </q-step>

      <q-step :name="3" title="SWOT分析" icon="assignment" style="min-height: 200px;" :done="done3">
        This step won't show up because it is disabled.
      </q-step>

      <q-step :name="4" title="得出策略/战略" icon="add_comment" style="min-height: 200px;" :done="done4">
        Try out different ad text to see what brings in the most customers, and learn how to enhance your ads using features like ad extensions. If
        you run into any problems with your ads, find out how to tell if they're running and how to resolve approval issues.
      </q-step>
      <q-step :name="5" title="细化分析战略" icon="add_comment" style="min-height: 200px;" :done="done5">
        Try out different ad text to see what brings in the most customers, and learn how to enhance your ads using features like ad extensions. If
        you run into any problems with your ads, find out how to tell if they're running and how to resolve approval issues.
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn @click="$refs.stepper.next()" color="primary" :label="step === 4 ? 'Finish' : 'Continue'" />
          <q-btn v-if="step > 1" flat color="primary" @click="$refs.stepper.previous()" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </template>

      <template v-slot:message>
        <q-banner v-if="step === 1" class="bg-purple-8 text-white q-px-lg">
          目标一定是可以实现的，目标要符合实际。 <br />
          good: <br />
          bad:
        </q-banner>
        <q-banner v-else-if="step === 2" class="bg-purple-8 text-white q-px-lg">
          1. 目标必须是具体的（Specific） <br />
          2. 目标必须是可以衡量的（Measurable） <br />
          3. 目标必须是可以达到的（Attainable） <br />
          4. 目标必须和其他目标具有相关性（Relevant） <br />
          5. 目标必须具有明确的截止期限（Time-based）
        </q-banner>
        <q-banner v-else-if="step === 3" class="bg-purple-8 text-white q-px-lg">
          The Ad template is disabled - this won't be displayed
        </q-banner>
        <q-banner v-else-if="step === 4" class="bg-purple-8 text-white q-px-lg">
          The final step is creating the ad...
        </q-banner>
        <q-banner v-else class="bg-purple-8 text-white q-px-lg">
          The final step is creating the ad...
        </q-banner>
      </template>
    </q-stepper>
  </div>
</template>
<script>
export default {
  data() {
    return {
      step: 1,
      done1: false,
      done2: false,
      done3: false,
      done4: false,
      done5: false,
    };
  },
};
</script>
