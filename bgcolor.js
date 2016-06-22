//	Deze library veranderd de achtergrondkleur van een zelf aangegeven object. 

/* Dit is de functie waar je het element mee aanroept */
function _(id) {
	if (id) {
		if (window === this) {
			return new _(id);
		}

		this.e = document.getElementById(id);
		return this;
	} 
}

/* De .prototype property geeft de mogelijkheid om nieuwe eigenschappen toe te voegen aan een bestaand prototype. */
_.prototype = {
	/* Hier wordt de achtergrondkleur veranderd naar de meegegeven kleur */
	achtergrondkleur: function (kleur) {
		this.e.style.background = kleur;
		return this;
	}
};