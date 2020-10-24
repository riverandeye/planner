package service

import (
	"github.com/riverandeye/planner/server/lib"
	"github.com/riverandeye/planner/server/model"
	"golang.org/x/crypto/bcrypt"
)

func CreateUser(user model.User) {
	hashedPassword, err := lib.HashPassword(user.Password)

	if err != nil {
		panic(err)
	}

	user.Password = hashedPassword

	model.CreateUser(user)
}

func CheckLogin(user model.User) bool {
	targetUser := model.FindUserWithEmail(user.Email)

	err := bcrypt.CompareHashAndPassword([]byte(targetUser.Password), []byte(user.Password))

	if err != nil {
		return false
	}

	return true
}

func IsDuplicatedEmail(email string) bool {
	result := model.FindUserWithEmail(email)

	defer func() bool {
		if r := recover(); r != nil {
			return false
		}

		return true
	}()

	if len(result.Email) <= 0 {
		return false
	}

	return true
}
