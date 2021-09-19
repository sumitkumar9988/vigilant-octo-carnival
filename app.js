const express = require("express");
const dotenv = require("dotenv");
const mongoose=require('mongoose');
const cors = require('cors');
const User = require('./Models/userModel');
const app = express();
const router = express.Router();
dotenv.config();

app.use(cors());
app.use(express.json())
mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("DB connection successful!"))
  .catch((err) => console.log(err));

  const users = [
    {
     
      domain: 'createtailwind.site',
      message:'This website is create tailwind site'
    },
    {
      domain: 'collegeclick.space',
      message:'This website is www.collegeclick.space'
    },
  ]

  // app.use((req, res, next) => {
  //   if (req.hostname === 'pfolio.site') {
  //     return next();
  //   }
  
  //   const user = users.find(user => user.domain === req.hostname);
  //   if (!user) {
  //     return res.sendStatus(404);
  //   }
  
  //   return res.send(`${user.message}`);
  // });

  app.get("/", (req, res) => {
    return res.status(200).json({
      status: "success",
    });
  });



// app.use(`/`, router);
const PORT=process.env.PORT||8000
app.listen(PORT,(req,res)=>{
  console.log('Listning on Port',PORT)
})

















//   router.post("/createfile", async (req, res) => {
//       try{
//         const {name,folder,data,path}=req.body;
//         await File.create({
//           name,folder  ,path,data
//         })    
//         res.status(201).json({
//           succuss: "true"
//         });
//       }catch(err){
//         res.status(404).json({
//             succuss: "fail",
//             message:err
//           });
//       }
    
//   });

//   router.get("/file",async (req, res) => {
//     try{
//         const file=await File.find({}).populate('folder');
//       res.status(201).json({
//         succuss: "true",
//         file:file
//       });
//     }catch(err){
//       res.status(404).json({
//           succuss: "fail",
//           message:err
//         });
//     }})

//     router.get("/file/:id",async (req, res) => {
//         const id=req.params.id;
//         try{
    
//             const file=await File.findById(id).populate('folder');
//             res.status(201).json({
//               succuss: "true",
//               file:file
//             });
//         }catch(err){
//           res.status(404).json({
//               succuss: "fail",
//               message:err
//             });
//         }
// });
