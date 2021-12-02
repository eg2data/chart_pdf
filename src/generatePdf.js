// // (일단, 한 페이지만 출력하는 상황 가정)
// // 1. overallPage.pug를 import한다
// // 2. pdf 파일을 생성한다
//
// // const { jsPDF } = require("jspdf"); // will automatically load the node version
// // const doc = new jsPDF();
// // doc.text("안녕", 10, 10);
// // doc.save("test1.pdf"); // will save the file in the current working directory
//
// //
//const { jsPDF } = require("jspdf"); // will automatically load the node version


const button = document.querySelector("#savePdf");

function handleButton(event) {
    // console.log("connection");
    const doc = new jsPDF();
    doc.text("안녕", 10, 10);
    doc.save("test2.pdf"); // will save the file in the current working directory
}

button.addEventListener("click", handleButton);


// html2canvas($('#pdfDiv')[0]).then(function(canvas) { //저장 영역 div id
//
//     // 캔버스를 이미지로 변환
//     var imgData = canvas.toDataURL('image/png');
//
//     var imgWidth = 190; // 이미지 가로 길이(mm) / A4 기준 210mm
//     var pageHeight = imgWidth * 1.414;  // 출력 페이지 세로 길이 계산 A4 기준
//     var imgHeight = canvas.height * imgWidth / canvas.width;
//     var heightLeft = imgHeight;
//     var margin = 10; // 출력 페이지 여백설정
//     var doc = new jsPDF('p', 'mm');
//     var position = 0;
//
//     // 첫 페이지 출력
//     doc.addImage(imgData, 'PNG', margin, position, imgWidth, imgHeight);
//     heightLeft -= pageHeight;
//
//     // 한 페이지 이상일 경우 루프 돌면서 출력
//     while (heightLeft >= 20) {
//         position = heightLeft - imgHeight;
//         doc.addPage();
//         doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
//         heightLeft -= pageHeight;
//     }
//     // 파일 저장
//     doc.save('file-name.pdf');
//
// });
// });
// })
