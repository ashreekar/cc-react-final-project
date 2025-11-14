function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL)
  return (
    <div>
      App

      {import.meta.env.VITE_APPWRITE_URL}
    </div>
  )
}

export default App