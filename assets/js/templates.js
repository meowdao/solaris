define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

Handlebars.registerPartial("_canvas", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<canvas id=\"solaris\" height=\"1000\" width=\"1000\"></canvas>";
  }));

Handlebars.registerPartial("_form", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<form action=\"/\">\n	<input type=\"submit\" value=\"render\"/>\n</form>";
  }));

Handlebars.registerPartial("_message", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "";
  buffer += "\n<div class=\"message\">"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</div>\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, (depth0 && depth0.messages), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }));

Handlebars.registerPartial("_objects", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	<fieldset>\n		<legend>"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</legend>\n        ";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</fieldset>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "";
  buffer += "\n			<div>\n				<input type=\"checkbox\" name=\""
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\" id=\""
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\"/>\n				<label for=\""
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\">"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</label>\n			</div>\n        ";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, (depth0 && depth0.sections), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }));

this["JST"]["error"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "\n\n<article class=\"error\">\n	<div class=\"wrapper\">\n		<h2>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.error)),stack1 == null || stack1 === false ? stack1 : stack1.message)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h2>\n	</div>\n</article>\n\n";
  return buffer;
  });

this["JST"]["index"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this;


  buffer += "\n\n<div class=\"content\">\n    ";
  stack1 = self.invokePartial(partials._form, '_form', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = self.invokePartial(partials._canvas, '_canvas', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n\n<script src=\"/vendors/requirejs/require.min.js\" data-main=\"/js/solaris.js\"></script>";
  return buffer;
  });

this["JST"]["layouts/layout"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, self=this, functionType="function";


  buffer += "<!DOCTYPE html>\n<html>\n<head>\n	<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"/>\n	<meta name=\"description\" content=\"description\">\n	<meta name=\"keywords\" content=\"keywords\">\n	<meta name=\"robots\" content=\"all\"/>\n	<title>Solaris</title>\n	<link href=\"http://fonts.googleapis.com/css?family=Open%20Sans:n,i,b,bi\" rel=\"stylesheet\" type=\"text/css\">\n	<link href=\"/css/normalize.min.css\" rel=\"stylesheet\" type=\"text/css\">\n	<link href=\"/css/common.min.css\" rel=\"stylesheet\" type=\"text/css\">\n	<link href=\"/css/styles.min.css\" rel=\"stylesheet\" type=\"text/css\">\n</head>\n\n<body>\n\n    <header>\n	    <div class=\"wrapper\">\n		    Solaris\n	    </div>\n    </header>\n\n    <article>\n	    <div class=\"wrapper\">\n\n            ";
  stack1 = self.invokePartial(partials._message, '_message', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n            ";
  if (helper = helpers.body) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.body); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	    </div>\n    </article>\n\n    <footer>\n	    <div class=\"wrapper\">\n		    (c) copyright 2014\n	    </div>\n    </footer>\n\n</body>\n</html>";
  return buffer;
  });

return this["JST"];

});