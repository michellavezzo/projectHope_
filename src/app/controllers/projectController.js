
const Project = require('../models/Project');
const Task = require('../models/Task');

// router.use(authMiddleware);

//rota de listagem
// router.get('/', 
exports.index = async (req, res) => {
    try {
        const projects = await Project.find().populate(['user', 'tasks']);

        return res.send({ projects });
        
    } catch (err) {
        return res.status(400).send({ error: 'Error loading projects' });    
    }
};

// rota de projeto
// router.get('/:projectId', 
exports.show = async (req, res) => {
    try {
        const project = await Project.findById(req.params.projectId).populate(['user', 'tasks']);

        return res.send({ project });
        
    } catch (err) {
        return res.status(400).send({ error: 'Error loading project' });    
    }    
};

//rota de criação
// router.post('/', 
exports.create = async (req, res) => {
    try {
        const { title, description, tasks } = req.body;

        const project = await Project.create({ title, description, user: req.userId });

        await Promise.all(tasks.map(async task => {
            const projectTask = new Task({ ...task, project: project._id });

            await projectTask.save();

            project.tasks.push(projectTask);
        }));

        await project.save();

        return res.send({ project });

    } catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Error creating new project' });
    }
};

//rota de atualizacao
// router.put('/:projectId', 
exports.update = async (req, res) => {
    try {
        const { title, description, tasks } = req.body;

        const project = await Project.findByIdAndUpdate(req.params.projectId,{
            title, 
            description,  
        }, {new: true});

        project.tasks = [];
        await Task.remove({ project: project._id});

        await Promise.all(tasks.map(async task => {
            const projectTask = new Task({ ...task, project: project._id });

            await projectTask.save();

            project.tasks.push(projectTask);
        }));

        await project.save();

        return res.send({ project });

    } catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Error updating new project' });
    }
};

// rota delete
// router.delete('/:projectId', 
exports.destroy = async (req, res) => {
    try {
        await Project.findByIdAndRemove(req.params.projectId).populate('user');

        return res.send();
        
    } catch (err) {
        return res.status(400).send({ error: 'Error removing project' });    
    } 
};

// module.exports = app => app.use('/projects', router);