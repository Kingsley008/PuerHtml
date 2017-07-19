/*输入一个邮箱如果他是QQ邮箱输出QQ号 如果是网易邮箱163 输出网易邮箱*/

function seeEmail(email) {
    reg = /^([^@]+)(@[^\.]+)+(\.\w+)+$/
    arr =  email.match(reg);
    console.info(arr);
    if(arr[2] == "@qq"){
        console.info("this is a qq email an qq number is  :" + arr[1]);
    }else if (arr[2] == "@163"){
        console.info("this is 163 netease email");
    }else{
        console.info("other email");
    }
}
seeEmail("837350320@qq.com");//this is a qq email an qq number is  :837350320


/*输入一个年份和月份输出这个月有几天*/

function getDays(year,month) {
    var day = new Date(year,month,0);
    console.info(day);
   return day.getDate(); //date 日期  day 周几
}
    getDays(2017,2);

/*输入一个Date对象对其进行格式化*/
var today = new Date();
console.info(today);
function pad(str) {
    if(str >10){
        return str + ""
    }
    if(str < 10){
        return "0" + str;
    }
}
function formatDate(date,format) {
    switch (format){
        case 'yy-mm-dd':
            return date.getFullYear() +"-" + pad(date.getMonth()+1)+"-"+ pad(date.getDate());
        case'mm-dd':
            return  pad(date.getMonth()+1)+"-"+ pad(date.getDate());
        case 'hh-mm-ss':
            return pad(date.getHours())+":"+pad(date.getMinutes())+":"+pad(date.getSeconds());
        case 'hh-mm':
            return pad(date.getHours())+":"+pad(date.getMinutes());
        default:
            return  date.getYear() +"-" + pad(date.getMonth()+1)+"-"+ pad(date.getDate())+
                pad(date.getHours())+":"+pad(date.getMinutes())+":"+ pad(date.getSeconds());
    }
}
formatDate(today,'hh-mm-ss');

