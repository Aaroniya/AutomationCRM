exports.CartPage=class CartPage{


    constructor(page){
        this.page=page;
        this.noOfProducts=page.locator('//tbody[@id="tbodyid"]')

    }
    async checkProductInCart(ProductName){
        //const productInCart=await this.page.$$(this.noOfProducts)
        const productInCart = await this.noOfProducts.all(); 

        for (const product of productInCart) {  
            const productText = await product.textContent(); // ✅ Store text content
            console.log(productText);
            if (ProductName === productText) {
        


        // for(const product of productInCart)
        //     console.log(await product.textContent())
        // if(ProductName === await product.textContent()){
        
            return true;
            //break;
        }
    }
}
}