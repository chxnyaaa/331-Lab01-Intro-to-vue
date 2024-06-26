const { createApp, ref } = Vue 
createApp({
    setup(){
        const product = ref('Boots')
        const description = ref('This is boots')
        const image = ref('./assets/images/socks_green.jpg')
        const link = ref('https://www.camt.cmu.ac.th/index.php/th/')
        const inStock = ref(true)
        const inventory = ref(10)
        const onSale = ref(true)
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])
        const variants = ref([
            { id: 2234, color: 'green' },
            { id: 2235, color: 'blue' }
        ])
        return {
            product, 
            description, 
            image, 
            link,
            inStock,
            inventory,
            onSale,
            details,
            variants
        }
    }
}).mount('#app')