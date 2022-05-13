/// <reference types="vite/client" />

declare module '*.vue' {
    import { defineComponent } from 'vue'
    const Component:ReturnType<defineComponent>
    export default Component
}
