
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



module.exports = {
	user: (root, args) => {return users.find((el) => { return el.id === args.id || el.fname === args.fname }); },
	users: () => { return users },
	addUser: (root, args) => { users.push(args); return args; },
	editfname: (root, args) => {
		let user = users.find((el) => { return el.id === args.id });
		user.fname = args.fname;
		return user;
	}
};