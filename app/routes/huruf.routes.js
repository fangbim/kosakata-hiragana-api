module.exports = app => {
    const huruf = require("../controllers/huruf.controller");
    const r = require("express").Router();

    r.get('/', huruf.findAll);
    r.get('/:id', huruf.show);
    r.post('/', huruf.create);
    r.put('/:id', huruf.update);
    r.delete('/:id', huruf.delete);

    app.use('/huruf', r);
}