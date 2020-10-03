package controller

import (
	"github.com/gin-gonic/gin"
	"github.com/riverandeye/planner/server/model"
)

func GetGoals(c *gin.Context) {
	goals := model.FindAllGoals()

	c.JSON(200, goals)
}

func GetGoal(c *gin.Context) {
}

func CreateGoal(c *gin.Context) {}

func DeleteGoal(c *gin.Context) {}

func UpdateGoal(c *gin.Context) {}
