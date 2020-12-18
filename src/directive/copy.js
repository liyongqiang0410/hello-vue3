import { message } from 'ant-design-vue';
export default {
  mounted(el, binding) {
    el.$value = binding.value
    el.handler = () => {
      if (!el.$value) {
        console.log('无复制内容')
        return
      }
      const textarea = document.createElement('textarea')
      textarea.readOnly = 'readonly'
      textarea.style.position = 'absolute'
      textarea.style.left = '-9999px'
      textarea.value = el.$value
      document.body.appendChild(textarea)
      textarea.select()
      const result = document.execCommand('Copy')
      if (result) {
        message.success('This is a success message')
      }
      document.body.removeChild(textarea)
    }
    el.addEventListener('click', el.handler)
  },
  updated(el, binding) {
    el.$value = binding.value
    el.handler = () => {
      if (!el.$value) {
        message.error('无复制内容')
        return
      }
      const textarea = document.createElement('textarea')
      // 将该 textarea 设为 readonly 防止 iOS 下自动唤起键盘，同时将 textarea 移出可视区域
      textarea.readOnly = 'readonly'
      textarea.style.position = 'absolute'
      textarea.style.left = '-9999px'
      textarea.value = el.$value
      document.body.appendChild(textarea)
      textarea.select()
      const result = document.execCommand('Copy')
      if (result) {
        message.success('复制成功')
      }
      document.body.removeChild(textarea)
    }
  },
}