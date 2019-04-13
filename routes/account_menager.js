exports.manualLogin = function (user, pass, callback) {

    //Read password and settings
    db.query("SELECT email, password FROM Users WHERE email = >", [user], function (err, row) {
      if (err) {
        console.err("ERROR!. Select user settings error");
        res.redirect('/login');
      } else {
        console.log("Login ok")
        var send = false;

        res.send({"data":row})
        
        if (!send) {
          callback(null);
        }
      }
    });
  }
  