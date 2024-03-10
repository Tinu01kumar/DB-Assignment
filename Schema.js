const { Decimal128 } = require("bson")
const mongoose=require("mongoose")

const productSchema=new mongoose.Schema({

    _id:mongoose.Schema.Types.ObjectId,

    name:{
        type:String,
        required:true
    },
    desc:{
        type:String
    },
    SKU:{
        type:String
    },
    category_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'ProductCategory',
        required:true,
    },
    inventory_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'ProductInventory',
        required:true,
    },
    price:{
        type:Number,
        required:true
    },
    discount_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Discount'
    },
    created_at:{
        type:Date,
        default:Date.now
    },
    modified_at:{
        type:Date, 
        default:Date.now
    },
    deleted_at:{
        type:Date
    }
})


const productCategorySchema=new mongoose.Schema({

    _id:mongoose.Schema.Types.ObjectId,

    name:{
        type:String,
        required:true
    },
    desc:{
        type:String
    },
    created_at:{
        type:Date,
        default:Date.now
    },
    modified_at:{
        type:Date, 
        default:Date.now
    },
    deleted_at:{
        type:Date
    }
})


const productInventorySchema=new mongoose.Schema({

    _id:mongoose.Schema.Types.ObjectId,
   
    quantity:{
        type:Number,
        required:true,
        default:0
    },
    created_at:{
        type:Date,
        default:Date.now
    },
    modified_at:{
        type:Date, 
        default:Date.now
    },
    deleted_at:{
        type:Date
    }
})


const discountSchema=new mongoose.Schema({

    _id:mongoose.Schema.Types.ObjectId,

    name:{
        type:String,
        required:true,
    },
    desc:{
        type:String
    },
    discount_percent:{
        type:Decimal128,
        required:true
    },
    active:{
        type:Boolean,
        required:true
    },
 
    created_at:{
        type:Date,
        default:Date.now
    },
    modified_at:{
        type:Date, 
        default:Date.now
    },
    deleted_at:{
        type:Date
    }

})


module.exports={
    Product:mongoose.model('Product', productSchema),
    ProductCategory:mongoose.model('ProductCategory' , productCategorySchema),
    ProductInventory:mongoose.model('ProductInventory' , productInventorySchema),
    Discount:mongoose.model('Discount' , discountSchema)
}


