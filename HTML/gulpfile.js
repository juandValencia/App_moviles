const {src,dest}=require("gulp");
const sass =require("gulp-sass");
const rename=require("gulp-rename");
const cleanCSS=require("gulp-clean-css");
const concat=require("gulp-concat");
const uglify=require("gulp-uglify-es").default;

sass.compiler=require("dart-sass");
function css() {
  // place code for your default task here
  return src("./sass/**/*.scss")
   			.pipe(sass())
  			.pipe(cleanCSS())
  			.pipe(rename("main.mim.css"))
  			.pipe(dest("./bundle/css"));
}
function js(){
  return src("./js/**/*.js")
    .pipe(concat("main.mim.js"))
    .pipe(uglify())
    .pipe(dest("./bundle/js"));
}




exports.js=js;



exports.css=css;
exports.default=()=>{};