package service

import (
	"github.com/riverandeye/planner/server/model"
	"gorm.io/gorm"
)

func GetGoals() []model.Goal {
	var goals []model.Goal
	model.DBConn.Find(&goals)
	return goals
}

func GetGoal(id int) model.Goal {
	var goal model.Goal
	model.DBConn.First(&goal, id)

	return goal
}

func GetRootGoals() []model.Goal {
	var goals []model.Goal

	model.DBConn.Where("parent_id", nil).Find(&goals)

	return goals
}

func GetChildrens(id int) []model.Goal {
	var goals []model.Goal
	model.DBConn.Where("parent_id", id).Find(&goals)

	return goals
}

func CreateGoal(newGoal model.Goal) {

	var result *gorm.DB
	if newGoal.ParentID == 0 {
		result = model.DBConn.Select("created_at", "updated_at", "title", "content", "accomplished").Create(&newGoal)
	} else {
		result = model.DBConn.Select("created_at", "updated_at", "title", "content", "accomplished", "parent_id").Create(&newGoal)
	}

	if result.Error != nil {
		panic(result.Error)
	}
}

func DeleteGoal(id int) {
	result := model.DBConn.Delete(&model.Goal{}, id)

	if result.Error != nil {
		panic(result.Error)
	}
}

func UpdateGoal() {}
