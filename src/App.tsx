// 导入路由
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// 导入页面组件
import Login from '@/pages/Login'
import ShowMall from '@/pages/ShowMall'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/home" element={<Login />} />
          <Route path="/" element={<ShowMall />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
