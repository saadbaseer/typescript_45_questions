// Name Cases: Store a person’s name in a variable, 
// and then print that person’s name in lowercase, uppercase, and titlecase.

let person:string="SaadBaseer"

console.log(person.toLocaleLowerCase());

console.log(person.toLocaleUpperCase());

console.log(person.charAt(0).toUpperCase()+person.slice(1).toLocaleLowerCase());


