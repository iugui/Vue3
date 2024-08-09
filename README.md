# Curso de Vue 3 [2024]

Esse repositório armazenará os arquivos do curso de Vue 3 [2024]

```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Meu Primeiro Site com Vue</title>
        <!-- Vue CDN -->
        <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    </head>
    <body>
        <!-- Container onde o vue será montado-->
        <div id="app">
            <!-- 
            Principais diretivas:
                v-text
                v-html
                v-show
                v-if
                v-else
                v-else-if
                v-for
                v-on
                v-bind
                v-model
            -->
        </div>
    </body>

    <script>
        export default {
            // nome do componente
            name : "",
            // componentes importados
            components : {},
            // props
            props : [""],
            // eventos emitidos
            emits : [""],
            // variáveis
            data(){
                return {}
            },
            // Funções
            methods : {},
            // Propriedades computadas
            computed : {},
            // Propriedades observadoras
            watch : {},
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
    </script>
</html>
```
