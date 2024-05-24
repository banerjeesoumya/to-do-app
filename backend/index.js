const express = require("express");
const { createTodoSchema, updateTodoSchema } = require("./types");
const { todo } = require("./db");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors())

app.post ("/todo", async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodoSchema.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs"
        });
    }
    
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    
    res.status(200).json({
        msg: "Todo created successfully"
    });

    
});

app.get ("/todos", async (req, res) => {
    const response = await todo.find({});
    res.json({
        response
    });
});

app.put ("/completed", async (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodoSchema.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "Incorrect updation format"
        });
    }

    await todo.updateOne({
        _id: req.body._id,
    }, {
        completed: true
    })
    res.json({
        msg: "Todo marked as complete"
    })
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});