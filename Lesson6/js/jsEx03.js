{
    Input = () => {
        let input = document.getElementById('input2').value;
        if (input.length > 10) {
            alert("Bạn đã gõ quá số kí tự cho phép !!");
        } else if (input.length < 10) {
            alert("OK");
            document.getElementById('input1').value = input;
        }

        setTimeout(function(input2){
            alert("Xin chào Hoàng Văn Thắng");
        }, 3000);
             
    }
    function Clickme(){
        let arr = ['Xoài','Táo','Cam','Chuối','Bưởi','Lê','Ổi','Mít','Dâu Tây','Nho']
        for (let i = 5;i < arr.length; i++){
            alert(arr[i]);
        }
    }
}
