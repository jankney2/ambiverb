module.exports = {
  createListing: async (req, res) => {
    let db = req.app.get('db')
    let { listing_title, description, category, owning_user } = req.body

    try {
      await db.create_listing([owning_user, listing_title, description, category])

      res.status(200).send({
        message:'Thanks for uploading your listing! It will be on ambiverb shortly.'
      })

    } catch (error) {
      res.status(500).send(error)
    }
  }
}