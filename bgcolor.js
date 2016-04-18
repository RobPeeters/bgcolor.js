//	Deze library veranderd de achtergrondkleur van een zelf aangegeven object. 

function _(id) {
	if (id) {
		if (window === this) {
			return new _(id);
		}

		this.e = document.getElementById(id);
		return this;
	} 
}

_.prototype = {
	achtergrondkleur: function (kleur) {
		this.e.style.background = kleur;
		return this;
	}
};