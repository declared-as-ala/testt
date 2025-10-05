#!/usr/bin/env node

/**
 * Script to fix HTML validation issues by removing trailing slashes from void elements
 * This script runs after the build to ensure W3C compliance
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function fixVoidElements(html) {
  // List of void elements that should not have trailing slashes
  const voidElements = [
    'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 
    'link', 'meta', 'param', 'source', 'track', 'wbr'
  ];
  
  let fixedHTML = html;
  
  // Remove trailing slashes from void elements
  voidElements.forEach(tag => {
    const regex = new RegExp(`<${tag}([^>]*?)\\/>`, 'gi');
    fixedHTML = fixedHTML.replace(regex, `<${tag}$1>`);
  });
  
  // Fix specific meta tag issues
  // Fix next-size-adjust meta tag without content attribute
  fixedHTML = fixedHTML.replace(
    /<meta\s+name="next-size-adjust"\s*(?!content=)[^>]*>/gi,
    '<meta name="next-size-adjust" content="auto">'
  );
  
  // Fix any meta tag without content attribute that has a name attribute
  fixedHTML = fixedHTML.replace(
    /<meta\s+name="([^"]+)"\s*(?!content=)[^>]*>/gi,
    (match, name) => {
      // Only add content if it's a known meta tag that needs it
      const metaTagsNeedingContent = ['next-size-adjust', 'description', 'keywords', 'author', 'robots'];
      if (metaTagsNeedingContent.includes(name)) {
        return match.replace(/>$/, ' content="auto">');
      }
      return match;
    }
  );
  
  // Remove duplicate content attributes
  fixedHTML = fixedHTML.replace(
    /content="[^"]*"\s+content="[^"]*"/gi,
    (match) => {
      // Keep only the first content attribute
      const firstContent = match.match(/content="[^"]*"/)[0];
      return firstContent;
    }
  );
  
  return fixedHTML;
}

function processHTMLFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixVoidElements(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed HTML validation issues in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

function findHTMLFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (item.endsWith('.html')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const buildDir = path.join(__dirname, '..', '.next');

if (fs.existsSync(buildDir)) {
  console.log('Processing HTML files for W3C compliance...');
  const htmlFiles = findHTMLFiles(buildDir);
  
  htmlFiles.forEach(processHTMLFile);
  console.log(`Processed ${htmlFiles.length} HTML files`);
} else {
  console.log('Build directory not found. Run "npm run build" first.');
}
