import {BrowserRouter, Routes, Route} from 'react-router-dom'
import IndexPage from './views/IndexPage'
import FavotitesPage from './views/FavotitesPage'
import Layout from './layouts/Layout'


const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout /> }>
            <Route path='/' element={<IndexPage/>} index/>
            <Route path='/favoritos' element={<FavotitesPage/>} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
