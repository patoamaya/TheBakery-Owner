import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import HomeContainer from "./components/Home/HomeContainer"
import DetailContainer from "./components/Detail/DetailContainer"
import AddContainer from './components/Add/AddContainer'
import UpdateContainer from './components/Update/UpdateContainer'
import SidebarContainer from './components/Sidebar/SidebarContainer'
import ListContainer from './components/List/ListContainer'


function App() {

  return (
   <div>
    <BrowserRouter>
    <Routes>
      <Route element={<SidebarContainer/>}>
      <Route path='/' element={<HomeContainer/>}/>
      <Route path="/category/:categoria?" element={<ListContainer/>} />
      </Route>
      <Route path="/update/:_id?" element={<UpdateContainer/>} />
      <Route path="/detail/:_id" element={<DetailContainer/>} />
      <Route path="/add" element={<AddContainer />} />
    </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
