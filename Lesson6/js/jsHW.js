{
    function Homework_6(){
        let Num = document.getElementById('input1').value;
        switch (Num) {
            case "1":
                window.open("https://quantrimang.com");
                break;

            case "2":
                window.open("https://download.com.vn");
                break;

            case "3":
                window.open("https://vndoc.com");
                break;
        
            default:
                window.open("https://meta.vn");
            
        }
    }
}