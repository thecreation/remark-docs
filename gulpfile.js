var gulp = require('gulp');
var resources = require('./resources.json');
var images = require('./images.json');
var fs = require('fs');

gulp.task('credits', function(){
  var content = '';

  content += "#11. Sources and Credits\n";
  content += "\n";
  content += "We've used the following images, icons or other plugins files as listed.\n";
  content += "\n";

  content += "###11.1 Icons\n";
  content += "Name          | Version      | Url\n";
  content += "------------- | ------------ | -------------\n";


  Object.keys(resources).forEach(function(name){
    if(typeof resources[name]['type'] !== 'undefined' && resources[name]['type'] === 'icon')
      content += resources[name]['name'] + "  | " + (typeof resources[name]['version'] !== 'undefined'? resources[name]['version'] : 'stable')  + "  | [" + resources[name]['homepage'] + "](" + resources[name]['homepage']  + ")\n";
  });

  content += "\n";
  content += "###11.2 Plugins\n";
  content += "Name          | Version      | Url        | License\n";
  content += "------------- | ------------ |------------|------------\n";

  Object.keys(resources).forEach(function(name){
    if(typeof resources[name]['type'] === 'undefined' || resources[name]['type'] !== 'icon'){
      if(typeof resources[name]['name'] !== 'undefined'){
        content += resources[name]['name'] +
        "  | " + (typeof resources[name]['version'] !== 'undefined'? resources[name]['version'] : 'stable') +
        "  | [" + resources[name]['homepage'] + "](" + resources[name]['homepage']  + ")"+
        "  | " + (typeof resources[name]['license'] !== 'undefined'? resources[name]['license'] : '') +"\n";
      }
    }
  });

  content += "\n";
  content += "###11.3 Images\n";
  content += "\n";

  content += "Name          | Url\n";
  content += "------------- | -------------\n";

  Object.keys(images).forEach(function(name){
      content += name + "  | [" + images[name] + "](" + images[name] + ")\n";
  });

  fs.writeFileSync('./docs/credits.md', content);
});
