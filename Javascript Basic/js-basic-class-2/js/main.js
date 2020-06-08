
var list = ["apple", "pear", "orange"];
list.push("grape");
// list.pop();
document.writeln(list + "<br>");

document.writeln("<br>" + list.length + "<br>");

document.writeln("<br>" + list.reverse() + "<br>");

document.writeln("<br>" + list.toString()[2] + "<br>");

document.writeln("<br>" + list.join(" - ") + "<br>" + "<hr>");

var fruit = [{name: "apple", color: "red"}, {name: "grape", color: "purple"}];
document.write(fruit[1].color)
