const Message = require('../../models/Message');

module.exports = {
    Mutation: {
        async createMessage(_, {messageInput: {text, username} }) {
            console.log(res);
            return {
                id: "res.id"
            };
        }
    },
    Query: {
        message: (_, {ID}) => {}
    }
}
