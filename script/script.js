$(function(){

    $("button").click(function(){

        var now = new Date();

        /* 오늘 날짜 출력 시작 */

        var year = now.getFullYear();   // 2021
        var month = now.getMonth()+1;   // getMonth()만 0부터 시작
        var date = now.getDate();
        var dateOutput = year + "년 ";       // "2021" + "년 " => "2021년 "
              dateOutput += month + "월 ";
              dateOutput += date + "일";
        $("#date").append(dateOutput);

        /* 오늘 날짜 출력 끝 */

        fnDigitalTime();   // 버튼을 눌렀을때 즉시 시간표시
        setInterval(fnDigitalTime, 1000);

    });

    function fnDigitalTime() {

        /* 디지털시계 시작*/

        var now = new Date();

        var hour = now.getHours();            // 시간반환
        if (hour < 10) hour = "0" + hour;
        var minutes = now.getMinutes();    // 분반환
        if (minutes < 10) minutes = "0" + minutes;
        var seconds = now.getSeconds();   // 초반환
        if (seconds < 10) seconds = "0" + seconds;
        var timeOutput = hour + " : ";
              timeOutput += minutes + " : ";
              timeOutput += seconds;
        $("#digitalTime").text(timeOutput);

        /* 디지털시계 끝 */

    }

});
