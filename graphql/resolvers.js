const request = require("./request");

const resolvers = {
    Query:{
       async getPrices(parent,args,ctx,info){
           const prices = await request.getPrices();
           return { price: prices.data };
       },
       async getPrice(parent,args,ctx,info){
           const prices = await request.getPrices();
           return { price: { [args["currency"]]:prices.data[args["currency"]] } }
       }
    }
};

module.exports = resolvers;