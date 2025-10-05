/**
 * HTML Transformer to fix W3C validation issues
 * Removes trailing slashes from void elements and fixes other HTML5 compliance issues
 */

export function transformHTML(html: string): string {
  // Remove trailing slashes from void elements
  const voidElements = [
    'meta', 'link', 'img', 'input', 'br', 'hr', 'area', 'base', 'col', 'embed', 
    'source', 'track', 'wbr', 'param'
  ]
  
  let transformedHTML = html
  
  // Fix void elements by removing trailing slashes
  voidElements.forEach(tag => {
    // Match self-closing tags with trailing slashes
    const regex = new RegExp(`<${tag}([^>]*?)/>`, 'gi')
    transformedHTML = transformedHTML.replace(regex, `<${tag}$1>`)
  })
  
  // Fix specific Next.js generated elements
  transformedHTML = transformedHTML
    .replace(/<meta([^>]*?)\/>/gi, '<meta$1>')
    .replace(/<link([^>]*?)\/>/gi, '<link$1>')
    .replace(/<img([^>]*?)\/>/gi, '<img$1>')
    .replace(/<input([^>]*?)\/>/gi, '<input$1>')
    .replace(/<br([^>]*?)\/>/gi, '<br$1>')
    .replace(/<hr([^>]*?)\/>/gi, '<hr$1>')
  
  return transformedHTML
}

export function fixVoidElements(html: string): string {
  // More comprehensive void element fix
  const voidElementRegex = /<(\w+)([^>]*?)\/>/g
  
  return html.replace(voidElementRegex, (match, tagName, attributes) => {
    // Check if it's a void element
    const voidElements = [
      'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 
      'link', 'meta', 'param', 'source', 'track', 'wbr'
    ]
    
    if (voidElements.includes(tagName.toLowerCase())) {
      return `<${tagName}${attributes}>`
    }
    
    return match
  })
}
