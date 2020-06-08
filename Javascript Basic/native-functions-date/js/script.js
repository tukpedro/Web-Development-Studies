
// var dateToday = new Date();
//
// // document.write(dateToday.getDate() + '/' + (dateToday.getMonth() + 1) + '/' + dateToday.getFullYear());
//
// document.write(dateToday.toString());
// dateToday.setDate(dateToday.getDate() + 2);
// document.write('<hr>');
// document.write(dateToday.toString());
// document.write('<br><br><hr>');
//
// document.write(dateToday.toString());
// dateToday.setMonth(dateToday.getMonth() + 5);
// document.write('<hr>');
// document.write(dateToday.toString());
// document.write('<br><br><hr>');
//
// document.write(dateToday.toString());
// dateToday.setFullYear(dateToday.getFullYear() + 2);
// document.write('<hr>');
// document.write(dateToday.toString());
// document.write('<br><br><hr>');

var date1 = new Date(2020, 3, 1);

var date2 = new Date();

document.write(date1.toString());
document.write('<hr>');
document.write(date2.toString());
document.write('<br><br><hr>');

document.write(date1.getTime());
document.write('<hr>');
document.write(date2.getTime());
document.write('<br><br><hr>');

var miliseconds_between_date = date2.getTime() - date1.getTime();
document.write(miliseconds_between_date);
document.write('<br><br><hr>');

var miliseconds_in_one_day = (1*24*60*60*1000);
document.write(miliseconds_in_one_day);
document.write('<br><br><hr>');

var date_interval = miliseconds_between_date / miliseconds_in_one_day;
document.write(date_interval);



