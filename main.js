const { createApp, ref } = Vue 
createApp({
    setup(){
        const product = ref('Boots')
        const description = ref('This is boots')
        return {
            product, description
        }
    }
}).mount('#app')