exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'HARIL',
      age: 27,
      email: 'songkg7@gmail.com',
    }),
  }
}
