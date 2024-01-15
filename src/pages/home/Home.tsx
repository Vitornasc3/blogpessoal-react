function Home() {
    return (<>
        <div style={{
            width: "100vw",
            display: "flex",
            justifyContent: "center"
        }}>
            <div>
                <div style={{
                    width: "80vw",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}>
                    <h1>Seja bem vinde!</h1>
                    <p>Expresse aqui seus pensamentos e opiniões</p>
                </div>
                <div style={{
                    width: "80vw",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}>
                    <img
                        src="https://i.imgur.com/VpwApCU.png"
                        alt="Imagem da página home"
                        width="400px"
                    />
                </div>
            </div>
        </div>
    </>
    )
}

export default Home