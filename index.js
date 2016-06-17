hexo.extend.tag.register('kbd', function(args, content) {
  var style = ""
            + "border:1px solid gray;"
            + "font-size:1.2em;"
            + "box-shadow:1px 0 1px 0 #eee, 0 2px 0 2px #ccc, 0 2px 0 3px #444;"
            + "-webkit-border-radius:3px;"
            + "-moz-border-radius:3px;"
            + "border-radius:3px;"
            + "margin:2px 3px;"
            + "padding:1px 5px;";

  var key = args[0];
  switch (key.toLowerCase()) {
    case "enter":
      key += "↵";
      break;
    case "shift":
      key += "⇧";
      break;
    case "command":
      key += "⌘";
      break;
    case "option":
      key += "⌥";
      break;
    default:
      break;
  }
  return '<kbd style="' + style + '">' + key + '</kbd>'
});



