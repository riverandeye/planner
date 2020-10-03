package model

import (
	"gorm.io/gorm"
)

// Goal Model
type Goal struct {
	gorm.Model
	Title        string `json:"title"`
	Content      string `json:"content"`
	Accomplished bool   `json:"accomplished"`
}

func FindAllGoals() []Goal {
	var goals []Goal
	DBConn.Find(&goals)
	return goals
}
