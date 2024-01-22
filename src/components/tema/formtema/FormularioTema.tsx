function FormularioTema() {
    return (
        <div className="flex flex-col items-center p-10 font-semibold">
            <h1 className="text-4xl">Cadastrar Tema</h1>
            <form className="flex gap-4 flex-col p-6 text-lg w-2/4 items-center justify-center">
                <div className="flex flex-col w-full gap-2">
                    <label>Descrição do Tema</label>
                    <input id="tema" name="tema" className="border-2 border-solid p-2 hover:border-gray-400" type="text" placeholder="Descreva aqui seu tema" />
                </div>

                <button type="submit" className="flex justify-center text-white p-2 bg-gray-600 border-solid border-2 border-white hover:bg-violet-600 w-1/2 rounded text-lg">Cadastrar</button>
            </form>

        </div>
    )
}

export default FormularioTema