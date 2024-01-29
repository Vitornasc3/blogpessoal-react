import Popup from 'reactjs-popup'
import './ModalPostagem.css'
import FormularioPostagem from '../formpostagem/FormularioPostagem'
import 'reactjs-popup/dist/index.css'

function ModalPostagem() {
  return (
    <Popup 
    trigger={<button className="rounded font-semibold text-white border-white border-solid border-2 px-4 py-2 hover:bg-violet-600">
        Nova Postagem</button>} modal>
        <div>
            <FormularioPostagem />
        </div>
    </Popup>
  )
}

export default ModalPostagem
