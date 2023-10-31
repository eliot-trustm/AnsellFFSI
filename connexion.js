//©Xara Ltd
if(typeof(loc)=="undefined"||loc==""){var loc="";if(document.body&&document.body.innerHTML){var tt=document.body.innerHTML;var ml=tt.match(/["']([^'"]*)connexion.js["']/i);if(ml && ml.length > 1) loc=ml[1];}}

var bd=0
document.write("<style type=\"text/css\">");
document.write("\n<!--\n");
document.write(".connexion_menu {z-index:999;border-color:#000000;border-style:solid;border-width:"+bd+"px 0px "+bd+"px 0px;background-color:#683186;position:absolute;left:0px;top:0px;visibility:hidden;}");
document.write(".connexion_plain, a.connexion_plain:link, a.connexion_plain:visited{text-align:left;background-color:#683186;color:#ffffff;text-decoration:none;border-color:#000000;border-style:solid;border-width:0px "+bd+"px 0px "+bd+"px;padding:2px 0px 2px 0px;cursor:hand;display:block;font-size:12pt;font-family:Arial, Helvetica, sans-serif;}");
document.write("a.connexion_plain:hover, a.connexion_plain:active{background-color:#e4c50e;color:#000000;text-decoration:none;border-color:#000000;border-style:solid;border-width:0px "+bd+"px 0px "+bd+"px;padding:2px 0px 2px 0px;cursor:hand;display:block;font-size:12pt;font-family:Arial, Helvetica, sans-serif;}");
document.write("\n-->\n");
document.write("</style>");

var fc=0x000000;
var bc=0xe4c50e;
if(typeof(frames)=="undefined"){var frames=6;if(frames>0)animate();}

startMainMenu("connexion_left.gif",40,13,2,0,0)
mainMenuItem("connexion_b1",".gif",40,178,loc+"aboutus.html","","About Us",2,2,"connexion_plain");
mainMenuItem("connexion_b2",".gif",40,178,loc+"facilities.html","","Facilities",2,2,"connexion_plain");
mainMenuItem("connexion_b3",".gif",40,178,loc+"car1.html","","Cars for sale",2,2,"connexion_plain");
mainMenuItem("connexion_b4",".gif",40,178,loc+"gallery.html","","Gallery",2,2,"connexion_plain");
mainMenuItem("connexion_b5",".gif",40,178,loc+"contact.html","","Contact",2,2,"connexion_plain");
endMainMenu("connexion_right.gif",40,13)

startSubmenu("connexion_b3","connexion_menu",178);
submenuItem("Ford Cosworth",loc+"car1.html","","connexion_plain");
submenuItem("BMW 735i",loc+"car2.html","","connexion_plain");
submenuItem("Rolls Royce",loc+"car3.html","","connexion_plain");
submenuItem("Shogun",loc+"car4.html","","connexion_plain");
submenuItem("Range Rover HSE",loc+"car5.html","","connexion_plain");
submenuItem("BMW X5",loc+"car6.html","","connexion_plain");
submenuItem("BMW 320i",loc+"car7.html","","connexion_plain");

endSubmenu("connexion_b3");

loc="";
