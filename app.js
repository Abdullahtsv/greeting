var greeting;
var hour = +prompt("enter time");
if (hour < 18) {
    greeting = "Good day";
    document.write("<h1>"+ greeting + "</h1>");
}
else{
    greeting = "Good evening";
    document.write("<h1>"+ greeting + "</h1>");
}
