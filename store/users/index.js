export const state = () => ({
	users: [
		{
			username: 'marian7',
			fname: 'Barian',
			lname: 'Mamić',
			age: 24,
			photo:
				'https://our.umbraco.com/media/wiki/270186/636266273433443386_muskpng.png',
			bio: '',
			country: 'Croatia', // ili country code; dohvatit cu zastavu prek apija
			joined_on: null, // timestamp kad je kreirao account
			coins: 400,
			// categories: [{ id: '', name: '' }],
			// badges: [{ id: '', name: '', timestamp: null }],
			rank: null,
			isPrivate: false,
			isPremium: false,
			// ili todos array koji pa ima key koji oznacuje kojoj listi priprada
			lists: [
				{
					id: '',
					timestamp: '',
					name: '',
					partner: '',
					todos: {
						id: '',
						title: '',
						desc: '', // optional
						urgency: '',
						categories: [{ id: '', name: '' }],
						isDaily: false,
						timestamp: null,
						approved: false,
					},
					likes: [{ user: '' }],
					comments: [
						{
							id: '',
							timestamp: '',
							user: '',
							content: '',
							likes: [{ user: '' }],
						},
					],
				},
			],
		},
		{
			username: 'matijaVue',
			fname: 'Matija',
			lname: 'Osrečki',
			age: 13,
			photo:
				'https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4_400x400.jpg',
			bio: '',
			country: 'Croatia',
		},
		{
			username: 'patrikHarmonika',
			fname: 'Patrik',
			lname: 'Slovic',
			age: 55,
			photo:
				'https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X.jpg',
			bio: '',
			country: 'Spain',
		},
		{
			username: 'tomoKotar',
			fname: 'Tomislav',
			lname: 'Mikšik',
			age: 34,
			photo:
				'https://media.npr.org/assets/img/2018/11/21/gettyimages-962142720-3f4af695a639cbc14deb90e88287cd3c19b676f4-s800-c85.jpg',
			bio: '',
			country: 'Nigeria',
		},
	],
});

export const getters = {
	users(state) {
		return state.users || [];
	},
};

// export const mutations = {
// 	updateValue(state, payload) {
// 		state.value = payload;
// 	},
// };

// export const actions = {
// 	updateActionValue({ commit }) {
// 		commit('updateValue', payload);
// 	},
// };
