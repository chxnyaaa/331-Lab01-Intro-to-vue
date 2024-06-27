const productDisplay = {

    template: 
    /*html*/
    ` 
    <div class="product-display">
            <div class="product-container">
                <div class="product-image">
                    <img :src="image" :class="{outOfStockImage: !inStock}"/>
                </div>
            </div>
        </div>
        <div class="product-info">
            <h1 v-if=""onSale><a href="productLink" target="_blank">{{onSaleTitle}}</a></h1>
            <h1 v-else><a href="productLink" target="_blank">{{title}}</a></h1>
            <p>{{description}}</p>
            <p v-if="!inStock || inventory === 0">Out of Stock</p>
            <p v-else-if="inventory > 10">In Stock</p>
            <p v-else>Almost out of Stock</p>
            <p>Shipping: {{shipping}}</p>
            <p v-if="onSale">The product is on sale</p>
            <p v-else>The product is not sale</p>
            <product-details :details></product-details>
            <div v-for="variant, index in variants" :key="variant.id"
            @mouseover="updateVariant(index)" 
            class="color-circle" :style="{backgroundColor: variant.color}">
            </div>
            <button class="button" :disabled='!inStock' @click="addToCart"
            :class="{disabledButton: !inStock}">Add To Cart</button>
            <button class="button" @click="toggleInStock">Toggle Stock</button>
            <p><span v-for ="size in sizes" >{{size}}</span></p>
        </div>
    `,
    props: {
        premium: Boolean,
        details: Array
    },
    setup(props, { emit }) {
        const shipping = computed(()=> {
            if (props.premium) {
                return 'Free'
            } else {
                return 30
            }
        })
        const product = ref('Boots')
        const brand = ref('SE 331')
        const description = ref('This is boots')
        // const image = ref('./assets/images/socks_green.jpg')
        const link = ref('https://www.camt.cmu.ac.th/index.php/th/')
        // const inStock = ref(true)
        const inventory = ref(7)
        // const onSale = ref(true)

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
            emit('add-to-cart')
            console.log(cart.value)
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
            variants,
            sizes,
            cart,
            addToCart,
            updateImage,
            updateVariant,
            toggleInStock,
            shipping
        }
    }
}