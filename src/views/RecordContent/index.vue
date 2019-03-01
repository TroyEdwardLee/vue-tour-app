<template>
  <div style="margin-top: 2rem;">
    <tree-transfer
      v-show="false"
      :title="title"
      :from_data="JsonData"
      :to_data="toData"
      :defaultProps="{label:'label'}"
      @addBtn="add"
      @removeBtn="remove"
      :mode="mode"
      height="540px"
      filter
      openAll
    ></tree-transfer>
    <el-row :gutter="20">
      <ElCol :span="10">
        <draggable element="ul" class="list-group scroll-style" :options="{group:'columns'}" v-model="tableDragSourceColumns" @start="drag=true" @end="drag=false">
          <li class="list-group-item" v-for="element in tableDragSourceColumns" :key="element.key">
            <input type="checkbox" name="element.showText" id="'item' + index">
            <label for="'item' + index">
              {{element.showText}}
            </label>
          </li>
        </draggable>
      </ElCol>
      <ElCol :span="2"></ElCol>
      <ElCol :span="10">
        <draggable element="ul" class="list-group scroll-style" :options="{group:'columns'}" v-model="tableDragTargetColumns" @start="drag=true" @end="drag=false">
          <li class="list-group-item" v-for="element in tableDragTargetColumns" :key="element.key">
            {{element.showText}}
          </li>
        </draggable>
      </ElCol>
    </el-row>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import treeTransfer from 'el-tree-transfer' // 引入
import { exportTreeData } from '@/utils/index' // 引入
export default {
  name: 'RecordContent',
  data () {
    return {
      title: ['Source', 'Target'],
      mode: 'transfer', // transfer addressList
      fromData: [
        {
          id: '1',
          pid: 0,
          label: '一级 1',
          children: [
            {
              id: '1-1',
              pid: '1',
              label: '二级 1-1',
              children: []
            },
            {
              id: '1-2',
              pid: '1',
              label: '二级 1-2',
              children: [
                {
                  id: '1-2-1',
                  pid: '1-2',
                  children: [],
                  label: '二级 1-2-1'
                },
                {
                  id: '1-2-2',
                  pid: '1-2',
                  children: [],
                  label: '二级 1-2-2'
                }
              ]
            }
          ]
        }
      ],
      responseData: {
        success: true,
        result: [
          {
            scenarioId: 0,
            scenarioName: '数据处理类',
            domainId: 2,
            moduleId: 27,
            threadNum: '7',
            waitTime: '1',
            durationTime: null,
            machineCount: '4',
            updatedAt: 1547810019000,
            createdAt: 1547804332000,
            createdBy: null,
            updatedBy: 'admin',
            dataPackageId: -361286722,
            typeId: 'top',
            serverPackageId: null,
            typeName: '数据处理类',
            domainName: '光',
            moduleName: 'TEST_TEST',
            serverPackageName: '',
            dataPackageName: '协议类包'
          },
          {
            scenarioId: 1,
            scenarioName: '协议类',
            domainId: 2,
            moduleId: 27,
            threadNum: '7',
            waitTime: '1',
            durationTime: null,
            machineCount: '4',
            updatedAt: 1547810019000,
            createdAt: 1547804332000,
            createdBy: null,
            updatedBy: 'admin',
            dataPackageId: -361286722,
            typeId: 'top',
            serverPackageId: null,
            typeName: '协议类',
            domainName: '光',
            moduleName: 'TEST_TEST',
            serverPackageName: '',
            dataPackageName: '协议类包'
          },
          {
            scenarioId: 165,
            scenarioName: '的事实',
            domainId: 2,
            moduleId: 27,
            threadNum: '7',
            waitTime: '1',
            durationTime: null,
            machineCount: '4',
            updatedAt: 1547810019000,
            createdAt: 1547804332000,
            createdBy: null,
            updatedBy: 'admin',
            dataPackageId: -361286722,
            typeId: 1,
            serverPackageId: null,
            typeName: '协议类',
            domainName: '光',
            moduleName: 'TEST_TEST',
            serverPackageName: '',
            dataPackageName: '协议类包'
          },
          {
            scenarioId: 145,
            scenarioName: '场景测试修改',
            domainId: 4,
            moduleId: 1,
            threadNum: '3',
            waitTime: '0',
            durationTime: null,
            machineCount: '4',
            updatedAt: 1547809958000,
            createdAt: 1547665755000,
            createdBy: null,
            updatedBy: 'admin',
            dataPackageId: 524187595,
            typeId: 1,
            serverPackageId: null,
            typeName: '协议类',
            domainName: 'IOT',
            moduleName: 'ss-pre/ss-cal',
            serverPackageName: '',
            dataPackageName: '待审的'
          },
          {
            scenarioId: 146,
            scenarioName: '新数据场景8188',
            domainId: 4,
            moduleId: 1,
            threadNum: '2',
            waitTime: '1',
            durationTime: null,
            machineCount: '1',
            updatedAt: 1547809964000,
            createdAt: 1547666096000,
            createdBy: null,
            updatedBy: 'admin',
            dataPackageId: 524187595,
            typeId: 1,
            serverPackageId: null,
            typeName: '协议类',
            domainName: 'IOT',
            moduleName: 'ss-pre/ss-cal',
            serverPackageName: '',
            dataPackageName: '待审的'
          },
          {
            scenarioId: 156,
            scenarioName: '数据包待审的',
            domainId: 4,
            moduleId: 1,
            threadNum: '4',
            waitTime: '0',
            durationTime: null,
            machineCount: '4',
            updatedAt: 1547809970000,
            createdAt: 1547667720000,
            createdBy: null,
            updatedBy: 'admin',
            dataPackageId: 524187595,
            typeId: 1,
            serverPackageId: null,
            typeName: '协议类',
            domainName: 'IOT',
            moduleName: 'ss-pre/ss-cal',
            serverPackageName: '',
            dataPackageName: '待审的'
          },
          {
            scenarioId: 157,
            scenarioName: '11new',
            domainId: 4,
            moduleId: 1,
            threadNum: '5',
            waitTime: '1',
            durationTime: null,
            machineCount: '5',
            updatedAt: 1547809976000,
            createdAt: 1547716648000,
            createdBy: null,
            updatedBy: 'admin',
            dataPackageId: 524187595,
            typeId: 1,
            serverPackageId: null,
            typeName: '协议类',
            domainName: 'IOT',
            moduleName: 'ss-pre/ss-cal',
            serverPackageName: '',
            dataPackageName: '待审的'
          },
          {
            scenarioId: 160,
            scenarioName: '新数据场景888',
            domainId: 4,
            moduleId: 1,
            threadNum: '2',
            waitTime: '1',
            durationTime: null,
            machineCount: '1',
            updatedAt: 1547809983000,
            createdAt: 1547718823000,
            createdBy: null,
            updatedBy: 'admin',
            dataPackageId: 524187595,
            typeId: 1,
            serverPackageId: null,
            typeName: '协议类',
            domainName: 'IOT',
            moduleName: 'ss-pre/ss-cal',
            serverPackageName: '',
            dataPackageName: '待审的'
          },
          {
            scenarioId: 169,
            scenarioName: 'id修改',
            domainId: 4,
            moduleId: 3,
            threadNum: '6',
            waitTime: '1',
            durationTime: null,
            machineCount: '4',
            updatedAt: 1547809893000,
            createdAt: 1547809893000,
            createdBy: null,
            updatedBy: null,
            dataPackageId: -278466164,
            typeId: 1,
            serverPackageId: null,
            typeName: '协议类',
            domainName: 'IOT',
            moduleName: 'wormhole',
            serverPackageName: '',
            dataPackageName: '咯咯咯30'
          },
          {
            scenarioId: 153,
            scenarioName: '777',
            domainId: 4,
            moduleId: 4,
            threadNum: '2',
            waitTime: '0',
            durationTime: null,
            machineCount: '5',
            updatedAt: 1547809914000,
            createdAt: 1547666857000,
            createdBy: null,
            updatedBy: 'admin',
            dataPackageId: 1833835864,
            typeId: 1,
            serverPackageId: null,
            typeName: '协议类',
            domainName: 'IOT',
            moduleName: 'rule-engine',
            serverPackageName: '',
            dataPackageName: '任务停止'
          },
          {
            scenarioId: 158,
            scenarioName: 'testlyg001-update',
            domainId: 4,
            moduleId: 4,
            threadNum: '2',
            waitTime: '3000',
            durationTime: null,
            machineCount: '3',
            updatedAt: 1547809920000,
            createdAt: 1547717437000,
            createdBy: null,
            updatedBy: 'admin',
            dataPackageId: 1833835864,
            typeId: 1,
            serverPackageId: null,
            typeName: '协议类',
            domainName: 'IOT',
            moduleName: 'rule-engine',
            serverPackageName: '',
            dataPackageName: '任务停止'
          },
          {
            scenarioId: 159,
            scenarioName: 'testlyg-002',
            domainId: 4,
            moduleId: 4,
            threadNum: '3',
            waitTime: '1000',
            durationTime: null,
            machineCount: '2',
            updatedAt: 1547809926000,
            createdAt: 1547717674000,
            createdBy: null,
            updatedBy: 'admin',
            dataPackageId: 1833835864,
            typeId: 1,
            serverPackageId: null,
            typeName: '协议类',
            domainName: 'IOT',
            moduleName: 'rule-engine',
            serverPackageName: '',
            dataPackageName: '任务停止'
          },
          {
            scenarioId: 168,
            scenarioName: 'testxb001',
            domainId: 4,
            moduleId: 6,
            threadNum: '2',
            waitTime: '1',
            durationTime: null,
            machineCount: '1',
            updatedAt: 1547810011000,
            createdAt: 1547808064000,
            createdBy: null,
            updatedBy: 'admin',
            dataPackageId: 273656191,
            typeId: 1,
            serverPackageId: null,
            typeName: '协议类',
            domainName: 'IOT',
            moduleName: '新消息服务rocketmq',
            serverPackageName: '',
            dataPackageName: '好不好ya'
          },
          {
            scenarioId: 161,
            scenarioName: '新数据场景888',
            domainId: 4,
            moduleId: 6,
            threadNum: '2',
            waitTime: '1',
            durationTime: null,
            machineCount: '1',
            updatedAt: 1547809993000,
            createdAt: 1547718854000,
            createdBy: null,
            updatedBy: 'admin',
            dataPackageId: 211129483,
            typeId: 1,
            serverPackageId: null,
            typeName: '协议类',
            domainName: 'IOT',
            moduleName: '新消息服务rocketmq',
            serverPackageName: '',
            dataPackageName: '说是'
          },
          {
            scenarioId: 171,
            scenarioName: '创建人西安市么',
            domainId: 4,
            moduleId: 6,
            threadNum: '6',
            waitTime: '1',
            durationTime: null,
            machineCount: '5',
            updatedAt: 1547810341000,
            createdAt: 1547810341000,
            createdBy: null,
            updatedBy: null,
            dataPackageId: 211129483,
            typeId: 1,
            serverPackageId: null,
            typeName: '协议类',
            domainName: 'IOT',
            moduleName: '新消息服务rocketmq',
            serverPackageName: '',
            dataPackageName: '说是'
          },
          {
            scenarioId: 173,
            scenarioName: 'kkks',
            domainId: 4,
            moduleId: 6,
            threadNum: '7',
            waitTime: '1',
            durationTime: null,
            machineCount: '5',
            updatedAt: 1547812266000,
            createdAt: 1547812266000,
            createdBy: null,
            updatedBy: null,
            dataPackageId: 38,
            typeId: 1,
            serverPackageId: null,
            typeName: '协议类',
            domainName: 'IOT',
            moduleName: '新消息服务rocketmq',
            serverPackageName: null,
            dataPackageName: null
          },
          {
            scenarioId: 170,
            scenarioName: 'testxb001复制',
            domainId: 4,
            moduleId: 7,
            threadNum: '2',
            waitTime: '1',
            durationTime: null,
            machineCount: '1',
            updatedAt: 1547810049000,
            createdAt: 1547810049000,
            createdBy: null,
            updatedBy: null,
            dataPackageId: 1994336104,
            typeId: 1,
            serverPackageId: null,
            typeName: '协议类',
            domainName: 'IOT',
            moduleName: '文件存储服务cephfs',
            serverPackageName: '',
            dataPackageName: '啦啦啦'
          },
          {
            scenarioId: 172,
            scenarioName: 'ss',
            domainId: 4,
            moduleId: 7,
            threadNum: '6',
            waitTime: '0',
            durationTime: null,
            machineCount: '5',
            updatedAt: 1547812186000,
            createdAt: 1547812186000,
            createdBy: null,
            updatedBy: null,
            dataPackageId: 67,
            typeId: 1,
            serverPackageId: null,
            typeName: '协议类',
            domainName: 'IOT',
            moduleName: '文件存储服务cephfs',
            serverPackageName: null,
            dataPackageName: null
          },
          {
            scenarioId: 174,
            scenarioName: 'testrun',
            domainId: 4,
            moduleId: 25,
            threadNum: '6',
            waitTime: '',
            durationTime: null,
            machineCount: '1',
            updatedAt: 1548037734000,
            createdAt: 1548037734000,
            createdBy: null,
            updatedBy: null,
            dataPackageId: 78,
            typeId: 1,
            serverPackageId: null,
            typeName: '协议类',
            domainName: 'IOT',
            moduleName: 'iot_mqtt_broker',
            serverPackageName: null,
            dataPackageName: null
          }
        ],
        errorCode: '0',
        errorMsg: 'Success'
      },
      toData: [],
      tableDragTargetColumns: [],
      tableDragSourceColumns: [
        {
          'showText': 'dog 1',
          'key': 1
        },
        {
          'showText': 'dog 2',
          'key': 2
        },
        {
          'showText': 'dog 3',
          'key': 3
        },
        {
          'showText': 'dog 4',
          'key': 4
        }
      ]
    }
  },
  computed: {
    JsonData: function () {
      return this._pickUseableData()
    }
  },
  mounted () {
    let pickedData = this._pickUseableData()
    console.log(pickedData)
  },
  methods: {
    // 切换模式 现有树形穿梭框模式transfer 和通讯录模式addressList
    changeMode () {
      if (this.mode === 'transfer') {
        this.mode = 'addressList'
      } else {
        this.mode = 'transfer'
      }
    },
    // 监听穿梭框组件添加
    add (fromData, toData, obj) {
      // 树形穿梭框模式transfer时，返回参数为左侧树移动后数据、右侧树移动后数据、移动的        {keys,nodes,halfKeys,halfNodes}对象
      // 通讯录模式addressList时，返回参数为右侧收件人列表、右侧抄送人列表、右侧密送人列表
      console.log('fromData:', fromData)
      console.log('toData:', toData)
      console.log('obj:', obj)
    },
    // 监听穿梭框组件移除
    remove (fromData, toData, obj) {
      // 树形穿梭框模式transfer时，返回参数为左侧树移动后数据、右侧树移动后数据、移动的{keys,nodes,halfKeys,halfNodes}对象
      // 通讯录模式addressList时，返回参数为右侧收件人列表、右侧抄送人列表、右侧密送人列表
      console.log('fromData:', fromData)
      console.log('toData:', toData)
      console.log('obj:', obj)
    },
    _pickUseableData () {
      let that = this
      let pickedData = []
      let cloneData = that._.cloneDeep(that.responseData.result)
      cloneData.forEach(element => {
        Object.assign(element, {id: element.scenarioId, pid: element.typeId, label: element.scenarioName})
        pickedData.push(that._.pick(element, ['id', 'pid', 'label']))
      })
      // return pickedData
      return exportTreeData(pickedData, 'top', 'id', 'pid')
    },
    exportTreeData
  },
  components: { treeTransfer, draggable } // 注册
}
</script>
<style scoped>
.list-group {
  border: 1px solid #eee;
  height: 300px;
  width: 160px;
  list-style: none;
}
.list-group-item {
  cursor: move;
}
</style>
