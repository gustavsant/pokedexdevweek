/* 
* passos a seguir *
1 - com o js identificar os cards com id ou classe "active" e ou "open"
2 - ao clicar em outro pokemon da lista retirar a classe open da atual e colocar na carta selecionada
3 - adicionar a tag de ativo na opção da lista selecionada
*/
let pokeList = document.querySelectorAll('.pokemon')
let pokeCard = document.querySelectorAll('.pokecard')

// adicionar um escutador de click a todos da listagem de pokemons 
pokeList.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        //remover 'open' do card selecionado
        let openedPokeCard = document.querySelector('.open')
        openedPokeCard.classList.remove('open')
        //identificar o cartao selecionado
        let pokeSelected = pokemon.attributes.id.value
        //ao clicar adicionar o open ao cartao seleciondo
        let openSomePokeCard = document.getElementById(pokeSelected+'card')
        openSomePokeCard.classList.add('open')



        let openedPokeList = document.querySelector('.active')
        openedPokeList.classList.remove('active')
        let pokeListSelected = pokemon.attributes.id.value
        let makeActivePokeList = document.getElementById(pokeListSelected)
        makeActivePokeList.classList.add('active')
    })
})