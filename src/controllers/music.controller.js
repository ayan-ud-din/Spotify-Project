const musicModel = require("../models/music.model");
const jwt = require("jsonwebtoken");
const albumModel = require ("../models/album.model")
const {uploadFile} = require("../services/storage.service");


const createMusic = async (req, res) => {

    const title = req.body.title;
    const file = req.file;

    const result =await uploadFile(file.buffer.toString("base64"))


    const music = await musicModel.create({

        title:title,
        uri : result.url,
        artist: req.user.id


    }
    )

    res.status(201).json({
        message: "Music creeated successfully",
        music
    })}
     

       
    

       const createAlbum = async (req,res)=>{



const {title , musics} = req.body

const album = await albumModel.create({
    title ,
    musics : musics,
    artist :req.user.id
})

res.status(201).json({
    message : "Album created successfully",
    album
})

       }


       const getAllMusics = async (req,res)=>{

      const musics= await musicModel.find().limit(5)

      res.status(200).json({
        message :"Musics fetched succesfully",
        musics:musics
      })
       }

    

module.exports = {createMusic , createAlbum,getAllMusics}