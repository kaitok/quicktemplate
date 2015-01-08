module.exports = {
    input_data: "1,Vayne\n2,Draven\n3,Corki",
    iteratee: "function( line ) {\n  var split = line.split(/,/);\n  var id = split[0];\n  var name = split[1];\n  return {param1: id, param2: name};\n}",
    template: "SELECT\n  user\nFROM\n  users\nWHERE\n  id = '<%= param1 %>'\n  AND name = '<%= param2 %>'"
};
