import mongoose from 'mongoose';

const annuaireSchema = new mongoose.Schema({
    nom: String,
    numero: String
});

let model = mongoose.model('Annuaire', annuaireSchema);

export default class Annuaire {

    findAll(req, res) {
        model.find({}, (err, annuaires) => {
            if (err) {
                res.sendStatus(403);
            } else {
                res.json(annuaires);
            }
        });
    }

    findById(req, res) {
        model.findById(req.params.id, (err, annuaire) => {
            if (err || !annuaire) {
                res.sendStatus(403);
            } else {
                res.json(annuaire);
            }
        });
    }

    create(req, res) {
        model.create({
                nom: req.body.nom,
                numero: req.body.numero
            },
            (err, annuaire) => {
                if (err) {
                    res.status(500).send(err.message);
                } else {
                    res.json(annuaire);
                }
            });
    }

    update(req, res) {
        model.update({
            _id: req.params.id
        }, {
            nom: req.body.nom,
            numero: req.body.numero
        }, (err, annuaire) => {
            if (err || !annuaire) {
                res.status(500).send(err.message);
            } else {
                res.json(annuaire);
            }
        });
    }

    delete(req, res) {
        model.findByIdAndRemove(req.params.id, (err) => {
            if (err) {
                res.status(500).send(err.message);
            } else {
                res.sendStatus(200);
            }
        })
    }
}