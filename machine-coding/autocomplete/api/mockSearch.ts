export type SearchResult = {
    id: string
    label: string
}

const DATA: SearchResult[] = [
    { id: "1", label: "React" },
    { id: "2", label: "Redux" },
    { id: "3", label: "Next.js" },
    { id: "4", label: "TypeScript" },
    { id: "5", label: "JavaScript" },
]

export function mockSearch(query: string): Promise<SearchResult[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const normalizedQuery = query.toLowerCase()

            resolve(
                DATA.filter((item) =>
                    item.label.toLowerCase().includes(normalizedQuery)
                )
            )
        }, 500)
    })
}
