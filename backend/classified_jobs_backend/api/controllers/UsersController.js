/**
 * UsersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    AddUser: async function(req, res) {
        var user = req.body;
        await Users.create(user).exec(function(err, addedUser) {
            if (err) {
                return res.send(500, { error: err });
            }
            return res.send(200, {
                newuser: addedUser,
                message: "New user added successfully"
            });
        });
    },

    ListUser: function(req, res) {
        Users.find().exec(function(err, users) {
            if (err) {
                return res.send(500, { error: err });
            }
            return res.send(200, { list: users });
        });
    },
};
