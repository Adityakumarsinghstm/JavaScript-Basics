class Product 
{
     name;
     price;
     #rating;
    constructor (n, p, r)
{
        this.name = n;
        this.price = p;
        this.#rating = r;

    }
    get RatingGetter()
    {
        console.log(this.#rating)
    }
    set RatingSetter(r)
    {
        if (r < 0) return;
        this.#rating = r;
    }
     display()
     {
         console.log("Product : ", this.name, this.price, this.#rating)
         console.log("This is display method...")
    }
    static Customer()
    {
        console.log("This is static method....")
    }
}
const p = new Product("macbook Pro",120000,7.5);
console.log(p)

p.name = "Samsung S23"
console.log(p.name)
p.RatingSetter = 7.9;
p.RatingGetter;

p.display()
Product.Customer()