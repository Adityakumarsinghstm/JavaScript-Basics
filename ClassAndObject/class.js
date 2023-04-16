class Product
{
    pName;
    price;
    rating;
    constructor(n, p, r)
    {
        console.log("Calling the constructor.....")
        this.pName = n;
        this.price = p; 
        this.rating = r;
        // return 10;
        // return {x:20, y:90}
    }
    display()
    {
        console.log("this refers to : " ,this)
        console.log("this is display product ",this.pName,this.price,this.rating)
    }
}
const p = new Product("iphone",120000,8.5);
console.log(p)
p.display()
