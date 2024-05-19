export default { renderer: {
  /**
   * 
   * @param {string} text 
   * @param {string | number} level 
   * @returns 
   */
  heading(text, level) {
    
    const formattedId = text.toLowerCase().split(" ").join("-").replace("/", "-")
    
    return `
            <h${level} id="${formattedId}">
              ${text}
            </h${level}>`;
  }
}};
