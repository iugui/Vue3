const MeuCard = {
    name : "meu-card",
    props : ["titulo", "body"],
    template : `
        <div>
            <h1>{{titulo}}</h1>
            <p>{{body}}</p>
        </div>
    `
}

export default MeuCard