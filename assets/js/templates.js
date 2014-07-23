define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

Handlebars.registerPartial("_canvas", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"canvas col-lg-10\">\n	<canvas id=\"solaris\" height=\"1000\" width=\"1000\"></canvas>\n</div>";
  }));

Handlebars.registerPartial("_error", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression;


  return escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.error)),stack1 == null || stack1 === false ? stack1 : stack1.message)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }));

Handlebars.registerPartial("_form", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"form col-lg-2\">\n	<form action=\"/\">\n        <h2 class=\"page-header\">Options</h2>\n	</form>\n</div>";
  }));

Handlebars.registerPartial("_form_hypotrochoid", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"panel panel-default\">\n	<div class=\"panel-heading\">scale</div>\n	<div class=\"panel-body\">\n		<select class=\"form-control\" name=\"scale\" id=\"scale\">\n			<option value=\"1\">inner</option>\n			<option value=\"10\">outer</option>\n			<option value=\"35\">full</option>\n		</select>\n		<label for=\"scale\"></label>\n	</div>\n</div>\n<div class=\"panel panel-default\">\n	<div class=\"panel-heading\">lines</div>\n	<div class=\"panel-body\">\n		<select class=\"form-control\" name=\"scale\" id=\"scale\">\n			<option value=\"straight\">straight</option>\n			<option value=\"sharp\">sharp</option>\n			<option value=\"curve\">curve</option>\n		</select>\n		<label for=\"scale\"></label>\n	</div>\n</div>\n<div class=\"panel panel-default\">\n	<div class=\"panel-heading\">planets</div>\n	<div class=\"panel-body\">\n		<select class=\"form-control\" name=\"first\" id=\"first\">\n			<option value=\"1\">mercury</option>\n			<option value=\"2\">venus</option>\n			<option value=\"3\">earth</option>\n			<option value=\"4\">mars</option>\n			<option value=\"5\">jupiter</option>\n			<option value=\"6\">saturn</option>\n			<option value=\"7\">uranus</option>\n			<option value=\"8\">neptune</option>\n			<option value=\"9\">pluto</option>\n		</select>\n		<label for=\"first\"></label>\n		<select class=\"form-control\" name=\"second\" id=\"second\">\n			<option value=\"1\">mercury</option>\n			<option value=\"2\">venus</option>\n			<option value=\"3\">earth</option>\n			<option value=\"4\">mars</option>\n			<option value=\"5\">jupiter</option>\n			<option value=\"6\">saturn</option>\n			<option value=\"7\">uranus</option>\n			<option value=\"8\">neptune</option>\n			<option value=\"9\">pluto</option>\n		</select>\n		<label for=\"second\"></label>\n	</div>\n</div>\n<div class=\"panel panel-default\">\n	<div class=\"panel-heading\">intervals</div>\n	<div class=\"panel-body\">\n		<select class=\"form-control\" name=\"interval\" id=\"interval\">\n			<option value=\"1\">1</option>\n			<option value=\"7\">7</option>\n			<option value=\"10\">10</option>\n			<option value=\"30\">30</option>\n			<option value=\"100\">100</option>\n		</select>\n		<label for=\"interval\"></label>\n		<select class=\"form-control\" name=\"duration\" id=\"duration\">\n			<option value=\"1000\">1000</option>\n			<option value=\"2000\">2000</option>\n			<option value=\"3000\">3000</option>\n			<option value=\"5000\">5000</option>\n			<option value=\"10000\">10000</option>\n			<option value=\"25000\">25000</option>\n		</select>\n		<label for=\"duration\"></label>\n	</div>\n</div>\n";
  }));

Handlebars.registerPartial("_form_natal", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<p>;)</p>";
  }));

Handlebars.registerPartial("_form_system", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	<div class=\"panel panel-default\" data-group=\""
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n		<div class=\"panel-heading\">"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n		<div class=\"panel-body\">\n            ";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		</div>\n	</div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "";
  buffer += "\n				<div class=\"checkbox\">\n					<label for=\""
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\"><input type=\"checkbox\" name=\""
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\" id=\""
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\"/>"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</label>\n				</div>\n            ";
  return buffer;
  }

  buffer += "<div class=\"panel panel-default\">\n	<div class=\"panel-heading\">planets</div>\n	<div class=\"panel-body\">\n		<select class=\"form-control\" name=\"scale\" id=\"scale\">\n			<option value=\"1\">inner</option>\n			<option value=\"10\">outer</option>\n			<option value=\"35\">full</option>\n		</select>\n		<label for=\"scale\"></label>\n	</div>\n</div>\n\n";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
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

Handlebars.registerPartial("_views", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<table class=\"views\">\n	<tr>\n		<td>\n			<a href=\"/view/hypotrochoid\">\n				<img src=\"/img/hypotrochoid.png\" width=\"400\" height=\"400\" alt=\"hypotrochoid\"/>\n			</a>\n		</td>\n		<td>\n			<a href=\"/view/system\">\n				<img src=\"/img/system.png\" width=\"400\" height=\"400\" alt=\"system\"/>\n			</a>\n		</td>\n	</tr>\n	<tr>\n		<td>\n			<a href=\"/view/hypotrochoid\">Hypotrochoid</a> view is inspired by\n			<a href=\"http://www.amazon.com/Little-Book-Coincidence-Wooden-Books/dp/0802713882\">Little Book\n				Coincidence</a> In the book orbits are just two circles but here they are build on real data\n		</td>\n		<td>\n			<a href=\"/view/system\">System</a> simple solar system view which shows current position of planets\n		</td>\n	</tr>\n</table>";
  }));

Handlebars.registerPartial("_welcome", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  return buffer;
  }));

this["JST"]["error"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  buffer += "\n\n<h1 class=\"page-header\">Ooops!</h1>\n<div class=\"description\">\n123\n</div>\n";
  return buffer;
  });

this["JST"]["layouts/layout"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<!DOCTYPE html>\n<html>\n<head>\n	<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"/>\n	<meta name=\"description\" content=\"description\">\n	<meta name=\"keywords\" content=\"keywords\">\n	<meta name=\"robots\" content=\"all\"/>\n	<title>Solaris</title>\n	<link href=\"http://fonts.googleapis.com/css?family=Open%20Sans:n,i,b,bi\" rel=\"stylesheet\" type=\"text/css\">\n	<link href=\"/css/bootstrap.min.css\" rel=\"stylesheet\" type=\"text/css\">\n	<link href=\"/css/common.min.css\" rel=\"stylesheet\" type=\"text/css\">\n	<link href=\"/css/styles.min.css\" rel=\"stylesheet\" type=\"text/css\">\n	<script src=\"/vendors/requirejs/require.min.js\" data-main=\"/js/solaris.js\"></script>\n</head>\n\n<body>\n\n</body>\n\n</html>";
  });

this["JST"]["layouts/main"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, self=this, functionType="function";


  buffer += "<header>\n	<div class=\"wrapper\">\n		<a href=\"/\">Solaris</a>\n	</div>\n</header>\n\n<article>\n	<div class=\"wrapper container\">\n        ";
  stack1 = self.invokePartial(partials._message, '_message', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  if (helper = helpers.body) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.body); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</div>\n</article>\n\n<footer>\n	<div class=\"wrapper\">\n		(c) copyright 2014\n	</div>\n</footer>\n";
  return buffer;
  });

this["JST"]["view"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this;


  buffer += "\n\n<div class=\"content row\">\n    ";
  stack1 = self.invokePartial(partials._form, '_form', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = self.invokePartial(partials._canvas, '_canvas', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;
  });

this["JST"]["welcome"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  buffer += "\n\n<div class=\"jumbotron\">\n	<h1>Solaris!</h1>\n	<p>Symple 2D solar system with several views which demonstrates planets positions and relations.</p>\n</div>";
  return buffer;
  });

return this["JST"];

});