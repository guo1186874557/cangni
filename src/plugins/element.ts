import type { App } from 'vue'
import { ElButton } from 'element-plus'
export default {
  install (app:App) {
    app.component('ElButton', ElButton)
  }
}
