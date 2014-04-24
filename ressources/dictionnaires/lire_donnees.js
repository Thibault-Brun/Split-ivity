var fileSystem=new ActiveXObject("Scripting.FileSystemObject");
var monfichier=fileSystem.OpenTextFile("dico_prenoms.txt", 1 ,true); 
//Ouverture du fichier  1:lecture ;2:écriture ;8:écriture à la fin du fichier;

console.log(monfichier.ReadAll());
alert(monfichier.ReadAll()); // imprime: "tutoriels en folie"
monFichier.Close();