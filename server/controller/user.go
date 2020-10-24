package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"

	"github.com/riverandeye/planner/server/model"
	"github.com/riverandeye/planner/server/service"
)

func Login(c *gin.Context) {
	var user model.User

	if err := c.ShouldBindJSON(&user); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(200, gin.H{"result": "Logged-in"})
}

func CreateUser(c *gin.Context) {
	var newUser model.User

	if err := c.ShouldBindJSON(&newUser); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	isDuplicatedEmail := service.IsDuplicatedEmail(newUser.Email)

	if isDuplicatedEmail == true {
		c.JSON(500, gin.H{"message": "Duplicated Email"})
		return
	}

	service.CreateUser(newUser)

	c.JSON(200, gin.H{"result": "Success"})
}
