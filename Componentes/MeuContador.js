const MeuContador = {
    name : "meu-contador",
    data(){
        return {
            contador : 0
        }
    },
    template : `
        <button v-on:click="contador++">
            <slot/>
        </button> {{contador}}
    `

}  

export default MeuContador