const express = require('express');
const projects = require('./data/helpers/projectModel');
const actions = require('./data/helpers/actionModel');

const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send('Success');
});





server.get('/projects', (request, response) => {

    const {id} = request.params;
    
    projects.get(id)
        .then((id) => {
            response.status(201).json(id);

        })
        .catch((fail) => {
            console.log(fail);
            response.status(500).json({ error: 'Projects could not be retrieved.'});
        })
});


server.get('/actions', (request, response) => {

    const {id} = request.params;
    
    actions.get(id)
        .then((action) => {
            response.status(201).json(action);

        })
        .catch((fail) => {
            console.log(fail);
            response.status(500).json({ error: 'Projects could not be retrieved.'});
        })
});



server.post('/actions', (req, res) => {
    const {id} = req.params;
    
    actions.insert(action)
        .then(action => {
            res.status(201).json(action);
        })
        .catch((fail) => {
            console.log(fail);
            res.status(500).json({ error: "There was an error while saving the action to the database." });
        });
        
});

server.post('/projects', (req, res) => {
    const {id} = req.params;
    
    projects.insert(project)
        .then(id => {
            res.status(201).json(id);
        })
        .catch((fail) => {
            console.log(fail);
            res.status(500).json({ error: "There was an error while saving the project to the database." });
        });
        
});



server.delete('/projects/:id', (req, res) => {
    const {id} = req.params;

        projects.remove(id)
            .then((id) => {
                res.status(201).json(id);
            })
            .catch((fail) => {
                console.log(fail);
                res.status(404).json({ message: "The project with the specified ID does not exist."});
            });

    projects.remove(id)
        .then((id) => {
            response.json(id);
        })
        .catch((fail) => {
            console.log(fail);
            response.status(500).json({
                error: "The project could not be removed"
            });
        })
});


server.delete('/actions/:id', (req, res) => {
    const {id} = req.params;

        actions.get(id)
            .then((action) => {
                res.status(201).json(action);
            })
            .catch((fail) => {
                console.log(fail);
                res.status(404).json({ message: "The action with the specified ID does not exist."});
            });

    actions.remove(id)
        .then((id) => {
            response.json(id);
        })
        .catch((fail) => {
            console.log(fail);
            response.status(500).json({
                error: "The action could not be removed"
            });
        })
});


server.put('/projects', (request, response) => {

    const {id} = request.params;
    const {changes} = request.body;
    
    projects.update(id, changes)
        .then((id, changes) => {
            response.status(201).json(id, changes);

        })
        .catch((fail) => {
            console.log(fail);
            response.status(500).json({ error: 'Projects could not be updated.'});
        })
});


server.put('/actions', (request, response) => {

    const {id} = request.params;
    const {changes} = request.body;
    
    actions.update(id, changes)
        .then((id, changes) => {
            response.status(201).json(id, changes);

        })
        .catch((fail) => {
            console.log(fail);
            response.status(500).json({ error: 'Actions could not be updated.'});
        })
});







server.listen(4000, () => console.log('\n== API on port 4k ==\n'));