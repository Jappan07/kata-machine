import type { CSSProperties } from "react";
import SearchInput from "./components/SearchInput";
import useAutocomplete from "./hooks/useAutocomplete";

const popupStyle: CSSProperties = {
  position: "absolute",
  top: "100%",
  left: 0,
  right: 0,
  marginTop: 4,
  padding: "0.5rem 0",
  background: "#fff",
  border: "1px solid #ddd",
  borderRadius: 6,
  maxHeight: 240,
  overflowY: "auto",
  zIndex: 10,
};

export function Autocomplete() {
  const props = useAutocomplete();
  const showPopup = props.value.trim() !== "";

  return (
    <div style={{ position: "relative", maxWidth: 320 }}>
      <SearchInput {...props} />

      {showPopup && (
        <div role="listbox" style={popupStyle}>
          {props.errorMessage && (
            <p style={{ margin: "0 0.75rem", color: "#b00020" }}>
              {props.errorMessage}
            </p>
          )}

          {!props.errorMessage && props.loading && (
            <p style={{ margin: "0 0.75rem", color: "#666" }}>Loading…</p>
          )}

          {!props.errorMessage &&
            !props.loading &&
            props.results.length === 0 && (
              <p style={{ margin: "0 0.75rem", color: "#666" }}>
                No results found
              </p>
            )}

          {!props.errorMessage && !props.loading && props.results.length > 0 && (
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {props.results.map((result) => (
                <li
                  key={result.id}
                  role="option"
                  style={{ padding: "0.5rem 0.75rem", cursor: "pointer" }}
                >
                  {result.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
