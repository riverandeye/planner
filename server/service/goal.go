package service

import (
	"github.com/riverandeye/planner/server/model"
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

func CreateGoal() {
	goal := model.Goal{Title: "hello", Content: "Yello", Accomplished: false, ParentID: 5}

	result := model.DBConn.Create(&goal)

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
