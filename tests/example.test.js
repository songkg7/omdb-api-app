import * as example from './example'

describe('비동기 테스트', () => {
  test('async/await', async () => {
    jest.spyOn(example, 'asyncFn').mockResolvedValue('Done!') // 모의함수(Mock)
    const res = await example.asyncFn()
    expect(res).toBe('Done!')
  }, 7000)
})
