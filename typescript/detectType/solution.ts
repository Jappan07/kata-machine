const detectType = (value: any) => {
    if (value == null) {
        return "null"
    }

    return (Object.getPrototypeOf(value).constructor.name ?? "object").toLowerCase()
}


export { }
