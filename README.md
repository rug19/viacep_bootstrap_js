# Desafio 

## Crie uma pasta com o seu nome, em seguida, comece a trabalhar nele.


### Descrição 
````
Assim que o usuário inserir uma etiqueta (tag) ou perder o
foco do campo de CEP, o sistema deverá iniciar a busca pelos endereços.
````

### Links uteis
[base de imagens](https://undraw.co/)

## Layout
![image](https://github.com/DC-FS04-SUL/viacep_bootstrap_js/assets/19413241/eeb5f960-d04e-4a0a-a6f8-3df5bd450636)


## DOM

```js
const INPUT_CEP = document.getElementById('cep');

```

## bootstrap
  Procure o CDN
[getbootstrap 5.3](https://getbootstrap.com/)

## JavaScript

  O "fetch" é uma API do JavaScript que permite fazer requisições HTTP para buscar recursos em uma rede, como dados de um servidor web. É comumente usado para fazer solicitações a APIs de terceiros, buscar dados de um servidor ou enviar dados para um servidor. 
```js
function getEndereco(cep) {

 const enderecoDados = fetch(`https://viacep.com.br/ws/${cep}/json/`)
   .then(response => response.json())
   .then(data => console.log(data.name))
   .catch(error => console.log(error))
   .finally(() => /*{ aviso de fim de carregamento }*/)
}
```

## viacep
[Viacep Doc](https://viacep.com.br/)




***" Se a falta de tempo for justificada para você não tirar projeto do papel. somente os desocupados teriam sucesso. - Flávio Augusto da Silva "***
