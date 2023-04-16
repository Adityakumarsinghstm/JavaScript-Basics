class ComplexNumber
{
    #image;
    #real;
    constructor(i, r)
    {
        this.#image = i;
        this.#real = r;
    }
    display()
    {
        console.log(this.#real ," + i",this.#image)
    }
}
const c1 = new ComplexNumber(2,5)
c1.display()