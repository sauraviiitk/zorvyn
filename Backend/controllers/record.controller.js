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
 
export const updateRecord=async(req,res)=>{
   try {
     const id=req.params.id;
     if(!id){
        return res.status(400).json({message:"Record ID is required"});
     }
     const record=await Record.findByIdAndUpdate(id,req.body,{new:true});
     if(!record){
        return res.status(404).json({message:"Record not found"});
     }
   } catch (error) {
        res.status(500).json({message:"Internal server error"});
   }

}

export const deleteRecord=async(req,res)=>{
    try {
        const id=req.params.id;
        const record=await Record.findById(id);
        if(!record){
            return res.status(404).json({message:"Record not found"});
        }
                if (req.user.role !== "admin" && record.user.toString() !== req.user.id) {
                return res.status(403).json({ msg: "Not allowed" });
                }
        record.isDeleted=true;
        await record.save();
        res.json({message:"Record deleted successfully"});
    } catch (error) {
         res.status(500).json({message:"Internal server error"});
    }
}