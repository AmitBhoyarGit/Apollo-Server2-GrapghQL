import {
  SecurityPoint
} from './../Models/securityPointSnapshot.model'


const resolvers = {
  Query: {
    getTicker(root, args) {
      return tickerLookup(SecurityPoint,args.filters)
    },
    allNames(_, args) {
      console.log(SecurityPoint);
      return SecurityPoint.findAll();
    }
  }
};
const tickerLookup = (dbRef, value) =>{
  return Promise.resolve( 
    dbRef.findAll({where:value })
  )
}

export default resolvers;