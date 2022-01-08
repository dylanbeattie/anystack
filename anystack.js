var lists = [
    ["Android", "Apache", "AS400", "BeOS", "Blackberry", "CP/M", "Windows CE", "DOS", "EXEC I", "Fedora", "Gentoo", "HPUX", "IRIX", "iOS", "JavaOS", "Kali Linux", "Linux", "MS-DOS", "macOs", "NeXT", "OS", "2", "Plan9", "Qubes OS", "Red Star Linux", "Symbian", "SCO", "TempleOS", "Unix", "VMS", "Windows 3.11", "Windows NT", "Windows 2000", "Xenix", "Yggdrasil Linux", "YamlOS", "z/OS"],
    ["Access", "BigTable", "Cosmos", "CouchDB", "CSV files", "Cassandra", "DynamoDB", "dBase", "Excel", "FoxPro", "Firebird", "FileMaker Pro", "Greenplum", "HBase", "Informix", "JSON files", "Kubernetes", "Linter", "MySql", "Mongo", "New Folder", "Oracle", "Postgres", "Paradox", "QuarkXPress", "Redis", "SQL", "Teradata", "UniData", "VelocityDB", "Windows Registry", "XML", "YAMLDB", "ZIP files", "Zope"],
    ["Assembler", "Ada", "Brainfuck", "Blockchain", "C", "C#", "COBOL", "Crystal", "Clojure", "Coq", "Dart", "Delphi", "Erlang", "Eiffel", "Elixir", "Fortran", "F#", "Flask", "Go", "Groovy", "Haskell", "Haxe", "Io", "Java", "Julia", "Kotlin", "Lua", "Lisp", "Logo", "Matlab", "Node.js", "Nim", "Oberon", "OCaml", "Odin", "Python", "Perl", "PHP", "Pascal", "Powershell", "Pony", "PL/SQL", "Prolog", "QuickBasic", "R", "Ruby", "Rockstar", "Rust", "Swift", "Spring", "Smalltalk", "Scala", "SQL", "Solidity", "Shell", "Tcl", "T-SQL", "Typescript", "UnrealScript", "VBScript", "VHDL", "WolframAlpha", "Xamarin", "YAML Server", "Zig"],
    ["Angular", "AWT", "ANSI.SYS", "Bootstrap", "Backbone", "CLI", "CUDA", "Coffescript", "Dojo", "D3.js", "Ember.js", "Flash", "GraphQL", "GWT", "GTK+", "Glide", "GLSL", "Handlebars", "Ionic", "jQuery", "Jekyll", "JavaFX", "Knockout.js", "Luigi", "Mustache", "mootools", "Meteor", "Next.js", "Nuxt", "ObjectiveC", "Prototype.js", "Qt", "React", "Svelte", "Silverlight", "Swing", "Smarty", "Semantic UI", "Tk", "Tapestry", "Three.js", "Unity3D", "Vue", "WinForms", "Webforms", "wxWidgets", "WebAssembly", "XML", "yaml.js", "Zend", "ZMODEM"]
];
function stack(word) {
    var result = new Array();
    word = word.toLowerCase();
    for (var i = 0; i < word.length; i++) {
        var list = lists[i % lists.length];
        var items = list.filter(w => w.toLowerCase().startsWith(word[i]));
        var item = items[Math.floor(Math.random() * items.length)];
        result.push(item);
    }
    return (result);
}
function updateStack(evt) {
    var word = evt.target.value;
    if (word.length != 4) return;
    var items = stack(word);
    document.querySelectorAll("dd").forEach((element, key) => {
        element.innerHTML = items[key];
    })
}
document.getElementById("stack-name-input").addEventListener("keyup", updateStack);    