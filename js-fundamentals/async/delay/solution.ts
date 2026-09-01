function delay(timer: number = 0): Promise<void> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, timer);
    })
}

console.log("something before 1 sec");

await delay(1000)

console.log("something after 1 sec");

export { }
