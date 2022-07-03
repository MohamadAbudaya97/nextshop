import { Resolvers, TodoMvc } from "./types";

const resolvers: Resolvers = {
  Query: {
    allTodos: async () => {
        return await {"name":"mohamad"};
    },
    Todo: async (_: any, { todoId }) => {
        return {"name":"mohamad"};
    },
  },
  Mutation: {
    createTodo: async (_: any, { description }) => {
        return {"name":"mohamad"};
    },
    updateTodo: async (_: any, { todoId, data }) => {
      return {"name":"mohamad"};
    },
  },
};

export default resolvers;
