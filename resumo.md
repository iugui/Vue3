# Vue 3

## 1) Formas de usar

### 1.1) Standalone script

**Usando CDN (sem build step)**

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Meu primeiro site com Vue 3</title>
        <!-- Vue CDN -->
        <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    </head>
    <body>
        <div id="app">
            <!-- O vue será montado aqui -->
        </div>
    </body>
    <script>
        // Configure o vue através do objeto options
        const options = {}
        // Criando a aplicação Vue
        const app = Vue.createApp(options)
        // Montando o Vue na div#app
        app.mount("#app")
    </script>
</html>
```

### 1.2) Single Page Applications (SPA) - Options Api

```sh
npm create vue@latest
```

```html
<script>
    // Aqui fica o nosso Javascript
    const options = {}
    export default options
</script>

<template>
    <!-- Aqui fica o nosso HTML -->
</template>

<style scoped>
    /* Aqui fica o nosso CSS */
</style>
```

### 1.3) Single Page Application (SPA) - Composition Api

```sh
npm create vue@latest
```

```html
<script setup>
    // Aqui fica o nosso javascript
</script>

<template>
    <!-- Aqui fica o nosso HTML -->
</template>

<style scoped>
    /* Aqui fica o nosso CSS */
</style>
```

## 2) Iniciando um projeto

**Passo 1) Crie o projeto Vue através do npm**

```sh
npm create vue@latest
cd nome-do-projeto
npm install
npm run dev
```

**Passo 2) Crie um arquivo chamado PrimeiroComponente.vue dentro de src/components**

```html
<!-- src/components/PrimeiroComponente.vue -->
<template>
    <div>
        <h1>Olá, mundo!</h1>
    </div>
</template>

<script>
    export default {
        // Nome do componente
        name : "PrimeiroComponente"
    }
</script>

<style scoped>

</style>
```

**Passo 3) Importe e utilize o PrimeiroComponente dentro de App.vue**
App.vue será o nosso componente raíz, toda aplicação Vue precisa de um componente raíz que centraliza os outros componentes.

```html
<!-- src/App.vue -->
<template>
  <div>
    <PrimeiroComponente/>
  </div>
</template>

<script>
  import PrimeiroComponente from "@/components/PrimeiroComponente.vue"
  export default {
    // Nome do componente
    name : "App",
    // Componentes importados
    components : {
      PrimeiroComponente
    }
  }
</script>

<style scoped>

</style>
```

**Passo 4) Crie a aplicação no arquivo main.js**

```js
// imports de css
import './assets/main.css'

// imports do vue
import { createApp } from 'vue'

// imports de componentes
import App from './App.vue'

// Criando a aplicação
const app = createApp(App)

// Montando a aplicação na div#app
app.mount('#app')
```

**Passo 5) Arquivo index.html**

```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
      <meta charset="UTF-8">
      <link rel="icon" href="/favicon.ico">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Primeira aplicação com Vue 3</title>
    </head>
    <body>
      <div id="app">
        <!-- Aqui será montado o Vue -->
      </div>
      <script type="module" src="/src/main.js"></script>
    </body>
</html>
```

## 3) Configurando o nosso app

Podemos configurar a nossa aplicação através da variável app criada no main.js através da instrução const app = createApp(App)

### 3.1) Definindo um componente como Global

Podemos acessar componentes globais em todo o nosso código sem a necessidade de realizar imports.

**Sintaxe:**

```js
app.component("NomeDoComponente", Componente)
```

**Exemplo:**

```javascript
// imports de css
import './assets/main.css'

// imports do vue
import { createApp } from 'vue'

// imports de componentes
import App from './App.vue'
import PrimeiroComponente from "@/components/PrimeiroComponente.vue"

// Criando a aplicação
const app = createApp(App)

// Configurando o app
app.component("PrimeiroComponente", PrimeiroComponente)

// Montando a aplicação na div#app
app.mount('#app')
```

Agora somos capazes de acessar o PrimeiroComponente em qualquer lugar da nossa aplicação sem precisar importá-lo.

```html
<!-- src/App.vue -->
<template>
  <div>
    <PrimeiroComponente/>
  </div>
</template>

<script>
  export default {
    name : "App",
  }
</script>
```

### 3.2) Outras configurações úteis:

```js
// Criando diretivas customizadas globais
app.directive("nomeDaDiretiva", {})

// Instalando plugins
import MeuPlugin from './plugins/MeuPlugin'
app.use(MeuPlugin)

// Vendo as configurações da nossa aplicação
app.config
```

Para uma lista com todas as configurações, acesse:
https://vuejs.org/api/application.html

## 4) Objeto options

Repare que em todos os nossos scripts realizamos o export default {}

Segue abaixo os principais atributos do nosso objeto de configurações

```javascript
export default {
    // nome do componente
    name : "",
    // componentes importados
    components : {},
    // props
    props : [""],
    // variáveis reativas
    data(){
        return {}
    },
    // Funções
    methods : {},
    // Propriedades computadas
    computed : {},
    // Propriedades observadoras
    watch : {},
    // Códigos comuns a vários componentes
    mixins : {},
    provide : {},
    // ciclos de vida
    beforeCreate(){},
    created(){},
    beforeMount(){},
    mounted(){},
    beforeUpdate(){},
    updated(){},
    beforeUnmount(){},
    unmounted(){},
    errorCaptured(){},
    renderTracked(){},
    renderTriggered(){},
    activated(){},
    deactivated(){ }
}
```

Veremos cada um desses atributos ao longo desse resumo.

## 5) data

Podemos criar dados reativos em Vue através do atributo data. O atributo data espera uma função que retorne um objeto com as variáveis definidas.
Os dados criados dentro do data são reativos e podemos acessá-los dentro do nosso script através do this. Para utilizar no template basta utilizar o nome do dado.

```javascript
export default {
    data : function(){
        return {
            // dados
        }
    }
}
```

É equivalente à:

```javascript
export default {
    data(){
        return {
            // dados
        }
    }
}
```

**Exemplo:**

```html
<script>
    export default {
        data(){
            return {
                mensagem : "Olá, mundo!!!"
            }
        }
    }
</script>
```

Como utilizar essas variáveis criadas dentro do nosso template?
Podemos fazer isso através do double mustache {{}}. Ele nos permite interpolar para o Javascript. Podemos utilizadas expressões simples e dados criados dentro do nosso objeto options.

**Exemplo:**

```html
<template>
    <div>
        <h1>{{ mensagem }}</h1>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                mensagem : "Olá, mundo!!!"
            }
        }
    }
</script>
```

Repare que podemos retornar qualquer tipo de dados Javascript aqui através do data.

```html
<template>
    <div>
        <p>
            Nome - {{ nome }} <br>
            Idade - {{ idade }} <br>
            Hobbies - {{ hobbies }}
        </p>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                nome : "Maria",
                idade : 23,
                hobbies : ["Malhar", "ler"]
            }
        }
    }
</script>
```

## 6) Diretivas

As diretivas são atributos especiais que podemos utilizar dentro do nosso template para executar javascript.

![1714502937445](image/resumo/1714502937445.png)

Para utilizar atributos dinâmicos utilizamos o []

### 6.1) v-bind

A diretiva v-bind nos permite realizar a interpolação em atributos HTML. Não podemos utilizar o double mustache em atributos HTML. Em vez disso devemos utilizar v-bind:atributo

**Exemplo :**

```html
<template>
    <div>
        <h1 v-bind:title="mensagem">Título</h1>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                mensagem : "Essa é uma mensagem personalizada com vue"
            }
        }
    }
</script>
```

Em vez de escrevermos v-bind podemos utilizar somente :
Então o código anterior é equivalente à:

```html
<template>
    <div>
        <h1 :title="mensagem">Título</h1>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                mensagem : "Essa é uma mensagem personalizada com vue"
            }
        }
    }
</script>
```

#### 6.1.1) Realizando multiplos binds

Imagine que precisamos realizar v-bind em vários atributos HTML de um elemento, em vez de escrever um a um, podemos encapsulá-los dentro de um objeto e realizar um único v-bind.

```html
<template>
    <div>
        <input type="text" v-bind="objAtributos">
    </div>
</template>

<script>
    export default {
        data(){
            return {
                objAtributos : {
                    placeholder : "Escreve seu nome",
                    title : "Título dinâmico"
                }
            }
        }
    }
</script>
```

### 6.2) v-text

Outra forma de realizar o bind de textos é através da diretiva v-text. Nesse caso ela substituirá o atual valor contido na tag.

```html
<template>
    <div v-text="mensagem">
    </div>
</template>

<script>
    export default {
        data(){
            return {
                mensagem : "Olá, mundo"
            }
        }
    }
</script>
```

### 6.2) v-html

Podemos utilizar códigos html dentro do nosso template através da diretiva v-html.
Observação: Essa diretiva só deve ser usada em conteúdos confiáveis e jamais em conteúdos fornecidos fornecidos pelo cliente.

```html
<template>
    <div>
        <ul v-html="itens">
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                itens : `
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                `
            }
        }
    }
</script>
```

### 6.3) v-if

Podemos realizar renderização dinâmicas através do v-if

```html
<template>
    <div>
        <p v-if="nota < 40">Reprovado</p>
        <p v-else-if="nota >= 40 && nota < 60">Recuperação</p>
        <p v-else>Aprovado</p>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                nota : 85
            }
        }
    }
</script>
```

### 6.4) v-show

O v-show tem o mesmo princípio do v-if, a diferença é que o v-show insere um display:none enquanto o v-if não renderiza o elemento.

```html
<template>
    <div>
        <p v-show="nota < 40">Reprovado</p>
        <p v-show="nota >= 40 && nota < 60">Recuperação</p>
        <p v-show="nota > 60">Aprovado</p>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                nota : 85
            }
        }
    }
</script>
```

### 6.5) v-for

Nos permite criar laços de repetição

```html
<template>
    <div>
        <!-- Iterando sobre números -->
        <ul v-for="num in 5">
            <li v-bind:key="num">{{ num }}</li>
        </ul>

        <!-- Iterando sobre vetores -->
        <p v-for="(livro, indice) in livros"> {{indice}} -  {{ livro }}</p>

        <!-- Iterando sobre vetores de objetos -->
        <p v-for="pessoa in pessoas">{{ pessoa.id }} - {{ pessoa.nome }}</p>

        <!-- Iterando sobre objetos -->
        <div v-for="(valor, chave) in objeto">{{ chave }} - {{ valor }}</div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                livros : ["HP", "Jogos Vorazes", "Senhor dos Anéis"],
                pessoas : [
                    {
                        id : 1,
                        nome : "Carlos"
                    },
                    {
                        id : 2,
                        nome : "Maria"
                    }
                ],
                objeto : {nome : "Maria", idade : 29}
            }
        }
    }
</script>
```

É sempre recomendável criar uma chave v-bind:key="" quando utilizar o v-for em variáveis que podem sofrer alterações para que o vue consiga reorganizar os itens caso necessário.

### 6.6) v-on

Para utilizarmos eventos em vue podemos utilizar a seguinte sintaxe:
v-on:nomeDoEvento.modificador=""
Ao utilizar eventos temos acesso ao $event que traz informações sobre o evento em si.

```html
<template>
    <div>
        <button v-on:click="contador++">Incrementa contador</button>
        {{ contador }}
        <button v-on:click.right="contador++">Incrementa contador com botão direito</button>
        <input type="text" v-on:blur="($event)=>console.log($event)">
    </div>
</template>

<script>
    export default {
        data(){
            return {
                contador : 0
            }
        }
    }
</script>
```

### 6.4) v-model

Podemos conectar valores de input a variáveis através da diretiva v-model

```html
<template>
    <div>
        <input 
            type="text" 
            v-model="inputNome" 
            placeholder="Digite seu nome"
        > <br>
        Nome digitado : {{ inputNome }} <br>
        <input 
            type="text" 
            v-model.lazy="inputSobrenome" 
            placeholder="Digite seu sobrenome"
        > <br>
        Sobrenome digitado : {{ inputSobrenome }}
    </div>
</template>

<script>
    export default {
        data(){
            return {
                inputNome : "",
                inputSobrenome : ""
            }
        }
    }
</script>
```

#### 6.4.1) checkbox

Quando queremos que vários valores possam ser selecionados.

```html
<template>
    <input type="checkbox" v-model="checado">
    {{ checado }}
</template>

<script>
    export default {
        data(){
            return{
                checado : false
            }
        },
    }
</script>
```

**Exemplo 2:**

```html
<template>
    <label for="maria">Maria</label>
    <input type="checkbox" id="maria" value="maria" v-model="nomesChecados">

    <label for="carlos">Carlos</label>
    <input type="checkbox" id="carlos" value="carlos" v-model="nomesChecados">

    <label for="jonas">Maria</label>
    <input type="checkbox" id="jonas" value="jonas" v-model="nomesChecados"> <br>

    {{ nomesChecados }}
</template>

<script>
    export default {
        data(){
            return{
                nomesChecados : []
            }
        },
    }
</script>
```

#### 6.4.2) radio

Quando queremos que apenas uma seja marcada

```html
<template>
    <label for="um">Um</label>
    <input type="radio" id="um" value="Valor 1" v-model="valorMarcado">

    <label for="dois">Dois</label>
    <input type="radio" id="dois" value="Valor 2" v-model="valorMarcado">

    <label for="tres">Três</label>
    <input type="radio" id="tres" value="Valor 3" v-model="valorMarcado"> <br>

    {{ valorMarcado }}
</template>

<script>
    export default {
        data(){
            return{
                valorMarcado : ""
            }
        },
    }
</script>
```

#### 6.4.3) select

```html
<template>
    <div>Selecionado: {{ selecionado }}</div>

    <select v-model="selecionado" >
        <option v-for="opcao in opcoes" v-bind:value="opcao.valor">
            {{ opcao.texto }}
        </option>
    </select>
</template>

<script>
    export default {
        data(){
            return{
                selecionado : "Valor A",
                opcoes : [
                    {texto : "Opção A", valor : "Valor A"},
                    {texto : "Opção B", valor : "Valor B"},
                    {texto : "Opção C", valor : "Valor C"}
                ]
            }
        },
    }
</script>
```

## 7) Expressões Javascript

Podemos utilizar expressões únicas Javascript que podem ser avaliadas como um valor dentro de diretivas e {{}}.
Também podemos chamar funções.

```html
<template>
    <div>
        {{ numero + 5 }} <br>
        {{ ok ? "Sim" : "Não" }}
        <div v-bind:id="`list-${id}`">Adiciona list-1 como id</div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                numero : 10,
                ok : true,
                id : 1
            }
        }
    }
</script>
```

## 8) methods

- Através do atributo methods podemos criar funções.
- O atributo methods espera um objeto de funções
- Não utilize arrow functions dentro do methods
- Podemos utilizar nossos métodos em outras partes do `<script>` utilizando o `this`

**Exemplo:**

```html
<template>
    <div>
        <button v-on:click="incrementaContador">Incrementar o contador</button> {{ contador }}
    </div>
</template>

<script>
    export default {
        data(){
            return {
                contador : 0
            }
        },
        methods : {
            incrementaContador(){
                this.contador++;
            }
        }
    }
</script>
```

## 9) computed

- Utilizamos computed quando queremos criar propriedades para **exibição** dinâmica de dados que dependam de alguma lógica.
- Não devemos alterar estados, fazer requisições assíncronas e nem alterar o DOM dentro do computed.
- Propriedades computadas sempre devem retornar valores.
- O computed espera um objeto de funções.
- Não precisamos utilizar () para chamar propriedades computadas

```html
<template>
    <div>
        <input type="text" placeholder="Digite seu nome" v-model.lazy="inputNome">
        <input type="text" placeholder="Digite seu sobrenome" v-model.lazy="inputSobrenome">
        {{ nomeCompleto }}
    </div>
</template>

<script>
    export default {
        data(){
            return {
                inputNome : "",
                inputSobrenome : ""
            }
        },
        computed : {
            nomeCompleto(){
                return (this.inputNome+" "+this.inputSobrenome)
            }
        }
    }
</script>
```

A diferença na utilização de computed para methods é que as propriedades computadas só são re-calculadas quando algum dos atributo dinâmicos que ela monitora é alterado. Se utilizassemos um método, ele seria chamado toda vez que o vue fizesse uma re-renderização.

## 10) CSS

### 10.1) Utilizando objetos

Podemos passar um objeto onde as chaves com valores true serão adicionadas.

```html
<template>
    <div>
        <p v-bind:class="{negrito:true, vermelho:true}">Estilização com css</p>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .negrito{
        font-weight: bold;
    }
    .vermelho{
        color: red;
    }
</style>
```

### 10.2) Utilizando vetores

```html
<template>
    <div>
        <p v-bind:class="estilos">Estilização com css</p>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                estilos : ["negrito", "vermelho"]
            }
        }
    }
</script>

<style scoped>
    .negrito{
        font-weight: bold;
    }
    .vermelho{
        color: red;
    }
</style>
```

### 10.3) Utilizando computed properties

```html
<template>
    <div>
        <button 
            v-on:click="ativado = !ativado"
            class="btn"
            v-bind:class="botaoAtivado"
        >
            Clique aqui
        </button>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                ativado : false
            }
        },
        computed : {
            botaoAtivado(){
                if (this.ativado){
                    return {"btn-ativado" : true}
                } 
                return {"btn-ativado" : false}
            }
        }
    }
</script>

<style scoped>
    .btn{
        font-size: 2rem;
    }
    .btn-ativado{
        color: green;
        border: 1px solid green;
    }
</style>
```

### 10.4) Utilizando style

```html
<template>
    <div>
        <p v-bind:style="estilo">Estilos com style</p>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                estilo : {
                    color : "red",
                    fontWeight : "bold",
                    fontSize : "3rem"
                }
            }
        },
    }
</script>
```

## 11) LifeCycle Hooks

- **beforeCreate** :
  Acontece depois da resolução das props e antes do data(), computed, etc.
- **created** :
  Acontece depois do data(), computed, etc. Normalmente usado para: fetch de dados.
- **beforeMount** :
  Acontece antes do componente ser montado no DOM. Normalmente usado para: carregar bibliotecas externas, por exemplo uma biblioteca de gráficos.
- **mounted** :
  Acontece depois do componente ser montado no DOM. Normalmente usado para: realizar tarefas que dependam do DOM.
- **beforeUpdate** :
  Acontece antes do componente ser atualizado no DOM. Normalmente usado para: ajustar dados com base no estado atual antes de realizar a atualização de fato.
- **updated** :
  Acontece depois que o componente foi atualizado com sucesso no DOM. Normalmente usado para: utilizar side effects que não envolvam modificar o DOM diretamente.
- **beforeUnmount** :
  Acontece antes do componentes ser desmontado do DOM. Normalmente usado para: realizar operações de limpeza como um clear em um setInterval.
- **unmounted** :
  Acontece depois do componente ser desmontado.

## 12) watch

- Utilizamos o watch quando queremos vigiar o estado de uma variável e tomar alguma ação.
- Devem ter o mesmo nome da variável que estão vigiando
- Temos acesso ao valor novo e ao valor antigo

```html
<template>
    <div>
        <button v-on:click="() => clicado = !clicado">Clique aqui</button> <br>
        <p>{{ estadoBotao }}</p>
    </div>
</template>

<script>
    export default {
        name : "PrimeiroComponente",
        data(){
            return {
                clicado : false,
                estadoBotao : ""
            }
        },
        methods : {
            alteraEstadoBotao(valor){
                if(valor){
                    this.estadoBotao = "Botão ativado"
                } else{
                    this.estadoBotao = "Botão desativado"
                }
            }
        },
        watch : {
            clicado(novoValor, valorAntigo){
                console.log(novoValor, valorAntigo)
                this.alteraEstadoBotao(novoValor)
            }
        }
    }
</script>
```

**Exemplo 2:**

```html
<template>
    <div>
        <button v-on:click="() => clicado = !clicado">Clique aqui</button> <br>
        <p>{{ estadoBotao }}</p>
    </div>
</template>

<script>
    export default {
        name : "PrimeiroComponente",
        data(){
            return {
                clicado : false,
                estadoBotao : ""
            }
        },
        methods : {
            alteraEstadoBotao(valor){
                if(valor){
                    this.estadoBotao = "Botão ativado"
                } else{
                    this.estadoBotao = "Botão desativado"
                }
            }
        },
        watch : {
            clicado : {
                handler(novoValor, valorAntigo){
                    console.log(novoValor, valorAntigo)
                    this.alteraEstadoBotao(novoValor)
                }
            }
        }
    }
</script>
```

## 13) Acessando o DOM com ref

- Podemos manipular o DOM utilizando o atributo ref
- Só podemos acessá-los depois que o componente é montado
- Acessamos através do `$refs`

```html
<template>
    <p ref="paragrafo">Parágrafo</p>
</template>

<script>
    export default {
        mounted(){
            console.log(this.$refs)
            console.log(this.$refs.paragrafo)
            console.log(this.$refs.paragrafo.innerText)
        }
    }
</script>
```

## 14) Componentes

### 14.1) Criando e usando um componente

Criando um componente:

```html
<!-- src/components/MeuBotao.vue -->
<template>
    <button v-on:click="contador++">
        Incrementa contador
    </button> - {{ contador }}
</template>

<script>
    export default {
        name : "MeuBotao",
        data(){
            return {
                contador : 0
            }
        }
    }
</script>
```

Agora precisamos importar esse componente onde queremos usar, registrar esse componente através do atributo components e utilizá-lo em nosso código como se fosse uma tag HTML normal.

```html
<!-- src/components/PrimeiroComponente.vue -->
<template>
    <MeuBotao/>
    <MeuBotao/>
</template>

<script>
    import MeuBotao from './MeuBotao.vue';
    export default {
        components : {
            MeuBotao
        }
    }
</script>
```

Repare que podemos chamar o nosso componente quantas vezes quisermos e cada componente tem a sua própria instância. Nesse caso, repare que um botão não influencia no contador do outro.

### 14.2) props

- As props nos permitem passar informações do componente pai para o componente filho.
- Elas são passadas como se fossem atributos html
- Para definir uma prop basta utilizar o atributo props e passar como valor um vetor de strings

**Exemplo:**

```html
<!-- src/components/Titulo.vue -->
<template>
    <h3>{{ titulo }}</h3>
</template>

<script>
    export default {
        props : ["titulo"]
    }
</script>
```

```html
<!-- src/components/PrimeiroComponente.vue -->
<template>
    <Titulo titulo="Meu título personalizado!!" />
    <Titulo titulo="Outro título personalizado" />
</template>

<script>
    import Titulo from "@/components/Titulo.vue"
    export default {
        components : {
            Titulo
        }
    }
</script>
```

#### 14.2.1) Validação de props

Em vez de passarmos um vetor de strings, podemos criar também um objeto para validar uma prop

```html
<!-- src/components/Card.vue -->
<template>
    <div>
        <h3>{{ titulo }}</h3>
        <p>{{ conteudo }}</p>
    </div>
</template>

<script>
    export default {
        props : {
            "titulo" : {
                type : String, // Pode ser um vetor de tipos aceitos
                required : false,
                default : "Título do card",
            },
            "conteudo" : {
                type : String,
                required : true,
                validator(valor){
                    //console.log(valor)
                    // Deve retornar true ou false
                    if (valor.length < 5){
                        console.error("O conteúdo deve ter pelo menos 5 letras");
                        return false
                    }
                    return true
                }
            }
        }
    }
</script>
```

```html
<!-- src/components/PrimeiroComponente.vue -->
<template>
    <Card titulo="Meu primeiro card" conteudo="Aqui ficará o conteúdo" />
</template>

<script>
    import Card from "@/components/Card.vue"
    export default {
        components : {
            Card
        }
    }
</script>
```

### 14.3) slots

A melhor forma de entender o slot é através da tag button.

```html
<button>Clique aqui</button>
```

Repare que podemos passar qualquer mensagem dentro do botão, que essa mensagem será renderizada. Podemos criar esse comportamento nos nossos componentes através do slot.

```html
<!-- src/components/MeuBotao.vue -->
<template>
    <button v-on:click="contador++">
        <slot/>
    </button> - {{ contador }}
</template>

<script>
    export default {
        name : "MeuBotao",
        data(){
            return {
                contador : 0
            }
        }
    }
</script>
```

```html
<!-- src/components/PrimeiroComponente.vue -->
<template>
    <MeuBotao>Incrementar o contador</MeuBotao>
    <MeuBotao>Inc cont</MeuBotao>
</template>

<script>
    import MeuBotao from './MeuBotao.vue';
    export default {
        components : {
            MeuBotao
        }
    }
</script>
```

### 14.4) emits

Para passar dados do componente filho para o componente pai podemos utilizar o emit através do $emit
Ele nos permite gerar eventos personalizados. Podemos criar esses eventos no componente filho e ficar escutando esses eventos no componente pai através do v-on

O passo a passo para gerar eventos do filho para o pai.

1) **No componente filho, crie um método que será responsável por gerar o evento utilizando o this.$emit("meuEvento", dados)**

```javascript
methods : {
    defineContador(){
        this.$emit("meuEvento", this.incrementoContador)
    }
}
```

2) **No componente filho, crie a chave emits : [""] e adicione todos os eventos que estão sendo emitidos de forma personalizada.**

```javascript
emits : ["meuEvento"],
```

3) **Utilizando algum evento padrão do javascript como o onclick ou onblur e dispare o método criado no passo 1**

```html
<input 
    type="number" 
    v-model.number.lazy="incrementoContador"
    v-on:blur="defineContador"  
>
```

4) **No componente pai, importe esse componente e crie um método que será responsável por pegar os dados e executar ações quando o evento personalizado for disparado.**

```javascript
methods : {
    pegaIncrementoContador(valor){
        console.log("chegamos no pai")
        this.incremento = valor
    }
}
```

5) **Fique escutando esse evento através da diretiva v-on:meuEvento=""**

```html
<IncrementoContador v-on:meu-evento="pegaIncrementoContador($event)"/>
```

**Resultado final:**

```html
<!-- /src/components/IncrementoContador.vue -->
<template>
    <div>
        <label for="inputIncrementaContador">Define o incremento do contador</label>
        <input 
            type="number" 
            v-model.number.lazy="incrementoContador"
            v-on:blur="defineContador"
            id="inputIncrementaContador"    
        >
    </div>
</template>

<script>
    export default {
        name : "IncrementoContador",
        emits : ["meuEvento"],
        data(){
            return{
                incrementoContador : 0
            }
        },
        methods : {
            defineContador(){
                console.log("Entramos aqui")
                this.$emit("meuEvento", this.incrementoContador)
            }
        }
    }
</script>
```

Componente pai

```html
<!-- src/components/PrimeiroComponente.vue -->
<template>
    <IncrementoContador v-on:meu-evento="pegaIncrementoContador($event)"/>
    <p >Seu contador será incrementado por {{ incremento }}</p>
    <button @click="contador = contador + incremento">Incrementar contador</button>
    <p>{{ contador }}</p>
</template>

<script>
    import IncrementoContador from "@/components/IncrementoContador.vue"
    export default {
        components : {
            IncrementoContador
        },
        data(){
            return {
                contador : 0,
                incremento : 0,
            }
        },
        methods : {
            pegaIncrementoContador(valor){
                console.log("chegamos no pai")
                this.incremento = valor
            }
        }
    }
</script>
```

### 14.5) Renderização dinâmica de components

- Podemos renderização componentes de forma dinâmica através do `<component v-bind:is='componenteEscolhido'/>`

Passo a passo:
1) Crie os componentes que deseja renderizar dinâmicamente
2) Importe esses componentes onde deseja fazer a renderização e crie uma variável que ficará responsável por guardar o nome do componente escolhido dinâmicamente. Atribua um desses componentes importados como valor inicial da variável. Passe esses nomes como Strings.
3) Utilize eventos para mudar essa variável dinamicamente, com botões e onclick por exemplo.
4) Crie o `<component v-bind:is='componenteEscolhido'/>`

**Exemplo:**

Componente 1 - Perfil

```html
<!-- src/components/Perfil.vue -->
<template>
    <div>
        <h1>Perfil da página</h1>
        <p>Descrição do perfil</p>
    </div>
</template>

<script>
    export default {
        name : "Perfil"
    }
</script>
```

Componente 2 - Configurações

```html
<!-- src/components/Configuracoes.vue -->
<template>
    <div>   
        <h1>Configurações da página</h1>
        <p>Descrição das configurações da página</p>
    </div>
</template>

<script>
    export default {
        name : "Configuracoes"
    }
</script>
```

Componente 3 - Aquele que queremos fazer a renderização condicional

```html
<!-- src/components/PrimeiroComponente.vue -->
<template>
    <div>
        <button @click="componenteEscolhido = 'Perfil'">Perfil</button>
        <button @click="componenteEscolhido = 'Configuracoes'">Configurações</button>
        <component v-bind:is="componenteEscolhido"/>
    </div>
</template>

<script>
    import Perfil from "@/components/Perfil.vue"
    import Configuracoes from "@/components/Configuracoes.vue"

    export default {
        components : {
            Perfil,
            Configuracoes
        },
        data(){
            return {
                componenteEscolhido : "Perfil"
            }
        },
    }
</script>
```

### 14.6) <KeepAlive>

Quando utilizamos o <component v-bind:is=""/> fazemos os componentes serem montados e desmontados o tempo todo, o que pode gerar um custo computacional alto. Para resolver isso, podemos simplesmente encapsular o component dentro da tag <KeepAlive>

Faça o seguinte teste, insira o método de clico de vida mounted nos dois componentes. Repare que toda vez que utilizamos a renderização condicional esses componentes são desmontados e re-montados. Com o KeepAlive não temos esse problema.

Componente 1 - Perfil

```html
<!-- src/components/Perfil.vue -->
<template>
    <div>
        <h1>Perfil da página</h1>
        <p>Descrição do perfil</p>
    </div>
</template>

<script>
    export default {
        name : "Perfil",
        mounted(){
            console.log("O componente foi montado com sucesso!")
        }
    }
</script>
```

Componente 2 - Configurações

```html
<!-- src/components/Configuracoes.vue -->
<template>
    <div>   
        <h1>Configurações da página</h1>
        <p>Descrição das configurações da página</p>
    </div>
</template>

<script>
    export default {
        name : "Configuracoes",
        mounted(){
            console.log("O componente foi montado com sucesso!")
        }
    }
</script>
```

Componente 3 - PrimeiroComponente

```html
<!-- src/components/PrimeiroComponente.vue -->
<template>
    <div>
        <button @click="componenteEscolhido = 'Perfil'">Perfil</button>
        <button @click="componenteEscolhido = 'Configuracoes'">Configurações</button>
        <KeepAlive>
            <component v-bind:is="componenteEscolhido"/>
        </KeepAlive>
    </div>
</template>

<script>
    import Perfil from "@/components/Perfil.vue"
    import Configuracoes from "@/components/Configuracoes.vue"

    export default {
        components : {
            Perfil,
            Configuracoes
        },
        data(){
            return {
                componenteEscolhido : "Perfil"
            }
        },
    }
</script>
```