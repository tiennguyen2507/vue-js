

//temple respone
const myRespone = (status, message, data) => {
    const respone = { status, message }
    console.log(data)
    if (data) respone.data = data
    return respone
}

module.exports = { myRespone }