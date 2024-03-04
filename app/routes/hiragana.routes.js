module.exports = app => {
    const hiragana = require("../controllers/hiragana.controller");
    const r = require("express").Router();

    r.get('/', hiragana.findAll);
    r.get('/:id', hiragana.show);
    r.post('/', hiragana.create);
    r.put('/:id', hiragana.update);
    r.delete('/:id', hiragana.delete);

    app.use('/hiragana', r);
}