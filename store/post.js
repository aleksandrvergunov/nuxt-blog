export const state = () => ({

})

const posts = [{
  title: 'Post 1',
  date: new Date().toLocaleDateString(),
  views: 22,
  comments: [1, 2],
  _id: 'id1'
},
{
  title: 'Post 2',
  date: new Date().toLocaleDateString(),
  views: 22,
  comments: [1, 2],
  _id: 'id2'
}]

export const actions = {
  async fetchAdmin ({ a }) {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(posts)
      }, 2000)
    })
  },
  async remove ({ a }, id) {

  },
  async update ({ a }, { id, text }) {

  },
  async create ({ commit }, { title, text, image }) {
    try {
      const fd = new FormData()
      fd.append('title', title)
      fd.append('text', text)
      fd.append('image', image, image.name)

      return await new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, 1000)
      })
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },
  async fetchAdminById ({ a }, id) {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(posts.find(p => p._id === id))
      }, 1000)
    })
  }
}

export const mutations = {

}

export const getters = {

}
