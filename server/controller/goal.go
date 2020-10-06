package controller

import (
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
	"github.com/riverandeye/planner/server/model"
	"github.com/riverandeye/planner/server/service"
)

func GetGoals(c *gin.Context) {
	goals := service.GetGoals()

	c.JSON(200, goals)
}

func GetRootGoals(c *gin.Context) {

	goals := service.GetRootGoals()

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

func GetChildrenGoals(c *gin.Context) {

	id, err := strconv.Atoi(c.Param("id"))

	if err != nil {
		panic(err)
	}

	goal := service.GetChildrens(id)

	c.JSON(200, goal)
}

func CreateGoal(c *gin.Context) {
	var newGoal model.Goal
	if err := c.ShouldBindJSON(&newGoal); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	service.CreateGoal(newGoal)

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
