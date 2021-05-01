import * as isVegan from 'is-vegan'

function checkIngredient(name) {
  return isVegan.isVeganIngredient(name)
}

function checkList(list) {
  return isVegan.isVeganIngredientList(list)
}

export default {
  checkIngredient,
  checkList,
}
