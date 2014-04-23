/*
		© Renaud Parize - 2014
		
		Au chargement de la page, le navigateur a fini d'afficher la page avant que
		le gestionnaire de cache n'est pu vérifier la présence d'une mise à jour.
		La page obtenue est donc obsolète. Au lieu d'attendre le prochain lancement
		pour afficher la mise à jour, on propose à l'utilisateur de recharger la page
		pour obtenir la dernière version.

*/

if (window.applicationCache) {
	applicationCache.addEventListener('updateready', function() {
		console.log("Cache-updater : mise à jour détectée. Demande de confirmation...");
        if (confirm("L'application a été mise à jour depuis la dernière mise en cache. Recharger maintenant?")) {
        	console.log("Cache-updater : mise à jour...");
            window.location.reload();
        }
        else{
	        console.log("Cache-updater : mise à jour refusée.")
        }
	});
}