const zod = require ("zod");
const createTodoSchema = zod.object({
    title: zod.string(),
    description: zod.string()
})

const updateTodoSchema = zod.object({
    _id: zod.string()
});

module.exports = {
    createTodoSchema: createTodoSchema,
    updateTodoSchema: updateTodoSchema
};