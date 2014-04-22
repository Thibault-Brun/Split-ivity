function PackageDefault (arg1) {
    this.listActivite =[];
    this.nom = arg1;
    this.getInfo = function() {
        return this.nom;
    };
}


$(document).ready(function() {
    console.log( "ready!" );
    var pack1 = new PackageDefault("toto");
    console.log(pack1.getInfo());
});