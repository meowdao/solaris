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
  


  return "<form action=\"/\">\n\n</form>";
  }));

Handlebars.registerPartial("_form_hypotrochoid", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<fieldset>\n    <legend>scale</legend>\n    <select name=\"scale\" id=\"scale\">\n        <option value=\"1\">inner</option>\n        <option value=\"10\">outer</option>\n        <option value=\"35\">full</option>\n    </select>\n    <label for=\"scale\"></label>\n</fieldset>\n<fieldset>\n    <legend>planets</legend>\n    <select name=\"first\" id=\"first\">\n        <option value=\"1\">mercury</option>\n        <option value=\"2\">venus</option>\n        <option value=\"3\">earth</option>\n        <option value=\"4\">mars</option>\n        <option value=\"5\">jupiter</option>\n        <option value=\"6\">saturn</option>\n        <option value=\"7\">uran</option>\n        <option value=\"8\">neptune</option>\n        <option value=\"9\">pluto</option>\n    </select>\n    <label for=\"first\"></label>\n    <select name=\"second\" id=\"second\">\n        <option value=\"1\">mercury</option>\n        <option value=\"2\">venus</option>\n        <option value=\"3\">earth</option>\n        <option value=\"4\">mars</option>\n        <option value=\"5\">jupiter</option>\n        <option value=\"6\">saturn</option>\n        <option value=\"7\">uran</option>\n        <option value=\"8\">neptune</option>\n        <option value=\"9\">pluto</option>\n    </select>\n    <label for=\"second\"></label>\n</fieldset>\n<fieldset>\n    <legend>interval</legend>\n    <select name=\"interval\" id=\"interval\">\n        <option value=\"1\">1</option>\n        <option value=\"2\">2</option>\n        <option value=\"3\">3</option>\n        <option value=\"4\">4</option>\n        <option value=\"5\">5</option>\n        <option value=\"6\">6</option>\n        <option value=\"7\">7</option>\n        <option value=\"8\">8</option>\n        <option value=\"9\">9</option>\n        <option value=\"10\">10</option>\n    </select>\n    <label for=\"interval\"></label>\n    <select name=\"duration\" id=\"duration\">\n        <option value=\"100\">100</option>\n        <option value=\"500\">500</option>\n        <option value=\"1000\">1000</option>\n        <option value=\"2000\">2000</option>\n        <option value=\"3000\">3000</option>\n        <option value=\"5000\">5000</option>\n        <option value=\"10000\">10000</option>\n    </select>\n    <label for=\"duration\"></label>\n</fieldset>\n";
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
  buffer += "\n	<fieldset data-group=\""
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n		<legend>"
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

  buffer += "<fieldset>\n    <legend>scale</legend>\n    <select name=\"scale\" id=\"scale\">\n        <option value=\"1\">inner</option>\n        <option value=\"10\">outer</option>\n        <option value=\"35\">full</option>\n    </select>\n    <label for=\"scale\"></label>\n</fieldset>\n\n";
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
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  buffer += "\n\n<h1>Solaris</h1>\n\n<p>\n	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacus massa, aliquet quis tortor et, aliquet dictum\n	nisl. Integer lobortis blandit enim ac imperdiet. In hac habitasse platea dictumst. Vestibulum imperdiet aliquet\n	libero, sit amet sagittis nibh adipiscing ac. Pellentesque auctor nibh vel ornare laoreet. Integer molestie molestie\n	tortor, et accumsan justo sagittis eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per\n	inceptos himenaeos. Aenean aliquet vulputate metus, eu posuere purus auctor ac.\n</p>\n<p>\n	Praesent ultrices mi a dolor euismod aliquet. Phasellus eget felis ultricies, vulputate ante et, mollis sapien.\n	Donec mattis, tortor a laoreet cursus, libero lorem tristique sapien, at congue elit enim sed elit. Ut luctus\n	elementum scelerisque. Phasellus arcu tortor, fringilla tristique pharetra ac, commodo non ipsum. Vivamus sit amet\n	placerat urna. Proin laoreet, enim dignissim luctus commodo, velit justo condimentum libero, dapibus ultrices quam\n	nisl id metus. Mauris lacinia convallis nulla, et blandit mauris commodo ac.\n</p>\n<p>\n	Nullam semper aliquet orci at egestas. Praesent et semper orci. Mauris a neque sit amet urna mattis adipiscing\n	ullamcorper nec velit. Duis orci justo, posuere vel lorem tempor, iaculis malesuada felis. Vestibulum ante ipsum\n	primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum nunc augue, elementum ac placerat eget,\n	vulputate non eros. Cras in neque ut augue vulputate viverra. Cras aliquet nibh nec dignissim porttitor. Lorem ipsum\n	dolor sit amet, consectetur adipiscing elit. Integer tempor tempus mauris, vitae accumsan est mollis vestibulum.\n	Vivamus dignissim velit eu neque lacinia, eget consequat metus tincidunt.\n</p>\n<p>\n	Aenean viverra, eros nec porttitor ornare, est est ultrices sem, a tempor risus urna ac sapien. Quisque scelerisque\n	aliquam leo vel mollis. Suspendisse tempor nulla quis quam feugiat, in tempus nunc malesuada. In lacinia magna vitae\n	urna posuere, vitae accumsan dolor vehicula. Quisque ac lacinia diam. Suspendisse lacinia nec diam sit amet dapibus.\n	Etiam non velit dictum dolor dictum commodo in eget lacus. In erat tellus, pulvinar ut sapien ut, imperdiet ultrices\n	nunc. In hac habitasse platea dictumst. Suspendisse enim nisl, cursus vel pellentesque nec, facilisis in nunc.\n	Curabitur ut justo eu metus egestas pulvinar. Maecenas sollicitudin malesuada orci et hendrerit. Nunc et vestibulum\n	magna. Nam sit amet placerat sem, in consectetur est.\n</p>\n<p>\n	Nulla viverra pretium libero, sed pellentesque leo egestas quis. Aenean quis vestibulum sapien, eget gravida dolor.\n	Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin non vestibulum\n	neque, ut faucibus metus. Proin pharetra blandit massa, ut porta lacus. Sed molestie neque tortor, eget bibendum\n	lacus luctus sit amet. Nam adipiscing vestibulum pharetra.\n</p>";
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
  buffer += "\n	    </div>\n    </article>\n\n    <footer>\n	    <div class=\"wrapper\">\n		    (c) copyright 2014\n	    </div>\n    </footer>\n    <script src=\"/vendors/requirejs/require.min.js\" data-main=\"/js/solaris.js\"></script>\n</body>\n</html>";
  return buffer;
  });

this["JST"]["view"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this;


  buffer += "\n\n<div class=\"content\">\n    ";
  stack1 = self.invokePartial(partials._form, '_form', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = self.invokePartial(partials._canvas, '_canvas', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;
  });

return this["JST"];

});