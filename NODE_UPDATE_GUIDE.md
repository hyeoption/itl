# 🔧 Node.js Update Guide for Hwarang Logistics Project

## 🚨 Current Issue
Your current Node.js version (v10.15.3) is too old for modern React/Next.js development. We need to update to Node.js v18+ LTS.

## 📋 Prerequisites
- macOS (as detected from your system)
- Terminal access
- Internet connection

## 🎯 Target Setup
- **Node.js**: v18+ LTS (Latest Long Term Support)
- **npm**: Latest version
- **React**: v18.2.0
- **Next.js**: v14.0.0

---

## 🚀 Method 1: Using Node Version Manager (nvm) - RECOMMENDED

### Step 1: Install nvm (Node Version Manager)
```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Reload shell configuration
source ~/.bashrc
# OR if using zsh:
source ~/.zshrc
```

### Step 2: Verify nvm Installation
```bash
nvm --version
```

### Step 3: Install Latest Node.js LTS
```bash
# Install the latest LTS version
nvm install --lts

# Use the LTS version
nvm use --lts

# Set as default
nvm alias default node
```

### Step 4: Verify Installation
```bash
node --version  # Should show v18.x.x or higher
npm --version   # Should show latest npm version
```

---

## 🚀 Method 2: Direct Installation from Node.js Website

### Step 1: Download Node.js
1. Go to [https://nodejs.org/](https://nodejs.org/)
2. Download the **LTS** version (not Current)
3. Choose macOS installer (.pkg file)

### Step 2: Install Node.js
1. Double-click the downloaded .pkg file
2. Follow the installation wizard
3. Restart your terminal

### Step 3: Verify Installation
```bash
node --version
npm --version
```

---

## 🔧 Post-Installation Setup

### Step 1: Clear npm Cache
```bash
npm cache clean --force
```

### Step 2: Navigate to Project Directory
```bash
cd /Users/jisooyun/Desktop/Hwarang
```

### Step 3: Remove Old node_modules and package-lock.json
```bash
rm -rf node_modules
rm package-lock.json
```

### Step 4: Install Dependencies
```bash
npm install
```

### Step 5: Start Development Server
```bash
npm run dev
```

---

## ✅ Verification Checklist

After completing the update, verify these items:

- [ ] `node --version` shows v18.x.x or higher
- [ ] `npm --version` shows latest version
- [ ] `npm install` completes without errors
- [ ] `npm run dev` starts the development server
- [ ] Website loads at http://localhost:3000
- [ ] All React components render correctly
- [ ] No console errors in browser

---

## 🐛 Troubleshooting

### Issue: "command not found: nvm"
**Solution**: 
```bash
# Add these lines to your ~/.bashrc or ~/.zshrc
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
```

### Issue: Permission Errors
**Solution**:
```bash
# Fix npm permissions
sudo chown -R $USER:$GROUP ~/.npm
sudo chown -R $USER:$GROUP ~/.config
```

### Issue: Port 3000 Already in Use
**Solution**:
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
# OR use different port
npm run dev -- -p 3001
```

### Issue: Module Not Found Errors
**Solution**:
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

---

## 📊 Expected Output After Success

### Terminal Output:
```bash
$ node --version
v18.17.0

$ npm --version
9.6.7

$ npm install
added 1234 packages, and audited 1235 packages in 45s
found 0 vulnerabilities

$ npm run dev
> hwarang-logistics@1.0.0 dev
> next dev

- ready started server on 0.0.0.0:3000, url: http://localhost:3000
- event compiled client and server successfully in 2.3s (18 modules)
```

### Browser Output:
- Website loads at http://localhost:3000
- Professional logistics company design displays correctly
- All navigation links work
- Contact form is functional
- Responsive design works on different screen sizes

---

## 🎯 Next Steps After Node.js Update

1. **Test the Website**:
   - Open http://localhost:3000
   - Verify all sections display correctly
   - Test mobile responsiveness
   - Check all interactive elements

2. **Continue Development**:
   - Fine-tune styling and spacing
   - Add animations and hover effects
   - Optimize for performance
   - Add SEO meta tags

3. **Prepare for Deployment**:
   - Build production version: `npm run build`
   - Choose deployment platform (Vercel recommended)
   - Configure domain and SSL

---

## 📞 Support

If you encounter any issues during the Node.js update:

1. **Check the troubleshooting section above**
2. **Verify your macOS version compatibility**
3. **Ensure you have sufficient disk space**
4. **Check your internet connection**

---

**Last Updated**: August 23, 2025
**Status**: Ready for implementation
