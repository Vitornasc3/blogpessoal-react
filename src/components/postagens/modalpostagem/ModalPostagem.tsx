import Popup from 'reactjs-popup'
import './ModalPostagem.css'
import FormularioPostagem from '../formpostagem/FormularioPostagem'
import 'reactjs-popup/dist/index.css'
import { PencilSimpleLine } from '@phosphor-icons/react'

function ModalPostagem() {
  return (
    <Popup
      trigger={<button className="flex flex-row gap-2 rounded font-semibold text-slate-900 border-slate-900 border-solid border-2 px-4 py-2 hover:bg-slate-900 hover:text-violet-700 hover:border-violet-700">
        Nova Postagem <PencilSimpleLine size={22} /></button>} modal>
      <div>
        <FormularioPostagem />
      </div>
    </Popup>
  )
}

export default ModalPostagem
