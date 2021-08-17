import { asyncFn } from './example'

describe('비동기 테스트', () => {
  test('done', (done) => {
    asyncFn().then((res) => {
      expect(res).toBe('Done!')
      done()
    })
  })

  test('then', () => {
    return asyncFn().then((res) => {
      expect(res).toBe('Done!')
    })
  })

  test('resolves', () => expect(asyncFn()).resolves.toBe('Done!'))

  test('async/await', async () => {
    const res = await asyncFn()
    expect(res).toBe('Done!')
  }, 7000)  // 기본값은 5000 이기 때문에 그 이상의 시간이 필요하다면 인자를 주어 설정할 수 있다.
})
