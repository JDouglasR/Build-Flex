module.exports = function(sequelize, DataTypes) {
  const allChallenges = sequelize.define("allChallenges", {
    challenge: {
      type: DataTypes.STRING
    },
    goal: {
      type: DataTypes.INTEGER
    },
    miles: {
      type: DataTypes.INTEGER
    },
    duration: {
      type: DataTypes.INTEGER
    },
    steps: {
      type: DataTypes.INTEGER
    },
    reps: {
      type: DataTypes.INTEGER
    }
  });

  allChallenges.associate = function(models) {
    // eslint-disable-next-line prettier/prettier
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    allChallenges.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return allChallenges;
};
