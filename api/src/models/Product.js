const { DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('product', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        stock: {
            type: DataTypes.INTEGER,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        description:{
            type:DataTypes.TEXT
        },
        img:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        comments:{
            type:DataTypes.TEXT
        },
        calification:{
            type:DataTypes.STRING
        },
        company:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        discount:{
            type:DataTypes.INTEGER
        },
        gameMode:{
            type:DataTypes.STRING
        },
        MinRequirements:{
            type:DataTypes.TEXT
        },
        RecommendRequirements:{
            type:DataTypes.TEXT
        },
    })
}