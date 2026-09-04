const express = require('express')
const router = express.Router()
const productContoller = require('../controllers/productsController')

router.get("/", productContoller.getAllProducts)
router.get("/type", productContoller.getProductByType)
router.get("/promotion", productContoller.getProductByPromotion)
router.get("/price", productContoller.getProductByPriceRange)

module.exports = router