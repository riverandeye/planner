package model

import "gorm.io/gorm"

// Goal Model
type User struct {
	Model
	Email    string `json:"email" binding:"required" gorm:"unique;size:256"`
	Password string `json:"password" binding:"required" gorm:"size:256"`
	Goals    []Goal `gorm:"foreignkey:UserID" json:"goals"`
}

func FindUserWithEmailAndPassword(email string, password string) User {
	var user User
	DBConn.Where("email", email).Where("password", password).Find(&user)

	return user
}

func CreateUser(user User) {
	var result *gorm.DB

	result = DBConn.Create(&user)

	if result.Error != nil {
		panic(result.Error)
	}
}

func FindUserWithEmail(email string) User {
	var user User

	result := DBConn.Where("email", email).First(&user)

	if result.Error != nil {
		panic(result.Error)
	}

	return user
}
