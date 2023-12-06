const express = require("express");
const router = express.Router();
const userSchema = require("../models/user");


router.post("/profile", (req,res) =>{
    const user = userSchema(req.body);
    user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

router.get("/profile", (req,res) =>{
    userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

router.put("/profile", (req, res) => {
    userSchema.findOneAndUpdate({}, req.body, { new: true })
        .then(updatedUser => {
            if (!updatedUser) {
                return res.status(404).json({ message: "Usuario no encontrado" });
            }
            res.json(updatedUser);
        })
        .catch(error => res.status(500).json({ message: error }));
});

module.exports = router;

