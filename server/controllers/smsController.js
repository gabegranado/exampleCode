import express from 'express';
import twilio from 'twilio'
import * as CONFIG from "../../config.json" assert { type: "json" };
const twilioAccountSID = CONFIG.default.emailPassword;
const twilioAuthToken = CONFIG.default.email;

const router = express.Router();

export const sendSms = async (req, res) => {
    const client = twilio(twilioAccountSID, twilioAuthToken);
    client.messages.create({
        to: '+15125863099',
        from: '+18663044989',
        body: 'Warning high levels of PH in zip code 79410'
    })
    .then((message) => console.log(message.sid));
    res.type('text/xml').send("made it");
    console.log("test");
}

export default router;
