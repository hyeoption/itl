# 📧 Email Setup Guide for ITL Contact Forms

## 🚀 Quick Setup with EmailJS (5 minutes)

Your contact forms are now ready! You just need to configure EmailJS to start receiving emails.

### Step 1: Create EmailJS Account

1. Go to [emailjs.com](https://emailjs.com)
2. Sign up for free (200 emails/month)
3. Verify your email

### Step 2: Add Email Service

1. **Go to Services** in EmailJS dashboard
2. **Click "Add Service"**
3. **Choose your email provider**:
   - **Gmail** (recommended)
   - **Outlook** 
   - **Yahoo**
   - **Custom SMTP**
4. **Follow the setup wizard**
5. **Note your Service ID** (e.g., `service_1234567`)

### Step 3: Create Email Template

1. **Go to Templates** in EmailJS dashboard
2. **Click "Create New Template"**
3. **Use this template**:

```html
Subject: New Contact Form Submission - ITL Logistics

From: {{from_name}} <{{from_email}}>
To: itl@itlshipping.com

New contact form submission from ITL website:

Name: {{from_name}}
Email: {{from_email}}
Message: {{message}}

---
This email was sent from the ITL Logistics website contact form.
Reply to: {{reply_to}}
```

4. **Save template** and note the **Template ID** (e.g., `template_1234567`)

### Step 4: Get Your Public Key

1. **Go to Account** → **General**
2. **Copy your Public Key** (e.g., `user_1234567890abcdef`)

### Step 5: Configure Environment Variables

**For Vercel deployment:**

1. **Go to your Vercel dashboard**
2. **Go to Project Settings** → **Environment Variables**
3. **Add these variables**:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID = your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID = your_template_id_here  
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY = your_public_key_here
```

**For local development:**

Create `.env.local` file in your project root:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### Step 6: Deploy and Test

1. **Push changes** to GitHub (triggers auto-deployment on Vercel)
2. **Test the contact form** on your live site
3. **Check your email** for the submission

## 🎯 Expected Behavior

### When someone submits the contact form:
- ✅ **Form shows "Sending..." state**
- ✅ **Success message appears** after sending
- ✅ **Email arrives** at `itl@itlshipping.com`
- ✅ **Form resets** automatically
- ✅ **Works in both English and Korean**

### Email Format You'll Receive:
```
Subject: New Contact Form Submission - ITL Logistics

From: John Doe <john@example.com>
To: itl@itlshipping.com

New contact form submission from ITL website:

Name: John Doe
Email: john@example.com
Message: I need a quote for shipping containers from Busan to Los Angeles.

---
This email was sent from the ITL Logistics website contact form.
Reply to: john@example.com
```

## 🔧 Troubleshooting

### No emails received?
1. **Check spam folder**
2. **Verify EmailJS service is active**
3. **Check Vercel environment variables**
4. **Test with EmailJS dashboard test feature**

### Form not submitting?
1. **Check browser console for errors**
2. **Verify all environment variables are set**
3. **Check network tab for failed requests**

### Common Issues:
- **Wrong Service ID**: Double-check in EmailJS dashboard
- **Template not found**: Verify template ID matches
- **Public key invalid**: Copy exact key from account settings
- **Email service not connected**: Reconnect email provider

## 📈 Usage Monitoring

### EmailJS Free Tier:
- **200 emails/month** (perfect for business inquiries)
- **Dashboard analytics** to track usage
- **Upgrade options** available if needed

### Check Usage:
1. Go to EmailJS dashboard
2. View **Statistics** section
3. Monitor monthly email count

## 🚀 Advanced Features (Optional)

### Auto-Reply to Customers:
Create a second template for customer confirmations:

```html
Subject: Thank you for contacting ITL Logistics

Dear {{from_name}},

Thank you for contacting ITL Logistics. We have received your message and will respond within 24 hours.

Your message:
{{message}}

Best regards,
ITL Logistics Team
```

### Quote Form Integration:
The quote page can use a similar setup with a dedicated template for quote requests.

## 🎉 You're All Set!

Once you complete the EmailJS setup:
1. Your contact form will start sending emails immediately
2. Customers get instant feedback when they submit
3. You'll receive professional-looking email notifications
4. No backend server management required!

---

**Need help?** Check the EmailJS documentation or contact their support team.
