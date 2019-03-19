/**
 * Author zouxiang
 * Create Time: 2019-03-15
 * Description:
 */
window.class_code_config = [
  {
    name: '1~4年级',
    code: './static/class1_4.jpg'
  },
  {
    name: '五年级',
    code: './static/class5.jpg'
  },
  {
    name: '六年级',
    code: './static/class6.jpg'
  },
  {
    name: '七年级',
    code: './static/class7.jpg'
  },
  {
    name: '八年级',
    code: './static/class8.jpg'
  },
  {
    name: '九年级及以上',
    code: './static/class9+.jpg'
  }
]
window.class_code_config.forEach(function (item) {
  item.code = item.code + '?version=' + Date.now()
})
