import Record from "../models/records.model.js";
export const createRecord=async(req,res)=>{
    try{
        const { amount, type, category, date, note } = req.body;
         if (!amount || !type || !category) {
      return res.status(400).json({
        message: "amount, type, and category are required"
      });
    }
    const record = await Record.create({
      amount,
      type,
      category,
      date,
      note,
      user: req.user.id  
    });
        await record.save();
        res.status(201).json({message:"Record created successfully"});
    }
    catch(error){
        res.status(500).json({message:"Internal server error"});
    }
}

export const getRecords=async(req,res)=>{
    try {
       const {
      type,
      category,
      startDate,
      endDate,
      page = 1,
      limit = 10,
      sort = "date"
    } = req.query;
        const filter={
            isDeleted:false,
        }
        if(req.user.role!=="admin"){
            filter.user=req.user.id;
        }
        if(type){
            filter.type=type;
        }
        if(category){
            filter.category=category;
        }
        if(startDate&&endDate){
            filter.date={
                $gte:new Date(startDate),
                $lte:new Date(endDate)
            };
        }
        const skip=(page-1)*limit;
        const allrecords=await Record.find(filter).sort({[sort]:-1}).skip(skip).limit(parseInt(limit));
        const total=await Record.countDocuments(filter);
         res.json({
            page: parseInt(page),
            totalPages: Math.ceil(total / limit),
            totalRecords: total,
            data: allrecords
    });

    } catch (error) {
        res.status(500).json({message:"Internal server error"});
    }
}
 