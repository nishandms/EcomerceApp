getProducts()

function getProducts() {
    $.ajax({
        url : "/admin/get-products",
        type : "GET"
    }).done(data => {
        $("#product-body").html('');
        if(data) {
            data.forEach(ele => {
                $("#product-body").append(`<tr>
                    <td>${ele.product}</td>
                    <td>${ele.prize}</td>
                    <td><button class='btn btn-danger' onclick="deleteData('${ele._id}')">Delete</button></td>
                </tr>`)
            })
        }
    })
}

function deleteData(id) {
    console.log(id)
    $.ajax({
        url: "/admin/delete-product",
        type: "POST",
        data: {
            _id: id
        }
    }).done(data => {
        if(data == "Success") {
            getProducts();
        }
    })
}