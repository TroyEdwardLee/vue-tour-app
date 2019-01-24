export function formatDate (val) {
  if (!val) {
    return ''
  }
  return this.$moment(val).format('YYYY-MM-DD HH:mm:ss')
}

/**
 * 转换一维数组为树形数组
 * @param  {Array} data  待转换的原始数据
 * @param  {any} topPidVal  顶级pid的值
 * @param  {String} idStr  待转换原始数据id字段
 * @param  {String} pidStr  待转换原始数据pid字段
 * @return {Array} 转换后的数组
 * @api    private
 */
export function exportTreeData (data, topPidVal, idStr, pidStr) {
  let cloneData = JSON.parse(JSON.stringify((data))) // 对源数据深度克隆
  let treeData = cloneData.filter((father) => { // 循环所有项
    let branchArr = cloneData.filter((child) => {
      return father[idStr] === child[pidStr] // 返回每一项的子级数组
    })
    if (branchArr.length > 0) {
      father.children = branchArr // 如果存在子级，则给父级添加一个children属性，并赋值
    }
    return father[pidStr] === topPidVal // 返回第一层
  })
  return treeData // 返回树形数据
}
