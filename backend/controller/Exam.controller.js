export const newExam = async(req,res)=>{
  try {
    const {name,classId,date,subject}=req.body

    if(!name||classId||!date||!subject){
     
      return res.status(403).json({
        message: "requried fields is missing",
        success: false,
       
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
      error: error.message,
    });
  }
}