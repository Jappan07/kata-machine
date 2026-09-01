import { Autocomplete } from '../autocomplete/Autocomplete'

export default function App() {
  return (
    <main style={{ maxWidth: 480, margin: '2rem auto', fontFamily: 'system-ui' }}>
      <h1>Autocomplete</h1>
      <Autocomplete />
    </main>
  )
}
