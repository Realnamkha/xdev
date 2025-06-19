// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs");
fs.readFile("a.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    const cleanedContent = data.replace(/\s+/g, " ").trim();
    fs.writeFile("a.txt", cleanedContent, "utf8", (err) => {
      if (err) {
        console.error("Error writing to the file:", err);
        return;
      }
      console.log("File cleaned successfully.");
    });
  }
});
