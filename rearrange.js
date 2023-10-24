const firstAns = a;
let a = "(g) Stephen Hawking was born to an educated family.";
if (firstAns == a) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
document.getElementById("demo").innerHTML = greeting;