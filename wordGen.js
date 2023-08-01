const randomNum = () =>{
    let num = 0;
    num = (Math.floor(Math.random() * 3));
    return num;
}
console.log(randomNum());
const phrase = (funct) =>{
    let number = randomNum();
    switch (number){
        case 0:
            return "Hello World";
            break;
        case 1:
            return "Good World";
            break;
        case 2:
            return "Bye World";
            break;
        default:
            return "bruh";
            break;
    }
} 