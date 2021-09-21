const { info } = require("console");
const express = require("express");
const nodemailer = require("nodemailer");
const app = express();

const Port = 3000;

const user = "luischimucomendes8@gmail.com";
const pass = "chimuco";

app.get("/", (req, res) => res.send("Hello World!"))

app.get("/send", (req, res) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        //service: "gmail",
        port: 25,
        secure: false,
        auth: { user, pass },
        tls: {
            rejectUnauthorized: false,
        }
    })

    transporter.sendMail({
        from: user,
        to: user,
        replyTo: "luischimucomendes8@gmail.com",
        subject: "ola mundo",
        text: "obrigado senhor.",
    }).then(info => {
        res.send(info)
    }).catch(error => { 
        return res.send({message: "error -->"+error})
    })
})


app.listen(Port, () =>console.log(`Runnig on port ${Port}`))

