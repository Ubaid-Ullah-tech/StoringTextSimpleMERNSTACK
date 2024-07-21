import Text from "../model/TextSchema.js";

export const TextController = async(req,res) =>{
   const {content} = req.body;
   try {
     const newText = new Text({content});
     await newText.save();
     res.status(201).send('Text Saved Succesfully') 
   } catch (error) {
      res.status(500).send('Error in Saving Message')
   }
}

export const getTextController = async(req,res) =>{

   try {
        const texts = await Text.find();
        res.json(texts);
   } catch (error) {
      console.log(error)
   }

}