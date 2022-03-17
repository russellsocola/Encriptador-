package main

import (
	"log"
	"net/http"
)

func main(){
	fs:=http.FileServer(http.Dir("./doc./index.html"))

	http.Handle("/", fs);
	log.Println("servidor en curso")
	err:= http.ListenAndServe(":8080",nil)
	if err != nil{
		log.Fatal(err)
	}
}
