const casual = require('casual').fr_FR;

module.exports =  () => {
    const data = { posts:[] }
    for(let i = 0; i <25; i++){
        data.posts.push({id: i, title: casual.title, content: casual.sentences(n=50), author: casual.name, date: casual.date()})
    }
    return data
}