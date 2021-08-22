import { getPeople, getMovies, getById, deleteMovie, addMovie } from "./db"

const resolvers = {
	Query: {
		people: () => getPeople(),
		movies: () => getMovies(),
		movie: (_, { id }) => getById(id),
	},
	Mutation: {
		addMovie: (_, { name, score }) => addMovie(name, score),
		deleteMovie: (_, { id }) => deleteMovie(id)
	}
}

export default resolvers