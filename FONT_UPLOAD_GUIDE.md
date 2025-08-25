# Custom Font Upload Guide

## 🎯 **How to Upload Your Custom Font**

### **Step 1: Prepare Your Font Files**
Make sure you have your font files in these formats (if possible):
- `.woff2` (best for web - smallest file size)
- `.woff` (good fallback)
- `.ttf` (TrueType - largest but most compatible)

### **Step 2: Upload to the Fonts Directory**
1. Navigate to the `public/fonts/` folder in your project
2. Upload your font files there
3. **Important**: Rename your files to match the CSS:
   - `your-font.woff2` (normal weight)
   - `your-font-bold.woff2` (bold weight)
   - Or update the CSS to match your actual filenames

### **Step 3: Update CSS (if needed)**
If your font files have different names, update the CSS in `app/globals.css`:

```css
@font-face {
  font-family: 'CustomFont';
  src: url('/fonts/YOUR-ACTUAL-FONT-NAME.woff2') format('woff2'),
       url('/fonts/YOUR-ACTUAL-FONT-NAME.woff') format('woff'),
       url('/fonts/YOUR-ACTUAL-FONT-NAME.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
```

### **Step 4: Test Your Font**
Your custom font will automatically be used for all headings (h1, h2, h3, etc.)

## 🚀 **Font Classes You Can Use**

- `font-serif` - Uses your custom font for headings
- `font-custom` - Alternative class for your custom font
- `font-sans` - Still uses Inter for body text

## 📁 **File Structure**
```
public/
  fonts/
    your-font.woff2      ← Upload your normal weight font here
    your-font-bold.woff2 ← Upload your bold weight font here
    your-font.woff       ← Upload your normal weight font here
    your-font-bold.woff  ← Upload your bold weight font here
```

## ⚠️ **Important Notes**

1. **Font Licensing**: Make sure you have the right to use your font on the web
2. **File Sizes**: Keep font files under 500KB total for fast loading
3. **Fallbacks**: The CSS includes fallbacks to Times New Roman if your font fails to load
4. **Browser Support**: .woff2 is supported by all modern browsers

## 🔧 **Troubleshooting**

- **Font not loading?** Check the file paths in the CSS
- **Font looks wrong?** Make sure you're using the right font-weight values
- **Slow loading?** Consider converting to .woff2 format

## 💡 **Pro Tips**

- Use .woff2 format when possible (smallest file size)
- Include multiple weights if you have them
- Test on different devices and browsers
- Consider using `font-display: swap` for better performance
