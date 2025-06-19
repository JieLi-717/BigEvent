import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

export default pinia

// import {useUserStore} from '@/store/modules/user'
// export {useUserStore}

export * from '@/store/modules/user'//这一行相当于上面两行，可以在此处将仓库页面进行导出，按需导出
