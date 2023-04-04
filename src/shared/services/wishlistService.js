import api from "../shared/api";

const wishlistService = {
    async getWishlist() {
        try {
            const response = await api.get("/wishlist");
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },

    async addToWishlist(productId) {
        try {
            const response = await api.post("/wishlist", { productId });
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },

    async removeFromWishlist(productId) {
        try {
            const response = await api.delete(`/wishlist/${productId}`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },
};

export default wishlistService;
