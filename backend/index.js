const express = require("express");
const { createTodoSchema, updateTodoSchema } = require("./types");
const app = express();

app.use(express.json());

app.post ("/todo", (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodoSchema.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs"
        });
    }

    //putting it in the database
});

app.get ("/todos", (req, res) => {

});

app.put ("/completed", (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodoSchema.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "Incorrect updation format"
        });
    }

    // putting it in the database
})