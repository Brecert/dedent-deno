// based on https://github.com/victornpb/tiny-dedent

/**
 * Removes the indentation of multiline strings
 * @param str A template literal string
 * @return A string without the indentation
 */
export function dedentString(str: string) {
  // remove leading blank line
  str = str.replace(/^[ \t]*\r?\n/, "");

  // detected indent
  const indent = /^[ \t]+/m.exec(str);

  // remove indent
  if (indent) str = str.replace(new RegExp("^" + indent[0], "gm"), "");

  // remove trailling blank line
  return str.replace(/(\r?\n)[ \t]+$/, "$1");
}

/**
 * Removes the indentation of multiline strings
 * @return A string without the indentation
 */
export function dedent(template: TemplateStringsArray, ...inserts: unknown[]) {
  let str = "";
  for (let i = 0; i < template.length; i++) {
    str += `${template[i]}${inserts[i] ?? ""}`;
  }
  return dedentString(str);
}
