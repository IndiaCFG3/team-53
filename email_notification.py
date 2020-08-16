import os
import sys
import json
import requests
from email.mime.text import MIMEText
from email.mime.image import MIMEImage
from email.mime.application import MIMEApplication
from email.mime.multipart import MIMEMultipart
import smtplib


## Fetching Email Data
# url=''
# r=requests.get(url)
# mail_data=r.json()
mail_data=json.loads(url)
mail_ID=mail_data['ID']
mail_text=mail_data['Text']
mail_img=mail_data['Image']
mail_sub=mail_data['Subject']


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

#testing...    
#send_email(SENDER_EMAIL="", SENDER_PASSWORD="", RECIEVER_EMAIL="", SUBJECT="Test", TEXT="test message")
