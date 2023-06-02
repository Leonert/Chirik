import axiosIns from "../axiosInstance";

export const ChatApi = {
    getUserChats: async (userId) => {
        try {
            const response = await axiosIns.get(`/api/messages`, {
                params: {
                    userId,
                },
            });

            return response.data;
        } catch (error) {
            return [];
        }
    },

    getChatMessages: async (chatId) => {
        try {
            const response = await axiosIns.get(`/api/messages/chats/${chatId}`);

            return response.data;
        } catch (error) {

            return [];
        }
    },
    deleteChatId: async  (chatId)=>{
        const response = await axiosIns.get(`/api/messages/chats/${chatId}`);

        return response.data;
    }
};