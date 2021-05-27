import * as isVegan from 'is-vegan'

// IDENTIFICAR UN SOLO INGREDIENTE
function checkIngredient(name) {
  return isVegan.isVeganIngredient(name)
}

// IDENTIFICAR UNA LISTA DE INGREDIENTES
function checkList(list) {
  return isVegan.isVeganIngredientList(list.split(','))
}

// RETORNA UN OBJETO CON LOS INGREDIENTES QUE NO SON APTOS
function checkNoVegan(list) {
  return isVegan.checkIngredients(list.split(','));
}

// RETORNA UN ARREGLO SOLO CON LOS INGREDIENTES NO APTOS
function containsNoV(list) {
  return isVegan.containsNonVeganIngredients(list.split(','));
}

export default {
  checkIngredient,
  checkList,
  checkNoVegan,
  containsNoV
}
