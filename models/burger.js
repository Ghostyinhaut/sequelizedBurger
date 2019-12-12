  
module.exports = function(sequelize, DataTypes){

	var burgers = sequelize.define("burgers", {
		burger: {
			type: DataTypes.STRING,
			allownull: false,
		},
		devoured: {
			type: DataTypes.BOOLEAN,
			allownull: false,
			defaultValue: false
		}

	},
	{

		//default time set
		timestamps: false
	}
	);
	return burgers;
}
  