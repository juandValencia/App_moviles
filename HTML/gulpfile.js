const {src,dest}=require("gulp");
const sass =require("gulp-sass");
const rename=require("gulp-rename");
const cleanCSS=rename("gulp-clean-css");
const concat=require("gulp-concat");
const uglify=require("gulp-uglify-es").default;

sass.compiler=require("dart-sass");
function css() {
  // place code for your default task here
  return src("./sass/**/*.scss")
   			.pipe(sass())
  			.pipe(cleanCSS())
  			.pipe(rename("main.init.css"))
  			.pipe(dest("./bundle/css"));
}
function js(){
	return src("./js¨/**/*.js");
		.pipe(concat("main.mim.js"))
		.pipe(dest("./bundle/js"))
}
function sass(){
	 return src("./sass/**/*.scss")
   			.pipe(sass())
   			.pipe(rename("main.init.css"))
  			.pipe(dest("./bundle"));

}

exports.js=js;
exports.css=css;
exports.default=()=>{};