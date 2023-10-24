
async function getEndereco(cep) {
    const enderecoDados = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => response.json())
      .then(data => data)
      .catch(error => console.log(error))
    
    return enderecoDados
  }
  
  async function exibirDadosForm(cep) {
    const dadosEndereco = await getEndereco(cep)
  
    const logradouro = document.querySelector("#logradouro")
    const numero = document.querySelector("#numero")
    const bairro = document.querySelector("#bairro")
    const cidade = document.querySelector("#cidade")
    const uf = document.querySelector("#uf")
  
    console.log(dadosEndereco)
  
    logradouro.value = dadosEndereco.logradouro
    bairro.value = dadosEndereco.bairro
    cidade.value = dadosEndereco.localidade
    uf.value = dadosEndereco.uf
    numero.focus()
  }
  
  const cep = document.querySelector("#cep")
  cep.addEventListener("blur", (e) => {
    exibirDadosForm(e.target.value)
  })
  