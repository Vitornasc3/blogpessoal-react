import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Cadastro from './pages/cadastro/Cadastro'
import Login from './pages/login/Login'
import { AuthProvider } from './contexts/AuthContext'
import ListaTemas from './components/tema/listatemas/ListaTemas'
import FormularioTema from './components/tema/formtema/FormularioTema'
import DeletarTema from './components/tema/deletartema/DeletarTema'
import ListaPostagens from './components/postagens/listapostagens/ListaPostagens'
import FormularioPostagem from './components/postagens/formpostagem/FormularioPostagem'
import DeletarPostagem from './components/postagens/deletarpostagem/DeletarPostagem'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Perfil from './pages/perfil/Perfil'

function App() {
  return (
    <>
      <AuthProvider>
        <ToastContainer />
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path='/cadastro' element={<Cadastro />} />
              <Route path='/login' element={<Login />} />
              <Route path='/temas' element={<ListaTemas />} />
              <Route path='/cadastrartema' element={<FormularioTema />} />
              <Route path='/editartema/:id' element={<FormularioTema />} />
              <Route path='/deletartema/:id' element={<DeletarTema />} />
              <Route path='/postagens' element={<ListaPostagens />} />
              <Route path='/cadastrarpostagem' element={<FormularioPostagem />} />
              <Route path='/editarpostagem/:id' element={<FormularioPostagem />} />
              <Route path='/deletarpostagem/:id' element={<DeletarPostagem />} />
              <Route path='/perfil' element={<Perfil />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
