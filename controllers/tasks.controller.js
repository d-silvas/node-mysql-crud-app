exports.addTaskPage = (req, res) => {
    res.render('add-task.ejs', {
        title: "Welcome to Tasks | Add a new task",
        message: ''
    });
};

exports.addTask = (req, res) => {
    const { description, area, priority, predecessors, date, periodicity } = req.body;

    let query = `INSERT INTO \`tasks\` (description, area, priority, predecessors, date, periodicity) VALUES \
        ('${description}', '${area}', '${priority}', '${predecessors}', '${date}', '${periodicity}')`;
    db.query(query, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.redirect('/');
    });
}

exports.editTaskPage = (req, res) => {
    let taskId = req.params.id;
    let query = `SELECT * FROM \`tasks\` WHERE id = '${taskId}'`;
    db.query(query, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.render('edit-task.ejs', {
            title: "Edit  Task",
            task: result[0],
            message: ''
        });
    });
}

exports.editTask = (req, res) => {
    let taskId = req.params.id;
    const { description, area, priority, predecessors, date, periodicity } = req.body;

    let query = `UPDATE \`tasks\` SET \`description\`='${description}', \`area\`='${area}', \`priority\`='${priority}', \
        \`predecessors\`='${predecessors}', \`date\`='${date}', \`periodicity\`='${periodicity}' \
        WHERE \`tasks\`.\`id\`='${taskId}'`;

    db.query(query, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.redirect('/');
    });
}

exports.deleteTask = (req, res) => {
    let taskId = req.params.id;
    let query = `DELETE FROM tasks WHERE id = "${taskId}"`;

    db.query(query, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.redirect('/');
    });
}
