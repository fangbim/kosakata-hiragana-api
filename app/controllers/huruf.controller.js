const db = require("../models");
const Huruf = db.huruf;

exports.create = (req, res) => {
    Huruf.create(req.body)
    .then(() => {
        res.send({message: 'Data Berhasil di simpan'})
    })
    .catch((err) => {
        res.status(500).send({message: err.message})
    });
}

exports.findAll = (req, res) => {
    Huruf.find()
    .then((data) => {
        res.send(data)
    })
    .catch((err) => {
        res.status(500).send({message: err.message})
    })
}

exports.show = (req, res) => {
    const id = req.params.id;

    Huruf.findById(id)
    .then((data) => {
        res.send(data)
    }).catch((err) => {
        res.status(500).send({message: err.message})
    });
}

exports.update = (req, res) => {
    const id = req.params.id;

    Huruf.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
    .then(data => {
        if(!data) {
            res.status(404).send({message: "Tidak dapat mengupdate data"})
        }
        res.send({message: "Data berhasil di update"}) 
    }).catch(err => res.status(500).send({message: err.message}));
}

exports.delete = (req, res) => {
    const id = req.params.id;

    Huruf.findByIdAndDelete(id)
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