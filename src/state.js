
/**
 * @typedef {Object} State
 * @property {'vermelho'|'amarelo'} State.molho - pode ser `vermelho` ou `amarelo`
 * @property {'fina'|'tradicional'|'borda'} State.borda - pode ser `borda`, `tradicional` ou `fina`
 * @property {Array<'verdura'|'carne'>} Props.tipos - pode ser `carne` ou `verdura`
 * 
 */

/** @type {State} */
export const initState = { 
  borda: "", 
  molho: "", 

  tipos:  [],  
};
