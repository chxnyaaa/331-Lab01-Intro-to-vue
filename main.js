const { createApp, ref, computed } = Vue 
createApp({
    setup(){
        const product = ref('Boots')
        const brand = ref('SE 331')
        const description = ref('This is boots')
        // const image = ref('./assets/images/socks_green.jpg')
        const link = ref('https://www.camt.cmu.ac.th/index.php/th/')
        // const inStock = ref(true)
        const inventory = ref(7)
        // const onSale = ref(true)
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])
        const variants = ref([
            { id: 2234, color: 'green' , image: './assets/images/socks_green.jpg', quantity: 50, onSale: true },
            { id: 2235, color: 'blue' , image: './assets/images/socks_blue.jpg', quantity: 0, onSale: false}
        ])
        const selectedVariant = ref(0)

        function updateVariant(index){
            selectedVariant.value = index;
        }

        const image = computed(() => {
            return variants.value[selectedVariant.value].image
        })
        const inStock = computed(() => {
            return variants.value[selectedVariant.value].quantity
        })
        const onSale = computed(() => {
            return variants.value[selectedVariant.value].onSale
        })

        const sizes = ref([
            'S, ',
            'M, ',
            'L'
        ])
        const cart = ref(0)
        function addToCart() {
            cart.value +=1
        }
        const title = computed(() =>{
            return brand.value+' '+product.value
        })
        const onSaleTitle = computed(() => {
            return brand.value + ' ' + product.value + ' is on sale'
        })
        function updateImage(variantImage) {
            image.value = variantImage
        }
        function toggleInStock() {
            inStock.value = !inStock.value;
        }
        return {
            title,
            onSaleTitle,
            description, 
            image, 
            link,
            inStock,
            inventory,
            onSale,
            details,
            variants,
            sizes,
            cart,
            addToCart,
            updateImage,
            updateVariant,
            toggleInStock
        }
    }
}).mount('#app')