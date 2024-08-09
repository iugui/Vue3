import MeuCard from "./MeuCard.js"
import MeuContador from "./MeuContador.js"

const App = {
    components: {
        MeuCard,
        MeuContador
    },
    template : `
        <meu-card titulo="titulo do card" body="corpo do card" />
        <meu-card titulo="teste" body="corpo do teste" />
        <meu-contador>Clique aqui 1</meu-contador>
        <br>
        <meu-contador>Clique aqui 2</meu-contador>
    `
}

export default App