package handlers

import (
	"fmt"
	"net/http"
)

func SampleHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "Hello world from backend!")
}
