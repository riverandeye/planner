package model

// Goal Model
type Goal struct {
	Model
	Title        string `json:"title" binding:"required"`
	Content      string `json:"content" binding:"required"`
	Accomplished bool   `json:"accomplished"`
	ParentID     uint   `json:"parentId"`
	Parent       *Goal  `json:"parent"`
	Children     []Goal `gorm:"foreignkey:ParentID" json:"children"`
}

func FindAllGoals() []Goal {
	var goals []Goal
	DBConn.Find(&goals)
	return goals
}
