/* aide.js — mode d'emploi de l'outil 800 m ponctuel (lu par eps-aide.js) */
window.EPS_AIDE={appli:'800 m ponctuel · prof',bouton:false,
pied:'Les données restent sur cet appareil. Exportez en Excel après l’épreuve.',
publics:[{id:'prof',titre:'Professeur',chapitres:[
{t:'Avant l’épreuve',html:`<ol>
<li>À l’ouverture, choisissez l’examen (<b>Bac G&T</b>, <b>Bac Pro</b>, <b>CAP</b>) : le barème suit. Le badge en haut permet d’en changer.</li>
<li>Onglet <b>Élèves</b> : glissez l’export Pronote (CSV, XLS, XLSX, ODS ; colonnes nom, prénom, classe, sexe) ou ajoutez les élèves à la main.</li>
<li>Faites noter à chaque élève son <b>estimation</b> de temps avant la course : elle compte sur 3 points.</li>
<li>Ouvrez l’outil une fois avec du réseau : ensuite il marche sans réseau. Sur iPad : Safari → Partager → « Sur l’écran d’accueil ».</li></ol>`},
{t:'Pendant la course',html:`<ul>
<li><span class="bouton">🏁 Course</span> affiche le chrono en grand et une carte par élève, chacun avec sa couleur.</li>
<li><span class="bouton">▶ Démarrer</span> au départ. Touchez <b>400m</b> sur la carte de l’élève à son passage, puis <b>Arrivée</b> à la ligne. Un double appui est bloqué 1,5 s.</li>
<li>Oubli ou chrono non lancé : saisissez le temps à la main sur la carte (3:30, 3’30 ou 3.30).</li>
<li>Notez l’<b>échauffement</b> (/3), cochez <b>pénalité</b> ou <b>marché</b> si besoin ; <span class="bouton">ABS</span> et <span class="bouton">🏥 Disp</span> pour les absents et dispensés.</li>
<li>Le chrono reprend s’il y a un rechargement ou une mise en veille : il est calculé sur l’heure réelle.</li></ul>`},
{t:'La note sur 20',html:`<ul>
<li><b>Performance</b> /10 (G&T) ou /8 (Pro, CAP), d’après le temps et le sexe.</li>
<li><b>Allure régulière</b> /4 ou /6 : écart entre le 1er et le 2e 400 m.</li>
<li><b>Échauffement</b> /3 et <b>estimation</b> /3 : écart entre le temps annoncé et le temps réalisé, affiché en secondes.</li></ul>`},
{t:'Résultats et exports',html:`<ul>
<li><b>Résultats</b> : tableau trié, filtres par classe, détail des 400 m.</li>
<li><span class="bouton">📊 Excel</span> <span class="bouton">📥 CSV</span> <span class="bouton">🖨 Imprimer</span>.</li></ul>
<p class="attention"><b>Exportez en Excel à la fin.</b> 🗑 efface la session ; vider le cache du navigateur aussi.</p>`},
{t:'Lecture facilitée',html:`<p><b>Lecture facilitée</b> (case en haut) : police plus lisible et lettres espacées, utile en cas de dyslexie. Le choix vaut pour toutes les applis EPS de l’appareil.</p>`}]}]};
