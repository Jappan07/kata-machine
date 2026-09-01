function createCounter() {
    let counter = 0;
    return {
        increment: () => {
            counter += 1;
        },
        decrement: () => {
            counter -= 1;
        },
        getValue: () => {
            return counter;
        }
    }
}


const counter = createCounter()
counter.increment()
counter.decrement()
counter.increment()
console.log(counter.getValue())
