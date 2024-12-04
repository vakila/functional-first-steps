
export function diamondPattern(color1, color2, width) {

  if (width <= 20) {
    // BASE CASE
    // TODO return a string representing a color1-filled square with the given width
    return ''
  } else {
    // RECURSIVE CASE
    const smallerWidth = width * Math.SQRT2 / 2
    // TODO 
    // Return a string representing the color1-width square, along with the rest of the recursive pattern
    // At each recursive step, alternate the colors and translate & rotate the rest of the pattern to create the nested alternating diamonds effect
    return '';
  }

}

