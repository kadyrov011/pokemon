var elPokemonsList = document.querySelector('.pok-wrapper');
var elPokemonsSelect = document.querySelector('.content__select');

function elementCreator(tagName){
    return document.createElement(tagName)
}

function pokemonCreator(pokemon){
    var item = elementCreator('li');
    var elimg = elementCreator('img');
    var div = elementCreator('div');
    var divS = elementCreator('div');
    var title = elementCreator('h3');
    var text = elementCreator ('p')
    var weight = elementCreator ('h4')
    var height = elementCreator ('h4')
    
    elimg.src = pokemon.img;
    title.textContent = pokemon.name;
    text.textContent = pokemon.type;
    weight.textContent = pokemon.weight;
    height.textContent = pokemon.height;
    
    item.appendChild(elimg);
    div.appendChild(title);
    div.appendChild(text);
    divS.appendChild(weight)
    divS.appendChild(height);
    item.appendChild(div);
    item.appendChild(divS);
    
    
    elPokemonsList.appendChild(item);
    // console.log(item);
}

for ( var i=0 ; i < pokemons.length ; i++){
    pokemonCreator(pokemons[i]);
    // console.log(pokemons[i].type);
}




var formjs=document.querySelector('.content');
var elInput=document.querySelector('.content__ipt');
var elForm=document.querySelector('.bomba');
var eldarsa=document.querySelector('.dars');

formjs.addEventListener('submit',function(){
    var selValue=elPokemonsSelect.value
    var elformValue=elForm.value
    var eldars=eldarsa.value
    var elInputvalue=elInput.value
    console.log(selValue,elformValue,elInputvalue,eldars);
})









