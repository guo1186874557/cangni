import type { App } from 'vue'
import {
  ElButton,
  ElCarousel,
  ElCarouselItem,
  ElContainer,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElFooter,
  ElHeader,
  ElMain
} from 'element-plus'
export default {
  install (app:App) {
    app.component('ElButton', ElButton)
    app.component('ElContainer', ElContainer)
    app.component('ElHeader', ElHeader)
    app.component('ElMain', ElMain)
    app.component('ElFooter', ElFooter)
    app.component('ElDropdown', ElDropdown)
    app.component('ElDropdownMenu', ElDropdownMenu)
    app.component('ElDropdownItem', ElDropdownItem)
    app.component('ElCarousel', ElCarousel)
    app.component('ElCarouselItem', ElCarouselItem)
  }
}
