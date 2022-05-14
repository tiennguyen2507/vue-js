

//--temple respone--
const myRespone = (status, message, data) => {
    const respone = { status, message }
    respone.data = data && data
    return respone
}

module.exports = { myRespone }