{
    showModal = () =>{
        $('#myModal').on('shown.bs.modal', function () {
            $('#myInput').trigger('focus')
          })
    }

    Submit = () =>{
        // alert("ok");
        let start_date = document.getElementById("startDate").value;
        console.log("Ngày bắt đầu là : " + moment().format("YYYY-MM-DD"));

        let end_date = document.getElementById("endDate").value;
        console.log("Ngày Kết thúc là : " + moment(end_date).subtract(10,"days").format("YYYY-MM-DD"));
    }
}