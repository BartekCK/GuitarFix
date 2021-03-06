import nodeMailer from'nodemailer';
import dotenv from "dotenv";
dotenv.config({ silent: process.env.NODE_ENV === 'production' });


export const sendFrom = (req, res) => {
    console.log(req.body);
    const transporter = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });
    console.log(process.env.PASSWORD);
    const mailOptions = {
        from: process.env.FROM,
        to: process.env.TO,
        subject: `${req.body.name} ${req.body.phone}`,
        body: req.body.message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        } else {
            console.log('Message %s sent: %s', info.messageId, info.response);
        }
    });

    res.redirect('/');
};