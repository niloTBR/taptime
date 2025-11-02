const express = require('express');
const path = require('path');
const fs = require('fs');
const sass = require('sass');

const app = express();
const PORT = 3000;

// Middleware to serve static files
app.use(express.static('src'));
app.use('/assets', express.static('assets'));

// Compile SCSS to CSS on the fly
app.get('*.css', (req, res) => {
  const scssPath = req.path.replace('.css', '.scss');
  const fullScssPath = path.join(__dirname, 'src', scssPath);
  
  if (fs.existsSync(fullScssPath)) {
    try {
      const result = sass.compile(fullScssPath);
      res.type('text/css');
      res.send(result.css);
    } catch (error) {
      console.error('SCSS compilation error:', error);
      res.status(500).send('/* SCSS compilation error */');
    }
  } else {
    res.status(404).send('CSS file not found');
  }
});

// Template rendering function
function renderTemplate(htmlContent, data) {
  return htmlContent.replace(/\{\{([^}]+)\}\}/g, (match, path) => {
    const keys = path.trim().split('.');
    let value = data;
    
    for (const key of keys) {
      value = value && value[key];
    }
    
    return value || match;
  });
}

// Route for HomePage
app.get('/', (req, res) => {
  try {
    // Read HTML template
    const htmlPath = path.join(__dirname, 'src/pages/HomePage/HomePage.html');
    let htmlContent = fs.readFileSync(htmlPath, 'utf8');
    
    // Read content data
    const contentPath = path.join(__dirname, 'src/pages/HomePage/content.json');
    const contentData = JSON.parse(fs.readFileSync(contentPath, 'utf8'));
    
    // Read additional data files
    const expertsPath = path.join(__dirname, 'src/data/experts.json');
    const expertsData = JSON.parse(fs.readFileSync(expertsPath, 'utf8'));
    
    const reviewsPath = path.join(__dirname, 'src/data/reviews.json');
    const reviewsData = JSON.parse(fs.readFileSync(reviewsPath, 'utf8'));
    
    // Combine all data
    const templateData = {
      ...contentData,
      site: { name: 'TapTime' },
      navigation: {
        login: 'Log In',
        signup: 'Sign Up',
        becomeExpert: 'Become Expert'
      },
      experts: expertsData.featured,
      reviews: reviewsData.testimonials
    };
    
    // Render template with data
    htmlContent = renderTemplate(htmlContent, templateData);
    
    // Update CSS and JS paths
    htmlContent = htmlContent.replace('./HomePage.css', '/pages/HomePage/HomePage.css');
    htmlContent = htmlContent.replace('./HomePage.js', '/pages/HomePage/HomePage.js');
    
    res.send(htmlContent);
    
  } catch (error) {
    console.error('Error rendering HomePage:', error);
    res.status(500).send('Error loading page');
  }
});

// Generic page route handler
app.get('/:page', (req, res) => {
  const pageName = req.params.page;
  const pageDir = pageName.charAt(0).toUpperCase() + pageName.slice(1) + 'Page';
  
  try {
    const htmlPath = path.join(__dirname, `src/pages/${pageDir}/${pageDir}.html`);
    
    if (fs.existsSync(htmlPath)) {
      let htmlContent = fs.readFileSync(htmlPath, 'utf8');
      
      // Try to load content data
      const contentPath = path.join(__dirname, `src/pages/${pageDir}/content.json`);
      let templateData = { site: { name: 'TapTime' } };
      
      if (fs.existsSync(contentPath)) {
        const contentData = JSON.parse(fs.readFileSync(contentPath, 'utf8'));
        templateData = { ...templateData, ...contentData };
      }
      
      // Render template
      htmlContent = renderTemplate(htmlContent, templateData);
      
      // Update CSS and JS paths
      htmlContent = htmlContent.replace(`./${pageDir}.css`, `/pages/${pageDir}/${pageDir}.css`);
      htmlContent = htmlContent.replace(`./${pageDir}.js`, `/pages/${pageDir}/${pageDir}.js`);
      
      res.send(htmlContent);
    } else {
      res.status(404).send('Page not found');
    }
    
  } catch (error) {
    console.error(`Error rendering ${pageName}:`, error);
    res.status(500).send('Error loading page');
  }
});

// Serve TypeScript files as JavaScript (simple transpilation)
app.get('*.js', (req, res) => {
  const tsPath = req.path.replace('.js', '.ts');
  const fullTsPath = path.join(__dirname, 'src', tsPath);
  
  if (fs.existsSync(fullTsPath)) {
    try {
      let tsContent = fs.readFileSync(fullTsPath, 'utf8');
      
      // Simple TypeScript to JavaScript conversion (remove types)
      tsContent = tsContent
        .replace(/: [^=,;{\n\r]+/g, '') // Remove type annotations
        .replace(/interface\s+\w+\s*{[^}]*}/g, '') // Remove interfaces
        .replace(/private\s+|public\s+|protected\s+/g, '') // Remove access modifiers
        .replace(/async\s+([^(]+)/g, 'async $1') // Keep async
        .replace(/export\s+default\s+/g, '// export default '); // Comment out exports
      
      res.type('application/javascript');
      res.send(tsContent);
    } catch (error) {
      console.error('TypeScript conversion error:', error);
      res.status(500).send('/* TypeScript conversion error */');
    }
  } else {
    res.status(404).send('JavaScript file not found');
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`\n🚀 Server running at: http://localhost:${PORT}`);
  console.log(`📄 HomePage: http://localhost:${PORT}/`);
  console.log(`🎨 Proper architecture with separated files!\n`);
});

module.exports = app;