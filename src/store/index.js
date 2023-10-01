const { create } = require("zustand");

const useCartStore = create((set) => ({
    cart: [],
    addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
    //removeFromCart: () => set((state) => ({ cart: })),
    emptyCart: () => set({ cart: [] })
}))

export {
    useCartStore
}