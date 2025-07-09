import express from "express";
const router = express.Router();


let users = [
    { 
        id: 1,
        name: "Alice" 
    }
];


router.get("/", (req, res) => {
    res.json(users);
});

router.post("/", (req,res) => {
    const newUser = {
        id: users[users.length - 1].id + 1,
        name: req.body.name
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

router.get("/:id", (req, res) => {
    const id = req.params.id;
    const user = users.find(u => u.id == id); 

    if (!user) {
        return res.status(404).json({ msg: "User not found" });
    }

    res.json(user);
});


router.put("/:id", (req, res) => {
    const id = req.params.id;
    const user = users.find(u => u.id == id);

    if (!user) {
        return res.status(404).json({ msg: "User not found" });
    }

    user.name = req.body.name;
    res.json(user);
});

router.delete('/:id', (req, res) => {
    users = users.filter(u => u.id !== req.params.id);
    res.sendStatus(204);
  });




export default router;