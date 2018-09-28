//import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolver'
import {
  makeExecutableSchema,
  gql
} from 'apollo-server'

const typeDefs = gql`
scalar Date
type Query {
  allNames:[Ticker]
  getTicker(filters:Filter):[Ticker]
}
input Filter{
  PointID: Int
  Name: String
  SecurityType: String
  AsOfDate:Date
  TradedCountry: String
  Cusip:Int
  Sedol: String
  Ticker:String
  Isin: String
  CompanyID :Int
  IncorporateCountry :String
  DomicileCountry :String
  CIK :String
  GVKey :String
  IID :String
  SACSecCode :String
  IBESTicker :String
  Name :String
  PositionID :String
  SecCode :Int
  TAQTicker :String
  StartDate :Date
  EndDate :Date
}

type Ticker {
  PointID: Int
  Name: String
  SecurityType: String
  AsOfDate:Date
  TradedCountry: String
  Cusip:Int
  Sedol: String
  Ticker:String
  Isin: String
  CompanyID :Int
  IncorporateCountry :String
  DomicileCountry :String
  CIK :String
  GVKey :String
  IID :String
  SACSecCode :String
  IBESTicker :String
  Name :String
  PositionID :String
  SecCode :Int
  TAQTicker :String
  StartDate :Date
  EndDate :Date
}
`;

// author(Name: String): Ticker
// allAuthors: [Ticker],

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});
export default schema;