/*
		© Renaud Parize - 2014
		
		Affichage des étapes de mise à jour du cache dans la console

*/

function logEvent(event) {
	
	var message = "";
	switch (event.type)
	{
		case 'checking':
			message="vérification du cache sur le serveur";
			break;
		case 'noupdate':
			message="aucune mise à jour détectée";
			break;
		case 'downloading':
			message="téléchargement des fichiers";
			break;
		case 'cached':
			message="fichiers correctement mis en cache";
			break;
		case 'updateready':
			message="mise à jour des fichiers disponible";
			break;
		case 'obsolete':
			message="cache obsolète";
			break;
		case 'error':
			message="erreur";
			break;
	}
	console.log('Cache-log : '+message);
}
 
window.applicationCache.addEventListener('checking',logEvent,false);
window.applicationCache.addEventListener('noupdate',logEvent,false);
window.applicationCache.addEventListener('downloading',logEvent,false);
window.applicationCache.addEventListener('cached',logEvent,false);
window.applicationCache.addEventListener('updateready',logEvent,false);
window.applicationCache.addEventListener('obsolete',logEvent,false);
window.applicationCache.addEventListener('error',logEvent,false);