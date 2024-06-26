const { createApp, ref } = Vue 
createApp({
    setup(){
        const product = ref('Boots')
        const description = ref('This is boots')
        const image = ref('./assets/images/socks_green.jpg')
        return {
            product, description, image
        }
    }
}).mount('#app')