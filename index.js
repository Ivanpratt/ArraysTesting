let hamburgerBackpack = []

hamburgerBackpack.push("Bagel Sandwhich")
hamburgerBackpack.push("Row Boat")
hamburgerBackpack.push("Mr. Gassy")

hamburgerBackpack.splice(1, 0, "Jeddy")

let coat = "Pink Bomberjacket"
hamburgerBackpack.push(coat)

hamburgerBackpack.pop()

hamburgerBackpack.push("Extra Shoes", "Juice Boxes", "First Aid Kid", "Camera", "Garnet's cat")

let hotdogDuffelbag = hamburgerBackpack.splice(2, 3)


let itemCount = hamburgerBackpack.length
console.log(itemCount)
console.log("Hamburgerbackpack", hamburgerBackpack)
console.log("hotdogduffelbag", hotdogDuffelbag)
console.log("hotdogduffelbag", hotdogDuffelbag)
console.log("hotdogduffelbag", hotdogDuffelbag)
hotdogDuffelbag.pop();
console.log("hotdogduffelbag", hotdogDuffelbag)
hotdogDuffelbag.pop();
console.log("hotdogduffelbag", hotdogDuffelbag)
hotdogDuffelbag.pop();
console.log("hotdogduffelbag", hotdogDuffelbag)

for (i=0; i < hotdogDuffelbag.length; i++) {
    console.log(hotdogDuffelbag[i])
}