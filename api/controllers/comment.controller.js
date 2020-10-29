const Comment = require('../models/comment.model')
const Post = require('../models/post.model')

module.exports.create = async (req, res) => {
  try {
    const comment = new Comment({
      name: req.body.name,
      text: req.body.text,
      postId: req.body.postId
    })
    await comment.save()
    // save new id comment for the post
    const post = await Post.findById(req.body.postId)
    post.comments.push(comment.__id)
    await post.save()

    res.status(201).json(comment)
  } catch (e) {
    res.status(500).json(e)
  }
}
