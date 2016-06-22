<snippet>
  <content>
# bgcolor.js
The function of this little framework is to change the backgroundcolor of objects. They could be changed with a press on a button or for example on hover.
It's very easy to use! Check it out!
## Installation
Download the HTML file and the Javascript file. Open the HTML file and change the objects which need to change color.
## Usage
		function _(id) {
		if (id) {
		if (window === this) {
			return new _(id);
		}

		this.e = document.getElementById(id);
		return this;
		} 
		}

The _(id) function selects an object. The user has to give an ID to this function to select an object.

_.prototype = {
	achtergrondkleur: function (kleur) {
		this.e.style.background = kleur;
		return this;
	}
};

This function sets the backgroundcolor of the given object to a color that the user has filled in.

In the HTML file you only have to call the _(id).achtergrondkleur(color) function to change the color of the given object.
## Credits
Credits to Rob Peeters
## License
This framework is free to use for everyone!
]]></content>
  <tabTrigger>readme</tabTrigger>
</snippet>
