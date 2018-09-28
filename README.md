# sample queries : (with Apollo playground) 
{ 
  tickers:getTicker(filters:{PointID:1003})  <!-- "tickers" is a name you can provide for dataset, not mandatory, "getTicker" is api name accepts parameters as filters. -->
    { Name, PointID, PositionID,SecurityType, TradedCountry } <!-- specify column names you want to fetch.-->
}

# sample queries : (with POSTMAN) 
 body : {"query":"{tickers:getTicker(filters:{PointID :1003}){ Name, PointID, PositionID,SecurityType, TradedCountry }}" }
 header : Content-Type:application/json

 