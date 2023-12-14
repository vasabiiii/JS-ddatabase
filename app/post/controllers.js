const Topic = require('./models/Topic')
const TopicType = require('./models/TopicType')

const getPosts= async(req,res) =>{

    const topicTypes = await TopicType.findAll({
        include: {
            model: Topic,
            as: 'topic'
        }
    })

    res.status(200).send(topicTypes)

}

module.exports={
    getPosts
}