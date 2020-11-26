{
    //  <!-- Arrow function -->
    Hello = () => {
        let a = 10, b = 20;
        console.log("Tổng hai số a và b là : " +''+ (a + b));
    }
    Hello();

    //Array
    var arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log("Length of array :" +''+ arrNum.length +''+ "Phần tử thứ 7 trong mảng :" + arrNum[7]);
    //Xóa phần tử trong array
    arrNum.splice(5, 1);
    console.log(arrNum);
    //Nhân 3 phần tử trong mảng với Map Js
    const map1 = arrNum.map(z => z * 3);
    console.log(map1);
}




