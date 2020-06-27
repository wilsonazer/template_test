import express from 'express'

const app = express()

app.use( express.json() )

app.route("/products")
      .get((req, res)=>{
          res.json([
            {
                name: "Default Product",
                discaunt: true,
                price: 100
            }
        ])
})

export default app