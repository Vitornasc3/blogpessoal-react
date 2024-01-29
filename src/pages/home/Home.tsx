import ListaPostagens from "../../components/postagens/listapostagens/ListaPostagens"
import ModalPostagem from "../../components/postagens/modalpostagem/ModalPostagem"

function Home() {
    return (
        <>
            <div id="container" className="bg-gray-700 flex justify-center">
                <div id="subcontainer" className="container grid lg:grid-cols-2 text-white grid-cols-1">
                    <div id="texto" className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className="text-5xl font-bold">Seja bem-vindo!</h2>
                        <p className="text-xl">Expresse aqui seus pensamentos e opiniões</p>

                        <div className="flex justify-around gap-4">
                            <ModalPostagem />
                            <div className="rounded font-semibold text-gray-600 bg-white border-white border-solid border-2 px-4 py-2 hover:bg-violet-600  hover:text-white cursor-pointer">
                                Ver Postagens
                            </div>
                        </div>
                    </div>

                    <div id="imagem" className="flex justify-center">
                        <img
                            src="https://i.imgur.com/VpwApCU.png"
                            alt="Imagem da página home"
                            className="w-2/3"
                        />
                    </div>
                </div>
            </div>
            <ListaPostagens />
        </>
    )
}

export default Home