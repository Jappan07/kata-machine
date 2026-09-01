import { useEffect, useMemo, useRef, useState } from "react";
import type { TAutocompleteBase } from "../types";
import { mockSearch, type SearchResult } from "../api/mockSearch";
import debounce from "../utils/debounce";

export type TReturnType = TAutocompleteBase & { results: SearchResult[], loading: boolean, errorMessage: string | null }

const useAutocomplete = (): TReturnType => {
    const [searchInput, setSearchInput] = useState<string>("")
    const [results, setResults] = useState<SearchResult[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string | null>("")
    const latestRequestRef = useRef(0)

    const debouncedFetchResults = useMemo(
        () =>
            debounce<[string], Promise<void>>(async (searchValue: string) => {
                const requestId = ++latestRequestRef.current

                try {
                    setLoading(true)
                    const response = await mockSearch(searchValue)
                    if (requestId !== latestRequestRef.current) return
                    setResults(response)
                } catch {
                    if (requestId !== latestRequestRef.current) return
                    setErrorMessage("error loading results!")
                } finally {
                    if (requestId === latestRequestRef.current) {
                        setLoading(false)
                    }
                }
            }),
        [],
    )

    useEffect(() => debouncedFetchResults.cancel, [debouncedFetchResults])

    const onChange = (value: string) => {
        setSearchInput(value)
        setErrorMessage(null)
        if (value === "") {
            debouncedFetchResults.cancel()
            latestRequestRef.current++
            setResults([])
            setLoading(false)
            return
        }
        setLoading(true)
        debouncedFetchResults(value)
    }

    return { value: searchInput, results, loading, errorMessage, onChange }
}

export default useAutocomplete
