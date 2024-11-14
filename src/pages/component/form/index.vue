<script setup lang='ts'>
import { ref } from 'vue';

const formRef = ref<any>()
const data = {
  sp: [
    { label: '社区底商', value: 'sqds' },
    { label: '商业街店铺', value: 'syjdp' },
    { label: '写字楼配套', value: 'xzlpt' },
    { label: '临街门面', value: 'ljmm' },
    { label: '档口摊位', value: 'dktw' },
    { label: '购物百货中心', value: 'gwbhzx' },
    { label: '其他', value: 'other' }
  ],
  td: [
    { label: '工业用地', value: 'gyyd' },
    { label: '住宅用地', value: 'zzyd' },
    { label: '商业用地', value: 'syyd' },
  ],
  xzl: [
    { label: '纯写字楼', value: 'cxzl' },
    { label: '商住两用楼', value: 'szlyl' },
    { label: '商业综合楼', value: 'syzhl' },
    { label: '临街门面', value: 'ljmm' },
  ],
  cw: [
    { label: '地面', value: 'dm' },
    { label: '地下', value: 'dx' },
  ],
  cf: [
    { label: '标准厂房', value: 'bzcf' },
    { label: '轻钢厂房', value: 'qgcf' },
    { label: '独院厂房', value: 'dycf' },
    { label: '园区厂房', value: 'yqcf' },
    { label: '特种厂房', value: 'tzcf' },
    { label: '其他', value: 'other' }
  ],
  ck: [
    { label: '立体库', value: 'ltk' },
    { label: '坡道库', value: 'pdk' },
    { label: '楼库', value: 'lk' },
    { label: '高台库', value: 'gtk' },
    { label: '地下库', value: 'dxk' },
    { label: '平库', value: 'pk' },
    { label: '气体库', value: 'qtk' },
    { label: '其他', value: 'other' }
  ]
}

const options = ref<any[]>([
  {
    name: 'type',
    label: '物业类型',
    type: 'radio',
    onChange: (v) => {
      typeChange(v);
      formRef.value?.setItem('childrenType', '');
    },
    span: 12,
    data: [
      { label: '商铺', value: 'sp' },
      { label: '写字楼', value: 'xzl' },
      { label: '厂房', value: 'cf' },
      { label: '仓库', value: 'ck' },
      { label: '土地', value: 'td' },
      { label: '车位', value: 'cw' }
    ],
    rules: [
      { required: true, message: '请选择物业类型' }
    ]
  },
  {
    name: 'businessType',
    label: '业务类型',
    span: 12,
    type: 'radio',
    data: [
      { label: '出售', value: 'sale' },
      { label: '出租', value: 'rent' }
    ],
    formItemProps: {
      tips: '(如果同时办理出售和出租业务，可以在本次登记完成后的界面操作【转租】和【转售】)',
    },
    rules: [
      { required: true, message: '请选择物业类型' }
    ],
  },
  {
    name: 'childrenType',
    label: '子类型',
    span: 12,
    type: 'radio',
    data: data['sp'],
    rules: [
      { required: true, message: '请选择物业类型' }
    ],
  },
  {
    name: 'title',
    label: '标题',
    span: 12,
    rules: [
      { required: true, message: '请输入标题' }
    ],
    textProps: {
      labelAlign: 'top',
    },
    initalValue: '',
  },
  {
    name: 'area',
    label: '区域',
    type: 'select',
    span: 3,
    rules: [
      { required: true, message: '请选择区域' }
    ],
    initalValue: '',
    selectProps: {
      labelAlign: 'top',
    },
    data: [
      { label: '濉溪县', value: 'sxx' },
      { label: '相山区', value: 'xsq' },
      { label: '杜集区', value: 'djq' },
      { label: '烈山区', value: 'lsq' }
    ]
  },
  {
    name: 'block',
    label: '片区',
    span: 3,
    offset: -1,
    type: 'select',
    selectProps: {
      labelAlign: 'top',
    },
    rules: [
      { required: true, message: '请选择片区' }
    ],
    data: [
      { label: '片区1', value: 'pq1' },
      { label: '片区2', value: 'pq2' },
      { label: '片区3', value: 'pq3' },
      { label: '片区4', value: 'pq4' }
    ]
  },
  {
    name: 'position',
    label: '在地图上标点',
    textProps: {
      labelAlign: 'top'
    },
    rules: [
      { required: true, message: '请在地图上标点' }
    ],
  },
  {
    name: 'address',
    label: '地址',
    span: 12,
    textProps: {
      labelAlign: 'top'
    },
    rules: [
      { required: true, message: '请在地图上地址' }
    ],
  },
  {
    name: 'houseArea',
    label: '面积',
    type: 'number',
    numberProps: {
      labelAlign: 'top',
      inputNumberProps: {
        suffix: "㎡",
        style: {
          width: '100%'
        }
      }
    },
    rules: [
      { required: true, message: '请在地图上地址' }
    ],
  },
  {
    name: 'totalPrice',
    label: '总价',
    type: 'number',
    numberProps: {
      labelAlign: 'top',
      inputNumberProps: {
        suffix: "万元",
        style: {
          width: '100%'
        }
      }
    },
    rules: [
      { required: true, message: '请在地图上地址' }
    ],
  },
  {
    name: 'buildYear',
    label: '建筑年代',
    type: 'select',
    selectProps: {
      labelAlign: 'top'
    },
    data: [
      { label: 2024, value: 2024 },
      { label: 2023, value: 2023 },
      { label: 2022, value: 2022 },
      { label: 2021, value: 2021 },
      { label: 2020, value: 2020 },
    ]
  },
  {
    name: 'empty',
  },
  {
    name: 'phone',
    label: '联系方式',
    span: 3,
    textProps: {
      labelAlign: 'top'
    }
  },
  {
    name: 'name',
    label: ' ',
    span: 2,
    textProps: {
      labelAlign: 'top'
    }
  },
  {
    name: 'relationship',
    label: ' ',
    span: 2,
    type: 'select',
    data: [{ label: '夫妻', value: '1' }, { label: '父子', value: '2' }],
    selectProps: {
      labelAlign: 'top'
    }
  },
  {
    name: 'sex',
    label: ' ',
    span: 2,
    type: 'select',
    data: [{ label: '男', value: '1' }, { label: '女', value: '2' }],
    selectProps: {
      labelAlign: 'top'
    }
  },
  {
    name: 'phoneDescription',
    label: ' ',
    span: 3,
    textProps: {
      labelAlign: 'top'
    }
  },
  {
    name: 'image',
    label: '封面图 ',
    type: 'upload',
    span: 12,
    formItemProps: {
      labelAlign: 'top'
    },
    rules: [
      { required: true, message: '请上传封面图' }
    ],
    uploadProps: {
      theme: 'image',
      showImageFileName: false
    }
  },
  {
    name: 'remark',
    label: '备注',
    type: 'textarea',
    span: 12,
    textareaProps: {
      labelAlign: 'top'
    }
  }
]);

const successAble = ref(false);

function typeChange(v) {
  console.log(v);
  console.log(data[v]);
  options.value[2].data = data[v];
}

function handleSubmit(value) {
  console.log('value', value);
  // successAble.value = true;
}

function request() {
  return Promise.resolve({
    "type": "sp",
    "businessType": "sale",
    "childrenType": "sqds",
    "title": "123",
    "area": "sxx",
    "block": "pq2",
    'image': ['https://p3-pc.douyinpic.com/img/aweme-avatar/tos-cn-avt-0015_0ff39d393338f349964dabc7179a1eb8~c5_300x300.jpeg?from=2956013662']
  });
}

function handleMainClick() {

  successAble.value = false;
}

</script>

<template>
  <t-card title="商业登记" :bordered="false">

    <t-row>
      <t-col :span="3"></t-col>
      <t-col :span="6">
        <ProForm ref="formRef" :request :marginY="20" v-if="!successAble" @submit="handleSubmit" :options="options">
          <template #form-position="{ form, rules, name }">
            <t-form-item label="在地图上标点" labelAlign="top" :name :rules>
              <t-button @click="() => {
    form.position = 1;
  }" block theme="default">标点</t-button>
            </t-form-item>
          </template>

          <template #form-empty>
            <div></div>
          </template>
        </ProForm>
      </t-col>
      <t-col :span="3"></t-col>
    </t-row>

  </t-card>
</template>

<style lang='scss'></style>