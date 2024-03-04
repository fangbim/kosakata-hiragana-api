const db = require("../models");
const Hiragana = db.hiragana;

exports.create = (req, res) => {
    Hiragana.create(req.body)
    .then(() => {
        res.send({message: 'Data Berhasil di simpan'})
    })
    .catch((err) => {
        res.status(500).send({message: err.message})
    });
}

exports.findAll = (req, res) => {
    Hiragana.find()
    .then((data) => {
        res.send(data)
    })
    .catch((err) => {
        res.status(500).send({message: err.message})
    })
}

exports.show = (req, res) => {
    const id = req.params.id;

    Hiragana.findById(id)
    .then((data) => {
        res.send(data)
    }).catch((err) => {
        res.status(500).send({message: err.message})
    });
}

exports.update = (req, res) => {
    const id = req.params.id;

    Hiragana.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
    .then(data => {
        if(!data) {
            res.status(404).send({message: "Tidak dapat mengupdate data"})
        }
        res.send({message: "Data berhasil di update"}) 
    }).catch(err => res.status(500).send({message: err.message}))
}

exports.delete = (req, res) => {
    const id = req.params.id;

    Hiragana.findByIdAndDelete(id)
    .then((data) => {
        if(!data) {
            res.status(404).send({message: "Tidak dapat menghapus data"})
        }
        res.send({message: "Data berhasil di hapus"})        
    })
    .catch((err) => {
        res.status(500).send({message: err.message})    
    });
}