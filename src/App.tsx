function App() {
  return (
      <div>
        Hello World
      </div>
  )
}

const platform = import.meta.env.VITE_PLATFORM;
console.log(platform);

export default App
