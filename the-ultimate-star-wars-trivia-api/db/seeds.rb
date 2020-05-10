# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Theme.destroy_all
Question.destroy_all


person = Theme.create(name: "person")
films = Theme.create(name: "films")
spaceships = Theme.create(name: "spaceships")
species = Theme.create(name: "species")
vehicles = Theme.create(name: "vehicles")
planets = Theme.create(name: "planets")




Question.create(name: "What is the first Star Wars movie to debut & what year?", theme: films)
Question.create(name: "What species is Jabba Desilijic Tiure?", theme: person)
Question.create(name: "In which movie does Princess Lea say these iconic lines?")
Question.create(name: "What planet was Anakin discovered on?")
Question.create(name: "What is the Force?")    
