const person ={
    firstName: "abdur Rahim",
    lastName: "Rahim",
    age:35,
    language: "BD",
    get lang(){return this.language},
    set lang(value){this.language = value}
}

export {person}