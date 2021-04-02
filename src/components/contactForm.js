import React from 'react';
import emailjs from 'emailjs-com';

import TextField from '@material-ui/core/TextField';import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


export default function ContactUs() {

    function sendEmail(e) {
        /*         
        Refer to this page to get your credentials: 

        https://dashboard.emailjs.com/admin/integration

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
        */
        e.preventDefault();
        emailjs.sendForm('service_9936u4c', 'template_y7syob2', e.target, 'user_0boOYlH8R3iAyvz20EFv3')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return(
        
        <Grid container 
            direction="row"
            justify="center"
            alignItems="stretch">
            <Grid item 
                xs={10}>
                <Card variant="outlined">
                    <CardContent>
                        <Typography  
                            color="textSecondary" 
                            gutterBottom>
                            Send emails with the power of Emailjs and React
                        </Typography>
                        <form noValidate 
                            autoComplete="off" 
                            onSubmit={sendEmail}>
                            <TextField 
                                label="Name" 
                                placeholder="Name"
                                fullWidth
                                margin="normal" 
                                name="name"
                            />
                            <TextField 
                                label="Email Address" 
                                placeholder="Email Address" 
                                fullWidth
                                margin="normal" 
                                name="email"
                            />
                            <TextField 
                                label="Subject" 
                                placeholder="Subject" 
                                fullWidth
                                margin="normal" 
                                name="subject"
                            />
                            <TextField
                                label="Message"
                                placeholder="Message" 
                                name="message"
                                fullWidth
                                margin="normal" 
                                multiline
                                rows={4}
                            />
                            <Button 
                                variant="contained" color="primary" 
                                type="submit"
                                disableElevation>
                                Send Message
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}