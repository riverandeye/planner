package controller

import (
	"strconv"

	"github.com/gin-gonic/gin"
	"github.com/riverandeye/planner/server/service"
)

func GetGoals(c *gin.Context) {
	goals := service.GetGoals()

	c.JSON(200, goals)
}

func GetGoal(c *gin.Context) {
	id, err := strconv.Atoi(c.Param("id"))

	if err != nil {
		panic(err)
	}

	goal := service.GetGoal(id)

	c.JSON(200, goal)
}

func CreateGoal(c *gin.Context) {
	service.CreateGoal()

	c.JSON(200, gin.H{"result": "Success"})
}

func DeleteGoal(c *gin.Context) {
	id, err := strconv.Atoi(c.Param("id"))

	if err != nil {
		panic(err)
	}

	service.DeleteGoal(id)
	c.JSON(200, gin.H{"result": "Success"})
}

func UpdateGoal(c *gin.Context) {}
