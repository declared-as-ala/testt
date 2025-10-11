/**
 * Next.js plugin to fix HTML validation issues
 * Removes trailing slashes from void elements for W3C compliance
 */

export class HTMLFixPlugin {
  apply(compiler) {
    compiler.hooks.emit.tapAsync('HTMLFixPlugin', (compilation, callback) => {
      const voidElements = [
        'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 
        'link', 'meta', 'param', 'source', 'track', 'wbr'
      ];

      Object.keys(compilation.assets).forEach(filename => {
        if (filename.endsWith('.html')) {
          const asset = compilation.assets[filename];
          let source = asset.source();
          
          // Fix void elements by removing trailing slashes
          voidElements.forEach(tag => {
            const regex = new RegExp(`<${tag}([^>]*?)\\/>`, 'gi');
            source = source.replace(regex, `<${tag}$1>`);
          });
          
          // Update the asset
          compilation.assets[filename] = {
            source: () => source,
            size: () => source.length
          };
        }
      });

      callback();
    });
  }
}

export default HTMLFixPlugin;
