import axiosIns from "../../axiosInstance";
import error from "eslint-plugin-react/lib/util/error";


export const ChatApi = {
    sendMessage: async (message) => {
        console.log('Message to be sent:', message);

        try {
            const response = await axiosIns.post(`api/messages/addMessage`, {
                id: message.id,
                message: message.message,
                read: message.read,
                recipientId: message.recipientId,
                senderId: message.senderId,
                timestamp: message.timestamp,
                username: message.username,
            });

            const createdMessage = response.data;
            console.log('Message sent successfully');
            console.log('Created Message:', createdMessage);

            return createdMessage;
        } catch (error) {
            console.error('Error sending message:', error);
            throw error;
        }
    },

    getUserChats: async () => {
        try {
            const response = await axiosIns.get(`api/messages`);


            return response.data;
        } catch (error) {
            console.error('Error fetching user chats:', error);

            return [];
        }
    },

    createChat: async (userId) => {
        try {
            const response = await axiosIns.get(`api/messages/create/${userId}`);

            return response.data;
        } catch (error) {
            console.error('Error creating chat:', error);

            return null;
        }
    },

    getAllMessages: async () => {
        try {
            const response = await axiosIns.get(`api/messages`);

            return response.data;
        } catch (error) {
            console.error('Error fetching all messages:', error);

            return [];
        }
    },

    getChatMessages: async (chatId) => {
        try {
            const response = await axiosIns.get(`api/messages/${chatId}`);
            console.log('Message sent successfully');
            console.log('Created Message:', chatId);
            console.log(response)

            return response.data;
        } catch (error) {
            console.error('Error fetching chat messages:', error);

            return [];
        }
    },

    readChatMessages: async (chatId) => {
        try {
            await axiosIns.put(`api/messages/${chatId}/read`);
        } catch (error) {
            console.error('Error marking chat messages as read:', error);
        }
    },

    getUserList: async (keyword) => {
        try {
            const response = await axiosIns.get(`api/messages/users/search?keyword=${keyword}`);

            return response.data;
        } catch (error) {
            console.error('Error fetching user list:', error);

            return [];
        }
    },
};