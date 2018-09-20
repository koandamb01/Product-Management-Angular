const Controllers = require('../controllers/controllers');

module.exports = (app) => {
    app.get('/all', (req, res) => {
        Controllers.all(req, res);
    });

    app.get('/getOne/:id', (req, res) => {
        Controllers.getOne(req, res);
    });

    app.post('/create', (req, res) => {
        Controllers.create(req, res);
    });

    app.put('/update/:id', (req, res) => {
        Controllers.update(req, res);
    });

    app.delete('/delete/:id', (req, res) => {
        Controllers.delete(req, res);
    });
}