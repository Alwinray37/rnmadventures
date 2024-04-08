const express = require('express')
const articleRouter = require('./routes/articles')
const app = express()

app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

app.get('/', (req, res) => {
    const articles = [{
        title: 'test title',
        createdAt: new Date(),
        description: 'Test Description'
    }]
    res.render('index', { articles: articles })
})

app.listen(5001)
// test
// asdf