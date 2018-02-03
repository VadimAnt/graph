const _ = require('lodash');
const users = [
	{
		id: 1,
		fname: "test1",
		lname: "test2fname"
	},
	{
		id: 2,
		fname: "test2",
		lname: "test1fname"
	},
	{
		id: 3,
		fname: "test3",
		lname: "test3fname"
	},
];

class UserController {
	constructor(){}

	users(root, args){
		if(_.has(args, 'id')) {
			return users.find((el) => { return el.id === args.id });
		}

		return users;
	}

	create(root, args){
		users.push(args); return args;
	}

	edit(root, args){
		console.log(args);
		let user = users.find((el) => { return el.id === args.id });
		user.fname = args.fname;
		return user;
	}

};

module.exports = new UserController();