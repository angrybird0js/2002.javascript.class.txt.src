        let number = prompt("값을 입력하세요.");
        let list = "";
        list += `<table><tr><th>증감연산자</th><th>설명</th><th>예)let number = ${number}</th></tr>`;
        list += `<tr><td>변수++</td><td>기존의 변수 값에 1을 더합니다(후위)</td><td>alert(number++) 답:${number++}</td>`;
        list += `</tr><tr><td>++변수</td><td>기존의 변수 값에 1을 더합니다(전위)</td><td>alert(number++) 답:${++number}</td>`;
        list += `</tr><tr><td>변수--</td><td>기존의 변수 값에 1을 뺍니다(후위)</td><td>alert(number++) 답:${number--}</td>`;
        list += `</tr><tr><td>--변수</td><td>기존의 변수 값에 1을 뺍니다(전위)</td><td>alert(number++) 답:${--number}</td></tr></table>`;
        document.write(list);