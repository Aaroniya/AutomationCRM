exports.HomePage = class HomePage {
    constructor(page) {
        this.page = page;
        this.productList  = page.locator("//a[normalize-space()='Nexus 6']"); // Locator object (correct usage below)
        this.addtoCartbtn = page.locator("//a[normalize-space()='Add to cart']"); 
        this.cart = page.locator("//a[@id='cartur']");
    }

    async addProductToCart(ProductName) {
        const productList = await this.productList.all(); // Use .all() to get elements from Locator
        for (const product of productList) {
            if (ProductName === await product.textContent()) {
                await product.click();
                break;
            }
        }

        // Handle the "Add to Cart" confirmation dialog
        this.page.on('dialog', async (dialog) => {
            if (dialog.message().includes('added')) {
                await dialog.accept();
            }
        });

        await this.productList.click(); // Click the "Add to cart" button
        await this.addtoCartbtn.click(); // Click the "Add to cart" button
    }

    async gotoCart() {
        await this.cart.click();
    }
};

