const app = require('express')();
const PORT = 8080;


app.listen(PORT, () => console.log(`Running API on http://localhost:${PORT}`))


app.get("/rotation", (req, res) => {
    res.status(200).send({
        'rotation': getRotation()
    })
})

app.post('/update/:variable', (req, res) => {
    const {variable} = req.params;
    const {new_val} = req.body;
})

app.post('/start', (req, res) => {
    const {start_angle} = req.body;

})

app.post('/pause', (req, res) => {
    const {reset} = req.body;
    if (reset) {reset_pendulum();}
    
})