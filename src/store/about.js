export default {
  namespaced: true,

  // 데이터의 불변성을 위해 함수로 만들어준다.
  state: () => ({
    name: 'HARIL',
    email: 'songkg7@gmail.com',
    blog: 'https://songkg7.tistroy.com',
    phone: '+82 10-1234-5678',
    image: 'https://tistory2.daumcdn.net/tistory/4210103/attach/e91834925aca4d7bbfbb7a81c158f2fd',
  }),
}