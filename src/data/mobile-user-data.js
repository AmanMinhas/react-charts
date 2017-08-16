export default [
	{
		name: 'Elle Javier - Quingco',
		hrs: 9,
		mins: 20,
		fill: '#5b6bc3',
		avatar: '/avatar/avatar3.png',
		get totalMins() { return this.hrs * 60 + this.mins }
	},
	{
		name: 'Lester Douglas',
		hrs: 1, mins: 25,
		fill: '#fed145',
		avatar: '/avatar/avatar4.png',
		get totalMins() { return this.hrs * 60 + this.mins },
	},
	{
		name: 'Dimity shytsko',
		hrs: 0, mins: 30,
		fill: '#f45364',
		avatar: '/avatar/avatar5.png',
		get totalMins() { return this.hrs * 60 + this.mins }
	},
];