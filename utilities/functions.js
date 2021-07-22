function timestamp_to_datetime(timestamp){
    var date = new Date(timestamp * 1000)
    var dateFormat = 
        date.getDate()            +
        "/" + (date.getMonth()+1) +
        "/" + date.getFullYear()  +
        " " + date.getHours()     +
        ":" + date.getMinutes()   +
        ":" + date.getSeconds()
    return dateFormat
}

function bytes_to_megabytes(kb){
    var mb = (kb * Math.pow(10, -6)).toFixed(1)
    var display_mb = mb.toString() + " MB"
    return display_mb
}

export {timestamp_to_datetime, bytes_to_megabytes};