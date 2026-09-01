import type { TAutocompleteBase } from "../types";

function SearchInput({ value, onChange }: TAutocompleteBase) {
    return <input type="text" placeholder="Search…" value={value} onChange={(e) => onChange(e.target.value)} />
}


export default SearchInput
