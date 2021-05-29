const API = "https://api.themoviedb.org/3";

export function get(path) {
    return fetch(API + path, {
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZTUwNGMxMGY4MzA5ZmFmMjI5OGI1NDZjYjVjYWQ0MSIsInN1YiI6IjYwYTQzYjJjNzY0Yjk5MDAyOWRkYTNlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Iwq76SqGbLla9sGbPLv95syQ1BIR5ts8MsTmqWjcx9I",
            "Content-Type": "application/json;charset=utf-8",
        },
    }).then(result => result.json());
}