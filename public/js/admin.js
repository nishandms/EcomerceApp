console.log("sdgdfg")

function deleteData(id) {
    console.log(id)
    $.ajax({
        url: "/admin/delete-product",
        type: "POST",
        data: {
            _id: id
        }
    }).done(data => {
        console.log(data)
    })
}