const price = {
    amount: 99,
    currency: "USD",

    [Symbol.toPrimitive](hint: string) {
        if (hint === "number") return this.amount;
        if (hint === "string") return `${this.currency} ${this.amount}`;
        return this.amount;
    }
};



Number(price) // 99
String(price) // "USD 99"
price + 1 // 100

export { }
