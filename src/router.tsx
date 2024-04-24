import {lazy, Suspense} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './layouts/Layout'
const IndexPage = lazy(() => import( './views/IndexPage'))
const FavotitesPage = lazy(() => import( './views/FavotitesPage'))



const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout /> }>
            <Route path='/' element={
              <Suspense fallback="Cargando...">
                <IndexPage/>
              </Suspense>
            } index/>
            <Route path='/favoritos' element={
              <Suspense fallback="Cargando...">
                <FavotitesPage/>
              </Suspense>
            } />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
