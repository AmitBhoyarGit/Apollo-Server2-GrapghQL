import {
    db,
    DataTypes
} from '../data/connector_sequelize'

db.define('SecurityPoint', {
    PointID: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    Name: DataTypes.STRING,
    SecurityType: DataTypes.STRING,
    AsOfDate: DataTypes.DATE,
    TradedCountry: DataTypes.STRING,
    Cusip: DataTypes.INTEGER,
    Sedol: DataTypes.STRING,
    Ticker: DataTypes.STRING,
    Isin: DataTypes.STRING,
    CompanyID: DataTypes.INTEGER,
    IncorporateCountry: DataTypes.STRING,
    DomicileCountry: DataTypes.STRING,
    CIK: DataTypes.STRING,
    GVKey: DataTypes.STRING,
    IID: DataTypes.STRING,
    SACSecCode: DataTypes.STRING,
    IBESTicker: DataTypes.STRING,
    Name: DataTypes.STRING,
    PositionID: DataTypes.STRING,
    SecCode: DataTypes.INTEGER,
    TAQTicker: DataTypes.STRING,
    StartDate: DataTypes.DATE,
    EndDate: DataTypes.DATE,
}, {
    tableName: 'SecurityPointSnapshot',
    timestamps: false,
    hasTriggers: false
});

//const Post = db.models.post;
const SecurityPoint = db.models.SecurityPoint;
export {
    SecurityPoint
};