import { loadPlatformComponent } from './utils/platformLoader'
import type { WrapperProps } from './components/wrapper'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Wrapper = loadPlatformComponent<WrapperProps>('../components/wrapper/index.tsx')

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Wrapper>11</Wrapper>} />
      </Routes>
    </Router>
  )
}

export default App
