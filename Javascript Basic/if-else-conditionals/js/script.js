// var bol;
//
// if ( 1 >'2'){
//     bol = true;
//     document.write(bol);
// }
//
// else {
//     bol = false;
//     document.write(bol);
// }



function calcAverage() {
    var grade1 = document.getElementById('grade1').value;
    var grade2 = document.getElementById('grade2').value;
    var grade3 = document.getElementById('grade3').value;
    var absences = document.getElementById('absences').value;

    grade1 = parseInt(grade1);
    grade2 = parseInt(grade2);
    grade3 = parseInt(grade3);
    absences = parseInt(absences);

    var average = ((grade1 + grade2 + grade3)/3);


    // if (average > 7 && absences < 8 ){
    //     document.getElementById('average').innerHTML = (average + '<br>' + 'Approved');
    // }
    // else {
    //     document.getElementById('average').innerHTML = (average + '<br>' + 'Reproved' + '<br>' + "Number of absences: " + absences);
    // }

    var result = (average >= 7 && absences <= 8) ? 'Approved' : 'Reproved'
    document.getElementById('average').innerHTML = ('Grade: ' + average + '<br>' + "Number of absences: " + absences + '<br><br>' + result);

}
