const mongoose = require("mongoose")
const Product = require("./models/Product")

const MONGO_URI = "mongodb://localhost:27017/search-filter-sort"

const products = [
    // Toys
    { name: "Wooden Building Blocks", sku: "TOY-1001", type: "Toys", on_promotion: true, price: 29.9 },
    { name: "Remote Control Car", sku: "TOY-1002", type: "Toys", on_promotion: false, price: 89.0 },
    { name: "Jigsaw Puzzle 1000 Pieces", sku: "TOY-1003", type: "Toys", on_promotion: false, price: 45.5 },
    { name: "Plush Teddy Bear", sku: "TOY-1004", type: "Toys", on_promotion: true, price: 35.0 },
    { name: "Rubik's Cube 3x3", sku: "TOY-1005", type: "Toys", on_promotion: false, price: 19.9 },
    { name: "Water Gun Blaster", sku: "TOY-1006", type: "Toys", on_promotion: true, price: 24.9 },
    { name: "Toy Train Set", sku: "TOY-1007", type: "Toys", on_promotion: false, price: 149.0 },
    { name: "Board Game: Monopoly", sku: "TOY-1008", type: "Toys", on_promotion: false, price: 99.9 },

    // House Appliances
    { name: "Air Fryer 5L", sku: "APP-2001", type: "House Appliances", on_promotion: true, price: 259.0 },
    { name: "Rice Cooker 1.8L", sku: "APP-2002", type: "House Appliances", on_promotion: false, price: 139.0 },
    { name: "Stand Mixer", sku: "APP-2003", type: "House Appliances", on_promotion: false, price: 649.0 },
    { name: "Vacuum Cleaner Cordless", sku: "APP-2004", type: "House Appliances", on_promotion: true, price: 899.0 },
    { name: "Electric Kettle 1.7L", sku: "APP-2005", type: "House Appliances", on_promotion: false, price: 79.9 },
    { name: "Microwave Oven 25L", sku: "APP-2006", type: "House Appliances", on_promotion: false, price: 429.0 },
    { name: "Blender 700W", sku: "APP-2007", type: "House Appliances", on_promotion: true, price: 119.0 },
    { name: "Washing Machine 8kg", sku: "APP-2008", type: "House Appliances", on_promotion: false, price: 1599.0 },

    // Electronics
    { name: "Wireless Earbuds", sku: "ELE-3001", type: "Electronics", on_promotion: true, price: 199.0 },
    { name: "Mechanical Keyboard", sku: "ELE-3002", type: "Electronics", on_promotion: false, price: 349.0 },
    { name: "27-inch 4K Monitor", sku: "ELE-3003", type: "Electronics", on_promotion: true, price: 1299.0 },
    { name: "Bluetooth Speaker", sku: "ELE-3004", type: "Electronics", on_promotion: false, price: 159.0 },
    { name: "Laptop 14-inch", sku: "ELE-3005", type: "Electronics", on_promotion: false, price: 3799.0 },
    { name: "Smartphone 128GB", sku: "ELE-3006", type: "Electronics", on_promotion: true, price: 2499.0 },
    { name: "Wireless Mouse", sku: "ELE-3007", type: "Electronics", on_promotion: false, price: 69.9 },
    { name: "Power Bank 20000mAh", sku: "ELE-3008", type: "Electronics", on_promotion: true, price: 89.9 },
]

const seedDatabase = async () => {
    try {
        await mongoose.connect(MONGO_URI)
        console.log("MongoDB Connected")

        // Clear the collection so re-running the seed does not create duplicates
        const deleted = await Product.deleteMany({})
        console.log(`Removed ${deleted.deletedCount} existing product(s)`)

        const inserted = await Product.insertMany(products)
        console.log(`Inserted ${inserted.length} product(s)`)
    } catch (err) {
        console.log(err)
    } finally {
        await mongoose.disconnect()
        console.log("MongoDB Disconnected")
    }
}

seedDatabase()
