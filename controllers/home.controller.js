exports.getHomePage = (req, res) => {
    let query = "SELECT * FROM `tasks` ORDER BY id ASC";

    db.query(query, (err, result) => {
        if (err) {
            res.redirect('/');
        }

        res.render('index.ejs', {
            title: "Welcome to Tasks | View Tasks",
            tasks: result
        });
    });
};
