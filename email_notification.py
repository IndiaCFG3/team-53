import os
from email.mime.text import MIMEText
from email.mime.image import MIMEImage
from email.mime.application import MIMEApplication
from email.mime.multipart import MIMEMultipart
import smtplib
import json

def message(subject="Monthly Report", text="", img=None, attachment=None):
    msg = MIMEMultipart()
    msg['Subject'] = subject    # subject
    msg.attach(MIMEText(text))  # body

    # image attatchments
    if img is not None:
        if type(img) is not list:
            img = [img]
            
        for img_instance in img:
            img_data = open(img_instance, 'rb').read()
            msg.attach(MIMEImage(img_data, name=os.path.basename(img_instance)))

    # non-image attachments
    if attachment is not None:
        if type(attachment) is not list:
            attachment = [attachment]
            
        for attachment_instance in attachment:
            with open(attachment_instance, 'rb') as f:

                file = MIMEApplication(
                    f.read(),
                    name=os.path.basename(attachment_instance)
                )
            
            file['Content-Disposition'] = f'attachment; filename="{os.path.basename(attachment_instance)}"'
            msg.attach(file)
    return msg

def send_email(SENDER_EMAIL, SENDER_PASSWORD, RECIEVER_EMAIL, SUBJECT, TEXT="", IMG=None, ATTACHMENT=None):
    
    print('initiating...')
    smtp = smtplib.SMTP('smtp-mail.outlook.com', port='587')
    
    #other provider protocols
    # smtplib.SMTP('smtp-mail.outlook.com', port='587')
    # smtplib.SMTP('smtp.gmail.com', port='587')
    # smtplib.SMTP('smtp.mail.yahoo.com', port='587')
    
    smtp.ehlo()  # extended hello to our server
    smtp.starttls()  # communicate with TLS encryption
    print('communication established...')
    
    smtp.login('{}'.format(SENDER_EMAIL), '{}'.format(SENDER_PASSWORD)) #sender credentials
    
    msg = message(subject=SUBJECT, text=TEXT, img=IMG, attachment=ATTACHMENT)
    
    print('sending mail...')
    smtp.sendmail(SENDER_EMAIL,
                  RECIEVER_EMAIL,
                  msg.as_string())
    
    print("mail sent!")
                  
    smtp.quit()
    
    
def send_alert():
    # REQUEST RECIEVED FROM ATTENDANCE BUTTON ON DASHBOARD:
    x =  '{ "email":"hr@hotmail.com", "names": ["Nishant", "Ishan", "Adarsh"], "attendance": ["82", "45", "25"]}'
    # parse x:
    y = json.loads(x)
        
    defaulters = []
    for i in range(len(y['attendance'])):
        if int(y['attendance'][i]) < 50:
            defaulters.append(y['names'][i])
    print(defaulters)
    
    # message to be sent
    message = "Dear User\n\nThe students who have attendance less than 50% are:\n"
    index = 1
    for name in defaulters:
        message += "{}. {}\n".format(index, name)
        index += 1
    
    message += "\nBest Regards\nYuva Parivartan"
    
    send_email(SENDER_EMAIL="<--COMPANY EMAIL-->", SENDER_PASSWORD="<--COMPANY PASSWORD-->", 
               RECIEVER_EMAIL=y['email'], 
               SUBJECT="Attendance Defaulters", 
               TEXT=message)

send_alert()
#testing...    
#send_email(SENDER_EMAIL="", SENDER_PASSWORD="", RECIEVER_EMAIL="", SUBJECT="Test", TEXT="test message")
