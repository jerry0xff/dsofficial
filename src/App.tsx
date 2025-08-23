import { loadPlatformComponent } from './utils/platformLoader'
import type { WrapperProps } from './components/wrapper'

// 使用新的API，传入完整的组件路径
const Wrapper = loadPlatformComponent<WrapperProps>('../components/wrapper/index.tsx')

function App() {
  return (
    <Wrapper>11</Wrapper>
  )
}

export default App
