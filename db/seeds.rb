# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Joke.create({joke: "Joke #1 -- text block Sint temporibus rerum earum nostrum.", categories: "explicit"})
Joke.create({joke: "Joke #2 -- text block Sint temporibus rerum earum nostrum.", categories: "explicit"})
Joke.create({joke: "Joke #3 -- text block Sint temporibus rerum earum nostrum.", categories: "explicit"})
Joke.create({joke: "Joke #4 -- text block Sint temporibus rerum earum nostrum.", categories: "explicit"})

puts Joke.all
