function scuberGreetingForFeet(steps) {
    if (steps <= 400) {
        return "This one is on me!"
    } else if (steps > 400 && steps < 2000) {
        return "That will be twenty bucks."
    } else if (steps >= 2000 && steps <= 2500) {
        return "I will gladly take your thirty bucks."
    } else if (steps > 2500) {
        return "No can do."
    }
}

const ternaryCheckCity = isCity => isCity === "NYC" ? "Ok, sounds good." : "No go.";

const switchOnCharmFromTip = tip => {
    if (tip === "generous") {
        return "Thank you so much."
    } else if (tip === "not as generous") {
        return "Thank you."
    } else {
        return "Bye."
    }
}
