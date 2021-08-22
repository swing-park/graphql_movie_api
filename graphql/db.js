const people = [{
	id: 1,
	name: 'swing',
	age: 24,
	isMale: true
},
{
	id: 2,
	name: 'park',
	age: 23,
	isMale: false
},
{
	id: 3,
	name: 'hyeon',
	age: 22,
	isMale: true
}];

let movies = [
	{
		id: 0,
		name: 'a movie',
		score: 4
	},
	{
		id: 1,
		name: 'b movie',
		score: 3
	},
	{
		id: 2,
		name: 'c movie',
		score: 2
	},
	{
		id: 3,
		name: 'd movie',
		score: 1
	}
]

const getPeople = () => people;
const getMovies = () => movies;


const getById = (id) => {
	const filteredMovies = movies.filter(movie => movie.id === id);
	return filteredMovies[0]
};

const deleteMovie = (id) => {
	const cleanedMovies = movies.filter(movie => movie.id !== id);
	if (movies.length > cleanedMovies.length) {
		movies = cleanedMovies;
		return true
	} else {
		return false
	}
}

const addMovie = (name, score) => {
	const newMovie = {
		id: `${movies.length}`,
		name,
		score
	};
	movies.push(newMovie);
	return newMovie
}

export { getPeople, getMovies, getById, deleteMovie, addMovie }