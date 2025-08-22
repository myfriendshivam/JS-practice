//Switch

const month = 3
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("Mar");
        break;
    case 4:
        console.log("Apr");
        break;
    default:
        console.log("default case match");
        break;
}

// if break is comment than brack comment blow all code runs except default.

const grad = "A"
switch (grad) {
    case "A+":
        console.log("Very Good");
        break;
    case "A":
        console.log("Good");
        break;
    case "D":
        console.log("Poor");
        break;

    default:
        console.log("default case match");
        break;
}

