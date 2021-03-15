const bycrypt = require('bcryptjs');
const User = require('../../models/users');
const jwt = require('jsonwebtoken');

module.exports = {
    createUser: async (args) => {
        try {
            const user = await User.findOne({email: args.userInput.email});
            if (user) {
                throw new Error('User exists already.');
            }
            const hashedPW = await bycrypt.hash(args.userInput.password, 12);
            const user1 = new User({
                email: args.userInput.email,
                password: hashedPW,
            });
            const result = await user1.save();
            return {...result._doc, password: null, _id: result.id};
        } catch (err) {
            throw err;
        }
    },
    login: async ({email, password}) => {
        try {
            const user = await User.findOne({email});
            if (!user) {
                throw new Error('User does not exist!');
            }
            const isEqual = await bycrypt.compare(password, user.password);
            if (!isEqual) {
                throw new Error('Password is incorrect!');
            }
            const token = jwt.sign({userId: user.id, email: user.email}, 'somesupersecretkey', {
                expiresIn: '1h',
            });
            return {userId: user.id, token: token, tokenExpiration: 1};
        } catch (err) {
            throw err;
        }
    },
};
