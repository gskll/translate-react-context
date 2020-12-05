# Translate - React Context

Simple app to learn to use React Context and pros/cons vs Redux

**Props system** gets data from a parent component to a direct child

**Context system** gets data from a parent component to **any** child component



Can set context system in two ways

	- default value
	- `<Provider>` on the parent component

Can retrieve data in two ways

- `this.context` - only works if there's one Context being used
- `<Consumer>` on the nested child 



## Redux vs Context

| Redux                                             | Context                                |
| ------------------------------------------------- | -------------------------------------- |
| distributes data to various components            | distributes data to various components |
| centralizes data in a store                       |                                        |
| provides mechanism for changing data in the store |                                        |

**Redux**

- excellent documentation
- well-known design patterns
- open source libs

**Context**

- removes need for extra lib
- Hard to build a 'store' component with cross cutting concerns



