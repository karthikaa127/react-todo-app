import {addTodo, findByID, toggleTodo, updateTodo} from './todoHelpers'

test('addTodo should add a list item to todos', () => {
  const startTodos = [
    {id:1, name:'one', isComplete: false},
    {id:2, name:'two', isComplete: false}
  ]
  const newTodo = {id:3, name:'three', isComplete: false}
  const expected = [
    {id:1, name:'one', isComplete: false},
    {id:2, name:'two', isComplete: false},
    {id:3, name:'three', isComplete: false}
  ]
  const result = addTodo(startTodos, newTodo)

  expect(result).toEqual(expected)
})

test('addTodo should not edit the same list', () => {
  const startTodos = [
    {id:1, name:'one', isComplete: false},
    {id:2, name:'two', isComplete: false}
  ]
  const newTodo = {id:3, name:'three', isComplete: false}
  const expected = [
    {id:1, name:'one', isComplete: false},
    {id:2, name:'two', isComplete: false},
    {id:3, name:'three', isComplete: false}
  ]
  const result = addTodo(startTodos, newTodo)

  expect(result).not.toBe(startTodos)

})

test('findByID should return expected list item', () => {
  const startTodos = [
    {id:1, name:'one', isComplete: false},
    {id:2, name:'two', isComplete: false},
    {id:3, name:'three', isComplete: false}
  ]
  const expected = {id:3, name:'three', isComplete: false}

  const result = findByID(3, startTodos)

  expect(result).toEqual(expected)
})

test('toggleTodo should negate the isComplete property', () => {
  const startTodo = {id:3, name:'three', isComplete: true}
  const expected = {id:3, name:'three', isComplete: false}
  const result = toggleTodo(startTodo)

  expect(result).toEqual(expected)
})

test('toggleTodo should not edit the same list', () => {
  const startTodo = {id:3, name:'three', isComplete: true}
  const expected = {id:3, name:'three', isComplete: false}
  const result = toggleTodo(startTodo)

  expect(result).not.toBe(startTodo)
})

test('updateTodo should update the element with id', () => {
  const startTodos = [
    {id:1, name:'one', isComplete: false},
    {id:2, name:'two', isComplete: false},
    {id:3, name:'three', isComplete: false}
  ]
  const updated = {id:3, name:'three-updated', isComplete: true}
  const expected = [
    {id:1, name:'one', isComplete: false},
    {id:2, name:'two', isComplete: false},
    {id:3, name:'three-updated', isComplete: true}
  ]
  const result = updateTodo(startTodos,updated)

  expect(result).toEqual(expected)
})

test('updateTodo should not update the same list', () => {
  const startTodos = [
    {id:1, name:'one', isComplete: false},
    {id:2, name:'two', isComplete: false},
    {id:3, name:'three', isComplete: false}
  ]
  const updated = {id:3, name:'three-updated', isComplete: true}
  const expected = [
    {id:1, name:'one', isComplete: false},
    {id:2, name:'two', isComplete: false},
    {id:3, name:'three-updated', isComplete: true}
  ]
  const result = updateTodo(startTodos,updated)

  expect(result).not.toBe(startTodos)
})
