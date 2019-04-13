module.exports = {
    getHomePage: (req, res) => {
        let query = "SELECT * FROM posts"; // query database to get all the players

        // execute query
        db.query(query, (err, result) => {
            if (err) {
                console.log("ERROR on index: ", err)
                res.redirect('/');
            }
            else{
                res.send({data:result});
            }
        });
    },
};
