function findMatching(names, string) {
    return names.filter(
      (possibility) => possibility.toLowerCase() === string.toLowerCase()
    );
  }
  
function fuzzyMatch(names, string) {
    return names.filter(
      (possibility) =>
        possibility.toLowerCase().indexOf(string.toLowerCase()) === 0
    );
  }
  
function matchName(array, string) {
    return array.filter((record) => record.name === string);
  }