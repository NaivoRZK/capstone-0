// store.js
import create from 'zustand';

const useStore = create(set => ({
 articles: {
    greekSalad: {
      quantity: 0,
      setQuantity: (value) => set(state => ({ articles: { ...state.articles, greekSalad: { ...state.articles.greekSalad, quantity: value } } })),
    },
    bruchetta: {
      quantity: 0,
      setQuantity: (value) => set(state => ({ articles: { ...state.articles, bruchetta: { ...state.articles.bruchetta, quantity: value } } })),
    },
    dessert: {
      quantity: 0,
      setQuantity: (value) => set(state => ({ articles: { ...state.articles, dessert: { ...state.articles.dessert, quantity: value } } })),
    },
 },
}));

export default useStore;



