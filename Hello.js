export default function Hello(app) {
  app.get('/hello', (req, res) => {
    res.send('Life is good!')
  })
  app.get('/', (req, res) => {
    console.log('Welcome to Full Stack Development!')
    res.send('Welcome to Full Stack Development!')
  })
}
