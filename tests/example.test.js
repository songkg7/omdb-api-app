const userA = {
  name: 'HARIL',
  age: 27,
}
const userB = {
  name: 'Neo',
  age: 22,
}

test('데이터가 일치해야 합니다.', () => {
  expect(userA.age).toBe(27)
  expect(userA).toEqual({
    name: 'HARIL',
    age: 27,
  })
})

test('데이터가 일치하지 않아야 합니다.', () => {
  expect(userB.name).not.toBe('HARIL')
  expect(userB).not.toEqual(userA)
})
