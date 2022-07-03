import { Resolvers, TodoMvc } from "./types";

const dbPromise = connect();

const getCollection = async () => {
  const db = await dbPromise;
  return db.collection<TodoMvcDbObject>("todos");
};

const fromDbObject = (dbObject: TodoMvcDbObject): TodoMvc => ({
  todoId: dbObject._id.toHexString(),
  completed: dbObject.completed,
  description: dbObject.description,
});

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
