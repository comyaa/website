

function greeting(){
var day = new Date();
        var hr = day.getHours();
        var x;
        if (hr >= 0 && hr < 12) {
            x="Good Morning Everyone"
        } else if (hr == 12) {
            x="Good Noon Everyone";
        } else if (hr >= 12 && hr <= 17) {
            x="Good Afternoon Everyone"
        } else {
            x="Good Evening Everyone";
        }
        return x;
    }
absenties = [""];
for (i = 1; i <=60; i++) {


    var x = document.createElement("button");


    x.setAttribute("type", "button");
    x.setAttribute("class", "btn btn-success");
    x.setAttribute("data-toggle", "button");
    x.setAttribute("aria-pressed", "false");




    x.innerHTML = i;


    document.getElementById("xxx").appendChild(x);
}





function getHost() {


    for (i = 1; i <= 6; i++) {
        var z = document.getElementsByClassName("btn btn-primary s")[i - 1];
        s = z.getAttribute("aria-pressed");
        if (s === "true") {
            var z1 = z.innerHTML;
            return "Host: " + z1.trim() ;
            
        }


    }
    return "Host not selected";

}
function getCoHost() {


    for (i = 1; i <= 4; i++) {
        var z = document.getElementsByClassName("btn btn-primary c")[i - 1];
        s = z.getAttribute("aria-pressed");
        if (s === "true") {
            var z1 = z.innerHTML;
            return "Co-Host:" + z1.trim() ;

        }


    }
    return "Co-Host not selected";

}
function getSubject() {


    for (i = 1; i <= 8; i++) {
        var z = document.getElementsByClassName("btn btn-primary sub")[i - 1];
        s = z.getAttribute("aria-pressed");
        if (s === "true") {
            var z1 = z.innerHTML;
            return "Subject:    "+z1.trim() ;

        }


    }
    

}

function getHour() {


    for (i = 1; i <= 5; i++) {
        var z = document.getElementsByClassName("btn btn-primary h")[i - 1];
        s = z.getAttribute("aria-pressed");
        if (s === "true") {
            var z1 = z.innerHTML;
            return z1.trim()+ "Hour Attendance";

        }
    }



}
function getAbsenties() {

    absroll = "";
    presroll = "";
    var abscount=0;
    var precount=0;
    for (i = 1; i <= 60; i += 1) {

        var z = document.getElementsByClassName("btn btn-success")[i - 1];

        var z1 = z.getAttribute("aria-pressed");
        if (z1 === "true") {
            absroll = absroll + "," + i.toString();
            abscount+=1;
        }
        else {
            precount+=1;
        }

    }
    var r11="-------------------------------------------";
    var d= new Date();
    var d1=d.getDate();
   
    var d0=d.getMonth()+1;
    var d2=d.getFullYear();
    var Date1="Date:"+d1+"-"+d0+"-"+d2+"\n";
    var Year2="Year : BTech III year I Sem";

    document.getElementById("rrr").value = greeting()+"\n"+getHour() +"\n"+r11+"\n"+Date1+"\n"+Year2+"\n"+getSubject() +"\n"+getHost() + "\n" +getCoHost()+"\n"+"Present:"+precount+ "\n" +"Absent:"+abscount+"\n"+"Absenties rollnos:"+absroll;


}


