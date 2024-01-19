
/**
 * @typedef {{
 *  borda: 'fina'|'tradicional'|'borda',
 *  molho: 'vermelho'|'amarelo',
 *  tipo: Array<'verdura'|'carne'>
 * }} State
 */

/** @type {State} */
export const initState = { 
  borda: "", 
  molho: "", 

  tipo:  [],  
};
