const path = require("path")

const multer = require("multer")

const storage = multer.diskStorage({

    destination: function (req, file, callback) {

        // console.log(__dirname)

        callback(null, path.join(__dirname, "../my_uploads"))
    },

    filename: function (req, file, callback) {

        const uniquePrefix = Date.now()

        callback(null, uniquePrefix + "-" + file.originalname)
    }
})

const fileFilter = (req, file, callback) => {

    if (file.mimetype == "image/jpg" || file.mimetype == "image/png" || file.mimetype == "image/jpeg") {

        callback(null, true)
    }
    else {

        callback(new Error("Incorrect mime type"), false)
    }
}

const options = {

    storage, fileFilter,
    limit: {

        fileSize: 1024 * 1024 * 5
    }
}

const uploads = multer(options)

module.exports = uploads