import { app, request, expect } from '../helpers'

describe(" Routes: Products ", ()=>{
    const defaulProduct = {
        name: "Default Product",
        description: "Product description",
        price: 100
    }

    describe("GET / Products", ()=>{
       it(" It shoud retun a list of products ", done =>{
           request
               .get('/products')
               .end( (err, res )=>{
                   expect( res.body[0] ).to.be.eql( defaulProduct )
                   done( err )
               })
       })
    })
})