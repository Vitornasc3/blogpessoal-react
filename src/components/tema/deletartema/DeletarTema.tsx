function DeletarTema() {
    return (
        <div className="w-1/3 mx-auto">
            <h1 className='text-4xl text-center my-4'>Deletar Tema</h1>
            <p className='text-center mb-4'>Você tem certeza que deseja apagar o tema a seguir?</p>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <h1 className='py-2 px-6 bg-violet-600 text-white font-bold text-2xl'>
                    Tema
                </h1>
                <p className='p-8 text-3xl bg-slate-100 h-full font-semibold'>Descrição</p>
                <div className="flex bg-slate-500 justify-center font-semibold">
                    <button className="rounded text-white border-white border-solid px-4 py-2 hover:bg-violet-600 w-full flex 
                justify-center">Não</button>
                    <button className="flex justify-center text-violet-600 bg-white border-white border-solid px-4 py-2 hover:bg-violet-600  hover:text-white w-full">Sim</button>
                </div>
            </div>
        </div>
    )

}

export default DeletarTema