import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import * as XLSX from 'xlsx';
import * as moment from 'moment';

export interface Diploma {
  title: string;
  description: string;
}

const DIPLOMAS = [
  {
    title: '<a target="_blank" href="assets/DiplomeMaitrise.JPG"> Maîtrise en sciences appliquées (dir. Alain Hertz), Polytechnique Montréal (2011-2013)</a>',
    description: 'Mathématiques appliquées spécialisation recherche opérationnelle, dép. de Génie Industrielle'
  },
  {
    title: '<a target="_blank" href="assets/DiplomeBac.JPG"> Baccalauréat ès sciences, Université de Montréal (2008-2011) </a>',
    description: 'Baccalauréat bidisciplinaire en Mathematiques et Physiques, dép. de Physique'
  },
  {
    title: '<a href="assets/AttestationDEC.pdf"> DEC. Sciences Natures CEGEP Garneau (2005-2008) </a>',
    description: 'Profil génie et santé complétés au <a target="_blank" href="assets/DiplomeBI.JPG">Bac. International</a>'
  }
];

export interface Certicate {
  title: string;
}

const CERTIFICATES = [
  { title: '<a target="_blank" href="assets/UC-COVPNC1W.pdf">Certifications Front End Angular 2+</a>'},
  { title: '<a target="_blank" href="assets/M101N - Course Completion Confirmation.pdf"> Formation NoSQL M101N: MongoDB for .NET Developers</a>'},

  { title: '<a target="_blank" href="assets/AttestationCSS.pdf">Formation Front End CSS 3</a>'},
  { title: 'Formation Front End CSS avec Bootstrap'},
  { title: '<a target="_blank" href="http://ivado.ca/formations/ecole-dete-francophone-apprentissage-profond/">ÉCOLE IVADO/MILA EN APPRENTISSAGE PROFOND 2017</a>'},
  { title: 'Google Cloud Platform Conference Montreal'},

];

export interface Accomplishment {
  no: number;
  client: string;
  project: string;
  function: string;
  start: Date;
  end: Date;
  duration: number;
  tags: Array<string>;
  context?: string;
  responsability?: string;
  deliverables?: string;
}

export class AccomplishmentExcel {
  no: number;
  client: string;
  project: string;
  period: string;
  function: string;
  reference: string;
  duration: number;
  constructor(accomplishment: Accomplishment) {
    this.no = accomplishment.no;
    this.client = accomplishment.client;
    this.project = accomplishment.project;
    this.function = accomplishment.function;
    this.reference = 'Référence Nº de tél.';
    this.period = moment(accomplishment.start).format('MM-YY') + '\n' + moment(accomplishment.end).format('MM-YY');
  }
}

const ACCOMPLISHMENTS: Accomplishment[] = [
  {
    no: 29,
    client: 'NASA',
    project: 'Space Assigned Numbers Authority (SANA)',
    function: 'Support technique & architecte logiciel',
    start: new Date(2020, 3, 1),
    end: new Date(2020, 5, 3),
    duration: 2,
    tags: ['Python', 'Django'],
    context: `<p>
    La communication avec les dispositifs dans l'espace se fait sur des bandes de fréquences de plus en plus rares.
    Les fréquences assignées à un dispositif spatial doivent être suffisamment uniques pour éviter les interférences. 
    Ce registre de fréquences est maintenu avec plusieurs autres registres connexes.
    </p>`,
    responsability: `
    <ul>
    <li> Valider et exécuter les requêtes visant à modifier le registre </li>
    <li> Réarchitecturer la notion de permissions et de rôles de façon plus générique pour que tous les registres
    suivent un même standard peut importe la spécificité des politiques en places des agences spatiales </li>
  </ul>`
  },
  {
    no: 29,
    client: 'ICANN',
    project: 'Universal Acceptance',
    function: 'Architecte logiciel',
    start: new Date(2020, 3, 1),
    end: new Date(2020, 5, 3),
    duration: 2,
    tags: ['Java', 'Docker', 'Go', 'Python', 'Javascript', 'Rust', 'C' ],
    context: `<p>
      ICANN exige un rapport explicitant la compatibilité des librairies de chaque langage avec
      les standards d'internalisation des adresses courriels et des noms de domaines.
    </p>`,
    responsability: `
    <ul>
    <li> Tester la conformité des bibliothèques de fonctionalités SMTP avec les standards d'internationalisation </li>
    <li> Produire un rapport sur la conformité de l'ensemble des langages </li>
  </ul>`,
  deliverables: `
  <ul>
    <li> Une nouvelle version du <a href="http://viagenie.ca/ua/test-results.html?collapsed=Passed,XFailed,Skipped">rapport de conformité </a>; </li>
    <li> L'ensemble des tests vérifiant le flag SMTPUTF8</li>
  </ul>
  `
  },
  {
    no: 29,
    client: 'ICANN',
    project: 'Technical Compliance Monitoring',
    function: 'Développeur full-stack',
    start: new Date(2020, 0, 21),
    end: new Date(2020, 5, 3),
    duration: 5,
    tags: ['Java', 'Spring Boot', 'DNS', 'MariaDB', 'H2', 'Lombok', 'DNSSEC', 'SNOWFLAKE'],
    context: `<p> L'Internet Corporation for Assigned Names and Numbers (ICANN) désire vérifier
    l'adéquation entre son contrat (référant les documents "RFC" de l'internet engineering task force - ietf) avec les registres opérant les "Top Level Domains" (.com, .info, .org, .gov, .edu, etc.) de l'internet 
    et l'implémentation actuelle qu'en ont fait les registres.
    </p>`,
    responsability: `
    <ul>
    <li> Développer des tests validant la conformité de chaque TLD avec les règles cités dans les documents RFCs et le contrat ICANN </li>
    <li> Optimiser la performance de certains tests (caches, réécriture de requêtes SQL, réduction de la complexité des algorithmes)</li>
    <li> Former les développeurs d'ICANN par des présentations et de la documentation en ligne</li>
  </ul>`,
  deliverables: `
  <ul>
    <li> L'application java TCM; </li>
    <li> Une documentation en ligne basée sur le markdown</li>
    <li> Une formation </li>
    <li> Un rapport de performance sur .org </li>
  </ul>
  `
  },
  {
    no: 29,
    client: 'MINISTÈRE DE L\'ENVIRONNEMENT ET DE LA LUTTE AUX CHANGEMENTS CLIMATIQUE',
    project: 'Architecture, développement et deploiement du site web de déclaration des Halocarbures',
    function: 'Architecte organique',
    start: new Date(2019, 0, 7),
    end: new Date(2020, 0, 17),
    duration: 12,
    tags: ['C#', 'ASP.NET WEB API', 'ANGULAR 2+', 'ORACLE', 'PL/SQL'],
    context: `<p>La tâche principale de mon mandat était de porter à bien le projet Halocarbures, 
    un système d'autodéclaration d'émission de composant tel que les CFC, HFC perçant la couche d'ozone.
    Ma deuxième tâche a été de produire un rapport exhaustif et un logiciel alternatif basé sur ce rapport
    pour collecter et calculer plus efficacement les statistiques de qualité de l'air pour la production de l'IQA. 
    Finalement, j'ai contribué de diverse façon à l'amélioration du devops (j'ai remplacé le système de source control VSS
    par Git à l'interne en prenant le soin de donner des formations au personnel; j'ai également mis les bibliothèques de fonctionnalités
    interne sous le package manager Nuget en l'intégrant avec Visual Studio pour accélérer la productivité des développeurs).
    <ul>
      <li> porter à bien le projet Halocarbures, 
      un système d'autodéclaration d'émission de composant tel que les CFC, HFC perçant la couche d'ozone; </li>
      <li> produire un rapport exhaustif et un logiciel alternatif basé sur ce rapport
      pour collecter et calculer plus efficacement les statistiques de qualité de l'air pour la production de l'IQA; </li>
      <li> Remplacer le système de source control VSS
      par Git à l'interne en prenant le soin de donner des formations au personnel; </li>
      <li> Amener les bibliothèques de fonctionnalités
      interne sous le package manager Nuget; </li>
    </ul>
    </p>`,
    responsability: `
    <ul>
    <li> Développer les nouveaux systèmes </li>
    <li> Contribuer de diverse façon à l'amélioration du devops </li>
    <li> Améliorer les anciens systèmes </li>
    <li> Designer l'architecture logicielle utilisée </li>
    <li> Écrire le code et réviser le code des autres contributeurs </li>
  </ul>`,
  deliverables: `
  <ul>
    <li> Le <a href="https://www.pes2.enviroweb.gouv.qc.ca/halocarbures/connexion">système halocarbure</a>; </li>
    <li> Le rapport sur les améliorations nécessaires à l'IQA (j'ai développé certaines fonctions mathématiques pour améliorer l'efficacité des algorithmes, j'ai rendu <a href="https://math.stackexchange.com/a/3511386/742466">certains développements publics</a>) </li>
    <li> Plusieurs programmes pour créer et gérer automatiquement des libs Nuget à partir de Dll .NET </li>
    <li> Des interfaces pour travailler avec Git</li>
  </ul>
  `
  },
  {
    no: 29,
    client: 'METRO SUPPLY CHAIN GROUP',
    project: 'Construction d\'un système de gestion d\'entrepôts',
    function: 'Lead Dev, architecte organique',
    start: new Date(2017, 7, 1),
    end: new Date(2018, 11, 26),
    duration: 6,
    tags: ['C#', 'ASP.NET WEB API', 'ANGULAR 2+', 'SQL SERVER', 'BALSAMIQ MOCKUPS'],
    context: `<p>Le groupe METRO doit informatiser:
    <ul>
      <li> la répartition de ses chargements remorques à ses sous-contractants transporteurs mid-mile; </li>
      <li> la façon dont ses clients (Best Buy, Ingram Micro, Rona, etc.) l'informent que des chargements de marchandises sont prêts à être ramasser dans leurs centres de distribution; </li>
      <li> la consolidation des chargements de marchandises partageant les mêmes routes à travers le Canada; </li>
      <li> la visibilité qu'il a sur son réseau de transport; </li>
      <li> l'analyse des écarts par rapport aux dates de livraisons promises aux consommateurs de ses clients; </li>
      <li> le processus d'expédition et de réception des marchandises; </li>
      <li> la visibilité que ses clients ont sur son offre de service et sur leurs marchandises en transit. </li>
    </ul>
    </p>`,
    responsability: `
    <ul>
    <li> Participer aux rencontres clientes pour élaborer une solution personnalisée </li>
    <li> Diriger la création de prototypes et de maquettes pour valider les preuves de concepts </li>
    <li> Établir l'agenda des réunions techniques </li>
    <li> Designer l'architecture logicielle utilisée </li>
    <li> Écrire le code et réviser le code des autres contributeurs </li>
    <li> Élaborer la stratégie de livraison </li>
    <li> Conseiller le clients des opportunités d'épargnes, de consolidation et de synergie dans son réseau de transport </li>
  </ul>`,
  deliverables: `
  <ul>
    <li> Page web "WMS" (Warehouse Management System) pour créer les expéditions, visualiser les réceptions de marchandises provenant des scanners (guns) dans les entrepôts, déclencher des requêtes de déplacements intra-entrepôts, exporter des rapports, chercher les items selon plus de 30 critères multipliés par leur combinaison; </li>
    <li> Page web "Réseau de Transport" pour afficher et chercher les différentes routes du réseau canadien et les afficher sur une carte Google avec les informations sur les entrepôts et le nombre de jours de transit entre chacun de ceux-ci </li>
    <li> Page web "Détail de commande" donnant les détails des items, leurs emplacements actuels, les étapes franchits et leurs prochaines destinations </li>
    <li> Page web "Historique" donnant une vue sur l'audit de toutes les transactions réalisées sur une commande de façon chronologique</li>
    <li> Intégration avec le service web d'un "TMS" tier (Transportation Management System) chargé de lancer les appels d'offres aux sous-contractants transporteurs pour exécuter les expéditions</li>
  </ul>
  `
 },
 {
    no: 29,
    client: 'RONA',
    project: 'Disponibilités de livraison par code postal',
    function: 'Programmeur full-stack',
    start: new Date(2018, 9, 1),
    end: new Date(2018, 11, 26),
    duration: 0.5,
    tags: ['ANGULAR 2+', 'ANGULAR MATERIAL', 'CSS 3', 'TYPESCRIPT'],
    context: `<p>RONA doit fournir à ses consommateurs et ses représentants en magasin un calendrier pour choisir une date de livraison pour ses consommateurs d'électroménagers.</p>`,
    responsability: `
    <ul>
    <li> Participer aux rencontres clientes pour élaborer une solution personnalisée </li>
    <li> Diriger la création de prototypes et de maquettes pour valider les preuves de concepts </li>
    <li> Établir l'agenda des réunions techniques </li>
    <li> Designer l'architecture logicielle utilisée </li>
    <li> Écrire le code </li>
  </ul>`,
  deliverables: `
  <ul>
    <li> Page web "Disponibilités de réservation" affichant 3 mois de calendrier dynamique avec le détail (horaire) sur la compagnie de livraison à domicile et le détail du chemin employé par le bien vendu. </li>
  </ul>
  `
 },
 {
    no: 29,
    client: 'CLEAR DESTINATION',
    project: 'Mise ne place d\'une méthode de travail puissante sur JIRA pour les développeurs et les gestionnaires supportant les différents processus déjà en place (tests, développement, requis, analyse, etc.)',
    function: 'Lead dev',
    start: new Date(2018, 8, 1),
    end: new Date(2018, 11, 1),
    duration: 0.5,
    tags: ['JIRA', 'AGILE', 'SCRUM'],
    context: `<p>CLEAR DESTINATION doit avoir une visibilité claire sur ce qu'elle livre à ses clients à une date donnée, les tâches en retard, celle qui sont en cours et la vélocité de leur exécution (burndown).</p>`,
    responsability: `
    <ul>
    <li> Création des sprints; </li>
    <li> Création des filtres dans les sprints pour épouser les processus des testeurs et des développeurs; </li>
    <li> Validation des processus de fermeture de billets décidés par la direction </li>
    <li> Formation de l'équipe de développement et de tests sur les sprints JIRA </li>
  </ul>`,
  deliverables: `
  <ul>
    <li> Établissement d'un processus de livraison mensuelle de la solution logicielle </li>
    <li> Méthode d'écriture des billets de travail </li>
  </ul>
  `
 },
 {
    no: 29,
    client: 'INGRAM MICRO',
    project: 'Mise en oeuvre d\'une technologie puissante permettant aux usagers d\'un portail web d\'utiliser Excel comme outil d\'extension de fonctionnalités du site',
    function: 'Architecte organique, programmeur full-stack',
    start: new Date(2018, 9, 1),
    end: new Date(2018, 10, 26),
    duration: 0.5,
    tags: ['EXCEL', 'SheetJS', 'Microsoft IIS', 'ANGULAR2+'],
    context: `<p>INGRAM MICRO (et d'autres clients) désire faire évoluer leurs rapports avec leurs besoins d'affaires sans être dépendants d'équipes de développement.</p>`,
    responsability: `
    <ul>
    <li> Recherche, développement et idéation de la solution; </li>
    <li> Évaluation des différentes technologies de rapports; </li>
    <li> Design de la solution; </li>
    <li> Codage de la solution et mise en place de l'infrastructure. </li>
  </ul>`,
  deliverables: `
  <ul>
    <li> Pages web permettant le téléversement de fichier excel patron contenant des formules et des graphiques référençant une feuillet excel vide populé dynamiquement par la page lorsque l'utilisateur décidera d'exporter des résultats de recherche</li>
    <li> Intégration de la version commerciale de SheetJS dans une solution Angular </li>
  </ul>
  `
 },
 {
    no: 29,
    client: 'GO LOGISTICS',
    project: 'Gestion des utilisateurs',
    function: 'Architecte organique',
    start: new Date(2016, 1, 1),
    end: new Date(2018, 10, 26),
    duration: 5,
    tags: ['ASP.NET Identity', 'ASP.NET Membership', 'Protocol OAUTH2', 'Windows Communication Foundation', 'Microsoft IIS', 'SQL SERVER'],
    context: 'GO LOGISTICS doit être en mesure de gérer (création, édition, suppression) ses utilisateurs dans le système legacy (ASP.NET Membership) et dans le nouveau système (ASP.NET Identity) de façon transparente.',
    responsability: `
    <ul>
    <li> Design des modifications devant être apportées aux deux systèmes (legacy et nouveau); </li>
    <li> Écriture des modifications et collaboration avec les autres intervenants; </li>
    <li> Formation de l'équipe d'assistance technique </li>
    <li> Diriger la création de prototypes et de maquettes pour valider les preuves de concepts </li>
    <li> Établir l'agenda des réunions techniques </li>
    <li> Designer l'architecture logicielle utilisée </li>
    <li> Écriture de documentation </li>
  </ul>`,
  deliverables: `
  <ul>
    <li> Page web "Gestion des utilisateurs" avec recherche, création, suppression et édition poussant les changements dans les 2 systèmes en respectant les rôles et les "claims" des utilisateurs </li>
  </ul>
  `
 },
 {
    no: 29,
    client: 'GERMAIN LARIVIÈRE, LG, COSTCO et plusieurs autres',
    project: 'Portail consommateur pour suivre sa livraison en ligne avec authentification pour client Javascript (dont le code est public)',
    function: 'Expert en sécurité web et intégrateur front end',
    start: new Date(2016, 1, 1),
    end: new Date(2018, 7, 1),
    duration: 3,
    tags: ['ANGULAR 2+', 'ASP.NET WEB API', 'Windows Communication Foundation', 'SQL SERVER'],
    context: `GERMAIN LARIVIÈRE, LG, COSTCO et plusieurs autres détaillants/manufacturiers doivent permettre à leurs consommateurs de suivre leur livraison depuis le manufacturier jusqu'à leur domicile.
    Cette page publique de repérage de la livraison doit accéder aux bases de données des transporteurs des items composants les commandes clientes. `,
    responsability: `
    <ul>
    <li> Écriture des modifications et collaboration avec les autres intervenants; </li>
    <li> Établir l'agenda des réunions techniques </li>
    <li> Designer l'architecture logicielle utilisée </li>
  </ul>`,
  deliverables: `
  <ul>
    <li> Framework d'authentification respectant le protocole OAUTH2 avec "refresh token" plus validation de l'origine de l'application contactant le serveur de ressources </li>
    <li> Page web gérant la création de "refresh token" </li>
    <li> Écriture d'un CSS configurable pour personnaliser un patron aux différents détaillants/manufacturiers </li>
  </ul>
  `
 },
 {
    no: 29,
    client: 'BOSCH, BEST BUY, METRO SUPPLY CHAIN GROUP, GO LOGISTICS, OVATION LOGISTICS et plusieurs autres',
    project: 'Direction du développement d\'un portail unique pour offrir une vue sur la livraison à domicile concernant différents acteurs (détaillants, manufacturiers, transporteurs et sous-contractants)',
    function: 'Architecte organique, programmeur full-stack',
    start: new Date(2015, 1, 1),
    end: new Date(2018, 10, 26),
    duration: 5,
    tags: ['C#', 'ASP.NET WEB API', 'ANGULAR 2+', 'SQL SERVER', 'BALSAMIQ MOCKUPS'],
    context: `METRO SUPPLY CHAIN GROUP doit voir les livraisons BOSCH qu'il doit acheminer au consommateur, mais aussi les "boîtes ouvertes" BEST BUY transitant sur le même réseau. BOSCH doit suivre l'évolution de sa commande jusqu'au consommateur et gérer les exceptions (dommages, retour, défectuosité) sur le réseau de METRO. Ovations logistics compétiteur de METRO doit voir les commandes BEST BUY qu'il transporte, mais jamais celles de METRO.`,
    responsability: `
    <ul>
    <li> Participer aux rencontres clientes pour élaborer la solution </li>
    <li> Diriger la création de prototypes et de maquettes pour valider les preuves de concepts </li>
    <li> Établir l'agenda des réunions techniques </li>
    <li> Designer l'architecture logicielle utilisée </li>
    <li> Écrire le code et réviser le code des autres contributeurs </li>
    <li> Élaborer la stratégie de livraison </li>
    <li> Conseiller le clients des opportunités d'épargnes, de consolidation et de synergie dans son réseau de transport </li>
  </ul>`,
  deliverables: `
  <ul>
    <li> Portail web unique pour l'ensemble des acteurs </li>
    <li> Participation à l'élaboration d'un framework d'autorisation par gestion de rôle par page et par catégorie d'action avec filtrage des données selon des contrats inter-compagnies </li>
    <li> Bibliothèque de composant UI centralisée s'adaptant selon les droits des utilisateurs </li>
  </ul>
  `
 },
 {
    no: 29,
    client: 'M. PIER TRANSPORT',
    project: 'Contruction d\'un système de geocodage automatique',
    function: 'Architecte organique, analyste programmeur en recherche opérationnelle',
    start: new Date(2014, 9, 1),
    end: new Date(2015, 10, 1),
    duration: 2,
    tags: ['C/C++', 'Entity Framework', 'Windows Communication Foundation', 'ANGULAR 2+', 'Windows Presentation Foundation', 'Google Maps API', 'Experian', 'Here API', 'GIS'],
    context: `M. PIER TRANSPORT (et d'autres transporteurs) veut pouvoir géocoder les adresses des consommateurs à livrer de façon automatisée`,
    responsability: `
    <ul>
    <li> Participer aux rencontres clientes pour élaborer la solution </li>
    <li> Évaluation des différentes technologies GIS et des fournisseurs de géocodages automatiques; </li>
    <li> Diriger la création de prototypes et de maquettes pour valider les preuves de concepts </li>
    <li> Établir l'agenda des réunions techniques </li>
    <li> Designer l'architecture logicielle utilisée </li>
    <li> Écrire le code et réviser le code des autres contributeurs </li>
    <li> Élaborer la stratégie de livraison </li>
  </ul>`,
  deliverables: `
  <ul>
    <li> Solution hybride avec un micro-service appelant un bibliothèque de normalisation d'adresses propriétaire, une bibliothèque maison de recherche d'adresse dans la base du fournisseur de donnée géographique Here/Navteq avec requête au Google Geocoding API lorsqu'échec</li>
    <li> Solution de gestion des adresses introuvables par géocodage manuelle et proposition de géocode potentiel pour une adresse donnée </li>
  </ul>`
 },
 {
    no: 30,
    client: 'BEST BUY',
    project: 'Scénario de transport premier mile',
    function: 'Analyste programmeur en recherche opérationnelle, administrateur de bases de données',
    start: new Date(2014, 11, 1),
    end: new Date(2015, 1, 1),
    duration: 2,
    tags: ['EXCEL', 'SQL SERVER', 'C#', 'C++'],
    context: `BEST BUY doit évaluer les coûts d'un changement de fournisseur pour déplacer ses marchandises à travers le Canada`,
    responsability: `
    <ul>
    <li> Participer aux rencontres clientes avec le fournisseur et les consultants en transport pour élaborer la solution </li>
    <li> Diriger la création de prototypes et de maquettes pour valider les preuves de concepts </li>
    <li> Établir l'agenda des réunions techniques </li>
    <li> Designer l'architecture logicielle utilisée </li>
    <li> Écrire le code </li>
  </ul>`,
  deliverables: `
  <ul>
    <li> Fichier excel contenant les prix calculés par code postal selon le mode LTL (less than truck load) ou pas avec toutes les combinaisons d'origines et de destinations intermédiaires possibles</li>
    <li> Base de données SQL SERVER à partir de laquelle le fichier excel est généré </li>
    <li> Outil de visualisation sur une carte Google du volume de marchandise vendu par code postal par BEST BUY à travers le Canada </li>
  </ul>`
 },
 {
    no: 29,
    client: 'Ovation Logistique',
    project: 'Refactoring du système d\'information géographique',
    function: 'Architecte organique, Analyste programmeur en recherche opérationnelle',
    start: new Date(2013, 11, 1),
    end: new Date(2014, 3, 1),
    duration: 3,
    tags: ['QUANTUM GIS', 'HERE/Navteq', 'C#', 'C++'],
    context: `Ovation Logistique doit faire sa répartition de commande à ses livreurs d'électroménagers avec des données géographiques à jour et tenant compte des congés fériés et du trafic historique`,
    responsability: `
    <ul>
    <li> Participer aux rencontres avec les fournisseurs pour déterminer la solution </li>
    <li> Évaluation des différentes technologies GIS et des fournisseurs de données géographiques; </li>
    <li> Diriger la création de prototypes pour valider les preuves de concepts </li>
    <li> Établir l'agenda des réunions techniques </li>
    <li> Designer l'architecture logicielle utilisée </li>
    <li> Écrire le code et réviser le code des autres contributeurs </li>
    <li> Élaborer la stratégie de livraison </li>
  </ul>`,
  deliverables: `
  <ul>
    <li> Écriture d'un ShapeTool permettant de prendre le format lourd et verbeux "Shape" du fournisseur de données géographiques et d'en extraire un fichier binaire léger personnalisé pour l'exécution de plus courts chemins dépendants du temps (trafic historique)</li>
    <li> Écriture d'un outil de visualisation pour auditer la livraison de la donnée par le fournisseur </li>
    <li> Écriture de guides techniques pour les responsables des installations de mise à jour de la donnée chaque trimestre</li>
  </ul>`
 },
 {
    no: 29,
    client: 'SEARS CANADA',
    project: 'Communication des disponibilités de date de livraison par REST API',
    function: 'Architecte organique',
    start: new Date(2016, 5, 1),
    end: new Date(2017, 6, 1),
    duration: 7,
    tags: ['SWAGGER DOC', 'ASP.NET WEB API', 'C#', 'Microsoft IIS', 'Log4Net', 'SQL SERVER', 'ASP.NET Identity', 'Windows Communication Foundation', 'Protocol OAUTH2'],
    context: `SEARS CANADA veut donner à ses consommateurs la possibilité de réserver leur date de livraison d'électroménagers directement en ligne`,
    responsability: `
    <ul>
    <li> Participer aux rencontres avec le client et les autres fournisseurs pour déterminer la solution </li>
    <li> Évaluation des différentes technologies; </li>
    <li> Diriger la création de prototypes pour valider les preuves de concepts </li>
    <li> Établir l'agenda des réunions techniques </li>
    <li> Designer l'architecture logicielle utilisée </li>
    <li> Écrire le code et réviser le code des autres contributeurs </li>
    <li> Élaborer la stratégie de livraison </li>
  </ul>`,
  deliverables: `
  <ul>
    <li> REST API donnant accès aux disponibilités de tous les transporteurs faisant affaires avec SEARS à travers le Canada; </li>
    <li> Serveur d'authentification OAUTH2 </li>
    <li> Framework de routage des requêtes dans l'architecture existante des transporteurs </li>
  </ul>`
 },
 {
    no: 29,
    client: 'THE BRICK',
    project: 'Supporter les ramassages (pick-ups) dans l\'optimisation de tournées de véhicules',
    function: 'Analyste programmeur en recherche opérationnelle',
    start: new Date(2013, 11, 1),
    end: new Date(2014, 6, 1),
    duration: 4,
    tags: ['PVRPTW', 'C++', 'C++ Boost Library', 'Winforms', 'DevExpress'],
    context: `The Brick a sa propre flotte de livraison et ramasse parfois en magasin un électroménager pour une livraison cliente. L'optimisation des tournées de véhicules doit tenir compte de cette situation où l'item ne part par de l'entrepôt. Problème connu sous le nom de PVRPTW (Pickup & Delivery Vehicle Routing Problem With Time Windows)`,
    responsability: `
    <ul>
    <li> Participer aux rencontres avec le client pour déterminer la solution </li>
    <li> Évaluation des différents algorithmes dans la littérature; </li>
    <li> participer à la création de prototypes pour valider les preuves de concepts </li>
    <li> Participer à l'agenda des réunions techniques </li>
    <li> Participer à l'architecture logicielle utilisée </li>
    <li> Écrire le code avec les autres contributeurs </li>
    <li> Élaborer la stratégie de livraison </li>
  </ul>`,
  deliverables: `
  <ul>
    <li> Engin d'optimisation en C++ implémentant un des meilleurs algorithme de la littérature; </li>
    <li> Modification à l'interface Winforms de répartition pour expliciter les dépendances entre le ramassage et la livraison des livreurs </li>
  </ul>`
 },
 {
    no: 29,
    client: 'CANADIAN TIRE',
    project: 'Bouton BOOK NOW de type "drop-in UI"',
    function: 'Architecte organique',
    start: new Date(2018, 1, 1),
    end: new Date(2018, 3, 1),
    duration: 1,
    tags: ['Javascript', 'Angular 2+', 'ASP.NET Identity', 'Protocol OAUTH2'],
    context: `Canadian Tire veut offrir la possibilité à ses consommateurs de réserver en ligne leur livraison sans avoir à programmer d'interface ou d'intégration`,
    responsability: `
    <ul>
    <li> Participer aux rencontres avec le client pour déterminer la solution </li>
    <li> Évaluation des différents technologies; </li>
    <li> Diriger la création de prototypes pour valider les preuves de concepts </li>
    <li> Établir l'agenda des réunions techniques </li>
    <li> Designer l'architecture logicielle utilisée </li>
    <li> Écrire le code </li>
    <li> Élaborer la stratégie de livraison </li>
  </ul>`,
  deliverables: `
  <ul>
    <li> Bouton "BOOK NOW" semblable au bouton "BUY NOW" de paypal intégrable dans un site web en ne copiant-collant qu'un bout de code et gérant toute la logique d'intégration des requêtes aux transporteurs qui opère la livraison en bout de ligne; </li>
    <li> Documentation par exemple Plunker pour intégrateur web </li>
  </ul>`
 },
 {
    no: 29,
    client: 'CLEAR DESTINATION',
    project: 'Ré-architecture de l\'infracstructure logicielle',
    function: 'Architecte organique',
    start: new Date(2012, 1, 1),
    end: new Date(2018, 10, 26),
    duration: 15,
    tags: [],
    context: `CLEAR DESTINATION doit moderniser son architecture technologique afin de supporter une charge accrue, des répondre à des demandes de changements rapides et de pouvoir obéir aux nouvelles exigences de service 24/7 de ses clients`,
    responsability: `
    <ul>
    <li> Participer aux rencontres avec le client pour déterminer la solution </li>
    <li> Évaluation des différents technologies; </li>
    <li> Diriger la création de prototypes pour valider les preuves de concepts </li>
    <li> Établir l'agenda des réunions techniques </li>
    <li> Designer l'architecture logicielle utilisée </li>
    <li> Écrire le code et réviser ceux des autres contributeurs </li>
    <li> Élaborer la stratégie de livraison </li>
  </ul>`,
  deliverables: `
  <ul>
    <li> Architecture micro-service; </li>
    <li> Framework de routage des requêtes pouvant les diriger selon n'importe quelle règles d'affaires avec base de données de connexions aux services windows, service web, APIs et à d'autres bases de données; </li>
    <li> REST API comme porte d'entrée/façade avec serveur authentification indépendant suivant OAUTH2; </li>
    <li> Préservation des actifs legacy par la façade du REST API préparant les requêtes HTTPS pour les vieilles technologies; </li>
    <li> Migration d'une partie de l'architecture sur le cloud Microsoft Azure avec synchronisations des bases de données sur les serveurs maisons; </li>
    <li> Plan de migration vers Azure; </li>
    <li> Plan de redondance des services du client; </li>
    <li> Framework de tests d'intégrations branché sur l'architecture en services pour reproduire sur n'importe quel machine, n'importe quel événement, n'importe quand; </li>
    <li> Installation d'un serveur d'intégration continue Jenkins et configuration du build server; </li>
  </ul>`
 },
 {
    no: 29,
    client: 'CLEAR DESTINATION',
    project: 'Utilitaire pour construction de requêtes SQL parallélisées avec mapping automatique aux objets',
    function: 'Programmeur .NET, Programmeur SQL',
    start: new Date(2014, 11, 1),
    end: new Date(2018, 10, 26),
    duration: 1,
    tags: ['SQL SERVER'],
    context: `CLEAR DESTINATION doit exécuter des requêtes sur plusieurs base de données partageant le même schéma de façon efficace et simple pour les programmeurs`,
    responsability: `
    <ul>
    <li> Participer aux rencontres avec le client pour déterminer la solution </li>
    <li> Évaluation des différents technologies; </li>
    <li> Diriger la création de prototypes pour valider les preuves de concepts </li>
    <li> Établir l'agenda des réunions techniques </li>
    <li> Designer l'architecture logicielle utilisée </li>
    <li> Écrire le code et réviser ceux des autres contributeurs </li>
    <li> Élaborer la stratégie de livraison </li>
  </ul>`,
  deliverables: `
  <ul>
    <li> Puissante bibliothèque de fonction C# permettant d'exécuter des requêtes parallélisées aux bases de données en mode multi-read ou bulk write avec mapping automatique par réflection de l'input ou de l'output aux objets C#</li>
  </ul>`
 },
 {
    no: 29,
    client: 'CLEAR DESTINATION',
    project: 'Étude et construction d\'un système prototype de répartition et d\'optimisation de livraisons complètement automatisé',
    function: 'Architecte organique, analyste en recherche opérationnelle',
    start: new Date(2013, 12, 1),
    end: new Date(2015, 1, 1),
    duration: 6,
    tags: ['Windows Communication Foundation', 'C++', 'C#', 'C++ Managed', 'ASP.NET WEB API', 'Winform', 'Angular 1'],
    context: `CLEAR DESTINATION doit exécuter des requêtes sur plusieurs base de données partageant le même schéma de façon efficace et simple pour les programmeurs`,
    responsability: `
    <ul>
    <li> Participer aux rencontres avec le client pour déterminer la solution </li>
    <li> Évaluation des différents technologies; </li>
    <li> Établir l'agenda des réunions techniques </li>
    <li> Designer l'architecture logicielle utilisée </li>
    <li> Diriger l'équipe de développeur dans l'écriture du prototype </li>
  </ul>`,
  deliverables: `
  <ul>
    <li> Service Windows de répartition automatique chargeant les commandes des journées de livraison futures, calculant les matrices de plus courts chemins entre les clients et les affectant à des livreurs disponibles en minisant le kilométrage total parcouru par l'ensemble des livreurs</li>
  </ul>`
 },
 {
    no: 29,
    client: 'OH CLOCK',
    project: 'Infrastructure NoSQL sur le cloud MongoAtlas',
    function: 'Administrateur de base de données NoSQL',
    start: new Date(2015, 1, 1),
    end: new Date(2015, 4, 1),
    duration: 2,
    tags: ['Mongodb', 'Mongodb Atlas', 'Mongodb C# Driver'],
    context: `OH CLOCK veut héberger ses données JSON chez un fournisseur clé-en-main`,
    responsability: `
    <ul>
    <li> Évaluation des différents technologies; </li>
    <li> Designer l'architecture logicielle utilisée </li>
  </ul>`,
  deliverables: `
  <ul>
    <li> Base de données en réplication avec 3 noeuds sur Mongodb Atlas</li>
  </ul>`
 },
 {
    no: 29,
    client: 'OH CLOCK',
    project: 'Construction de l\'infrastructure TI sur le cloud',
    function: 'Programmeur DevOps (Azure)',
    start: new Date(2015, 4, 1),
    end: new Date(2016, 1, 1),
    duration: 9,
    tags: ['Azure Powershell', 'Azure Web App', 'SendGrid', 'Namecheap'],
    context: `OH CLOCK veut héberger ses services web, son application web et ses chronographes sur Azure`,
    responsability: `
    <ul>
    <li> Évaluation des différents technologies; </li>
    <li> Designer l'architecture logicielle utilisée </li>
  </ul>`,
  deliverables: `
  <ul>
    <li> REST API installé avec Azure Web App déployable depuis Visual Studio avec un simple clique</li>
    <li> Web App déployable avec script Azure Powershell et hébergé sur un Azure Web App</li>
    <li> Azure Function contrôlant les jobs de synchronisation du REST API avec les tiers (le REST API de Jira, le service web de Braintree/Paypal)</li>
    <li> Notification des erreurs et des communications clientes avec SendGrid</li>
    <li> Domain et certificat hébergés sur Namecheap avec CNAMES vers Azure</li>
    <li> Communication POP3 entre le serveur mail Namecheap et le REST API sur Azure</li>
  </ul>`
 },
 {
    no: 29,
    client: 'OH CLOCK',
    project: 'Construction d\'une bibliothèque UI Angular 2+',
    function: 'Programmeur front-end',
    start: new Date(2016, 1, 1),
    end: new Date(),
    duration: 6,
    tags: ['Angular 2+', 'Angular CLI', 'Visual Studio Code', 'TFS', 'Jira', 'Git'],
    context: `OH CLOCK ne veut pas dépendre d'un fournisseur de composant UI pour son site`,
    responsability: `
    <ul>
    <li> Évaluation des différents technologies; </li>
    <li> Designer l'architecture logicielle utilisée </li>
  </ul>`,
  deliverables: `
  <ul>
    <li> Composant Calendrier</li>
    <li> Composant Liste déroulante</li>
    <li> Composant Input avec indice et erreurs</li>
    <li> Composant Liste déroulante avec cases à cocher</li>
    <li> Composant Panneau d'expansion avec résumé</li>
    <li> Composant Bouton</li>
    <li> Composant Menu</li>
    <li> Composant Barre de navigation</li>
    <li> Composant Barre d'outil</li>
    <li> Composant Modal/Lightbox</li>
    <li> Composant Autocomplétion</li>
    <li> Composant Grille</li>
  </ul>`
 },
 {
    no: 29,
    client: 'OH CLOCK',
    project: 'Construction d\'un REST API pour logiciel de feuilles de temps',
    function: 'Architecte Intégrateur, Programmeur backend',
    start: new Date(2017, 1, 1),
    end: new Date(),
    duration: 12,
    tags: ['ASP.NET WEB API', 'Mongodb C# Driver', 'Swagger DOC', 'TFS', 'Jira REST API', 'Azure Powershell', 'Azure Web App', 'ASP.NET Identity for Mongodb', 'Braintree', 'Paypal', 'Sendgrid', 'Ical.NET', 'OAUTH2', 'OWIN'],
    context: `OH CLOCK désire découple sont frontend de son backend et veut exposer aux développeurs externes la possibilité d'interragir avec le logiciel de feuilles de temps`,
    responsability: `
    <ul>
    <li> Évaluation des différents technologies; </li>
    <li> Designer l'architecture logicielle utilisée </li>
  </ul>`,
  deliverables: `
  <ul>
    <li> <a target="_blank" href="https://ohclockapi.azurewebsites.net/swagger">REST API</a> avec ASP.NET WEB API avec documentation Swagger générée par réflection</li>
  </ul>`
 },
 {
    no: 29,
    client: 'HATCH',
    project: 'Optimisation de la conception de réseaux électriques éoliens',
    function: 'Analyste programmeur en recherche opérationnelle',
    start: new Date(2011, 5, 1),
    end: new Date(2012, 9, 1),
    duration: 17,
    tags: ['Python', 'C++', 'CPLEX', 'Graphviz', 'LaTeX'],
    context: `HATCH désire offrir à ses ingénieurs un logiciel pour tester et opitmiser leur design de réseaux électriques éoliens`,
    responsability: `
    <ul>
    <li> Participer aux rencontres avec le client pour déterminer la solution </li>
    <li> Évaluation des différents algorithmes dans la littérature; </li>
    <li> participer à la création de prototypes pour valider les preuves de concepts </li>
    <li> Participer à l'agenda des réunions techniques </li>
    <li> Participer à l'architecture logicielle utilisée </li>
    <li> Écrire le code avec les autres contributeurs </li>
  </ul>`,
  deliverables: `
  <ul>
    <li> Algorithme d'optimisation en python appelant des routines C++ résolvant un modèle de programmation linéaire en nombre entier avec le solveur CPLEX; </li>
  </ul>`
 },
 {
    no: 29,
    client: 'CENTRE DE RECHERCHE MATHÉMATIQUE',
    project: 'Optimisation de la libération de médicament enduits sur les stents en cardiologie interventionnelle',
    function: 'Chercheur en mathématiques appliquées',
    start: new Date(2009, 1, 1),
    end: new Date(2011, 4, 1),
    duration: 8,
    tags: ['MATLAB', 'LaTeX'],
    context: `Dr. Michel Delfour du CENTRE DE RECHERCHE MATHÉMATIQUE DE l'Université de Montréal veut montrer comment doser le paclitaxel sur les stents en cardiologie interventionnelle afin de réduire les complications (nécroses) provoquées par les surdosages suivant les opérations posant un stent dans une artère`,
    responsability: `
    <ul>
    <li> Participer aux rencontres avec le chercheru pour déterminer la solution </li>
    <li> Évaluation des différentes approches dans la littérature; </li>
    <li> participer à la création de prototypes pour valider les preuves de concepts </li>
    <li> Participer à l'agenda des réunions techniques </li>
    <li> Écrire le code avec les autres contributeurs </li>
  </ul>`,
  deliverables: `
  <ul>
    <li> Routine MATLAB fittant la cinétique de la libération du paclitaxel dans une artère à partir de données expérimentales en laboratoire; </li>
    <li> Article scientifique proposant une méthodologie pour tenter la détermination de doses basée sur des calculs plutôt que du essai-erreur; </li>
  </ul>`
 },
 {
    no: 29,
    client: 'LASTMAN\'S BAD BOY',
    project: 'Supporter la contrainte de durée dans l\'optimisation de tournées de véhicules',
    function: 'Analyste programmeur en recherche opérationnelle',
    start: new Date(2016, 3, 1),
    end: new Date(2016, 5, 1),
    duration: 2,
    tags: ['C++'],
    context: `LASTMAN\'S BAD BOY a une contrainte sur le temps maximum que ses livreurs peuvent travailler et cette contrainte doit être respectée par l'algorithme d'optimisation des tournées de vehicules qu'ils utilisent.`,
    responsability: `
    <ul>
    <li> Participer aux rencontres avec le client pour déterminer la solution </li>
    <li> Évaluation des différents approches dans la littérature scientifique; </li>
    <li> Établir l'agenda des réunions techniques </li>
    <li> Designer l'algorithme utilisé </li>
    <li> Coder l'algorithme sélectionné </li>
  </ul>`,
  deliverables: `
  <ul>
    <li> Contrainte de durée évaluer à chaque insertion d'un client dans une route en O(1). </li>
  </ul>`
 },
 {
    no: 29,
    client: 'FRED GUY MOVING',
    project: 'Intervention et formation sur l\'utilisation des systèmes TI en places pour l\'optimisation de tournées de véhicules',
    function: 'Analyste en recherche opérationnelle',
    start: new Date(2013, 9, 1),
    end: new Date(2013, 10, 1),
    duration: 1,
    tags: [],
    context: `FRED GUY MOVING demande une consultation sur un logiciel de répartition de véhicules complexe`,
    responsability: `
    <ul>
    <li> Participer aux rencontres avec le client pour déterminer les mécompréhensions et les difficultés </li>
    <li> Évaluation de l'écart entre les besoins du client et les fonctionnalités fournient par le logiciel; </li>
    <li> Détermination d'un plan d'action pour combler l'écart </li>
    <li> Suivi avec le client post-livraison </li>
  </ul>`,
  deliverables: `
  <ul>
    <li> Modification du logiciel pour afficher le trajet tournant par tournant sur la carte permettre au répartiteur de voir les éventuels problèmes de circulation que ses chauffeurs subiront; </li>
    <li> Procédure pour paramétrer le logiciel aux besoins du clients </li>
  </ul>`
 },
 {
    no: 29,
    client: 'VISIONS ELECTRONICS',
    project: 'Personnalisation du système de documentation automatisé SWAGGER pour REST API',
    function: 'Architecte organique',
    start: new Date(2017, 1, 1),
    end: new Date(2018, 3, 1),
    duration: 4,
    tags: ['Swashbuckle', 'Swagger DOC', 'JQuery', 'SQL SERVER'],
    context: `VISIONS ELECTRONICS désire envoyer par HTTPS des commandes à livrer à son transporteur`,
    responsability: `
    <ul>
    <li> Participer aux réunions techniques avec les développeurs de VISIONS pour les guider dans l'intégration </li>
    <li> Assister les développeurs de VISIONS; </li>
  </ul>`,
  deliverables: `
  <ul>
    <li> Personnalisation de la documentation automatique générée pour cacher les "endpoints" (méthodes) inutiles à leur cas d'utilisation, pour inclure des exemples et pour ajouter une façon simple d'obtenir un token d'authentification pour tester les méthodes directement sur la page de documentation; </li>
  </ul>`
 },
 {
    no: 29,
    client: 'CARR\'S DELIVERY SERVICE',
    project: 'Étude sur la détermination des actions d\'un livreur basé sur son repérage GPS',
    function: 'Architecte organique',
    start: new Date(2018, 1, 1),
    end: new Date(2018, 8, 1),
    duration: 3,
    tags: ['SQL SERVER', 'C#'],
    context: `CARR\'S DELIVERY SERVICE désire avoir une estimation des temps de livraison que requiert l'ensemble des catégories d'items qu'il transporte à partir des points GPS recueillis de ses livreurs durant leur travail`,
    responsability: `
    <ul>
    <li> Participer aux rencontres avec le client pour déterminer la solution </li>
    <li> Évaluation des différents algorithmes dans la littérature; </li>
    <li> participer à la création de prototypes pour valider les preuves de concepts </li>
    <li> Participer à l'agenda des réunions techniques </li>
    <li> Participer à l'architecture logicielle utilisée </li>
    <li> Écrire le code avec les autres contributeurs </li>
  </ul>`,
  deliverables: `
  <ul>
    <li> Prototype arrivant à déterminer dans 60% des cas le temps de service moyen d'une catégorie d'items; </li>
  </ul>`
 },
 {
    no: 29,
    client: 'AMJ CAMPBELL',
    project: 'Refactoring des carte géographique d\'un système legacy',
    function: 'Developpeur .NET',
    start: new Date(2013, 5, 1),
    end: new Date(2013, 6, 1),
    duration: 1,
    tags: ['GMAP.NET', 'Google Maps API', 'Winforms', 'Microsoft MapPoint'],
    context: `AMJ CAMPBELL désire que ses cartes géographiques soient mises à jour en temps réel`,
    responsability: `
    <ul>
    <li> Participer aux rencontres avec le client pour déterminer la solution </li>
    <li> Évaluation des différents technologies disponible; </li>
    <li> participer à la création de prototypes pour valider les preuves de concepts </li>
    <li> Participer à l'architecture logicielle utilisée </li>
    <li> Écrire le code </li>
  </ul>`,
  deliverables: `
  <ul>
    <li> Remplacement des cartes MapPoints statiques par des cartes Google; </li>
  </ul>`
 },
 {
    no: 29,
    client: 'GROUPE SGL',
    project: 'Prise en charge du trafic historique pour un système optimisant le VRP (vehicle routing problem)',
    function: 'Analyste programmeur en recherche opérationnelle',
    start: new Date(2013, 6, 1),
    end: new Date(2014, 1, 1),
    duration: 4,
    tags: ['TDVRPTW', 'C++'],
    context: `GROUPE SGL désire tenir compte du trafic historique lors de la confection de ses tournées de véhicules de livraison`,
    responsability: `
    <ul>
    <li> Participer aux rencontres avec le client pour déterminer la solution </li>
    <li> Évaluation des différents technologies disponible; </li>
    <li> Designer les algorithmes en jeux </li>
    <li> Choix du fournisseur et de l'achat des données pertinentes </li>
    <li> Participer à l'architecture logicielle utilisée </li>
    <li> Écrire le code </li>
  </ul>`,
  deliverables: `
  <ul>
    <li> Ajout de l'attribut dépendant du temps à l'algorithme de VRP utilisé par SGL; </li>
    <li> Modification de l'engin de calcul de plus court chemin pour retourner des matrices cubiques donnant les temps de parcours entre chaque client à chaque interval de 15 minutes de la journée; </li>
    <li> Adaptation des outils de tests pour simuler des moments de la semaine ou de la journée lors d'une requête de plus court chemin; </li>
    <li> Coloration selon le degré de trafic historique enregistré des plus courts chemins sur la carte géographique; </li>
    <li> Adaptation des générateurs de fichiers de réseaux routiers binaires pour inclure les patrons de vitesses historiques; </li>
  </ul>`
 },
 {
    no: 29,
    client: 'Énergie 3R',
    project: 'Direction du développement d\'un système d\'aide à la décision pour centre d\'appel pour réservation de rendez-vous',
    function: 'Architecte organique',
    start: new Date(2018, 8, 1),
    end: new Date(2018, 10, 1),
    duration: 0.5,
    tags: ['Jira', 'Subversion (SVN)'],
    context: `Énergie 3R désire utiliser la technologie de réservation avec configuration de sa disponibilité par code postal pour aider ses téléphonistes à proposer des plages horaires peu coûteuses à ses clients`,
    responsability: `
    <ul>
    <li> Cueillette des besoins du clients </li>
    <li> Évaluation de l'écart avec la solution actuelle; </li>
    <li> Proposition d'une solution temporaire </li>
    <li> Plan d'une solution long terme </li>
    <li> Design de la solution temporaire et révision du code </li>
  </ul>`,
  deliverables: `
  <ul>
    <li> Solution intermédiaire où la téléphoniste est en charge d'analyser les statistiques de livraison d'une journée donnée et de valider elle-même selon les règles d'affaires E3R si la journée est disponible ou non; </li>
  </ul>`
 },
];

@Injectable()
export class ExperienceService {
  private accomplishments: Array<Accomplishment>;

  constructor() {
    this.accomplishments = _.orderBy(ACCOMPLISHMENTS, 'start', 'desc');
    let accomplishmentsCount = this.accomplishments.length;
    for (const accomplishment of this.accomplishments) {
      accomplishment.no = accomplishmentsCount;
      accomplishmentsCount--;
    }
  }

  getAccomplishment(): Array<Accomplishment> {
    return this.accomplishments;
  }

  generateExcel() {
    const excellist = new Array<AccomplishmentExcel>();
    for (const a of this.accomplishments) {
      excellist.push(new AccomplishmentExcel(a));
    }

    /* generate worksheet */
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(excellist);
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Réalisations');
    /* save to file */
    XLSX.writeFile(wb, 'Réalisations' + '.xlsx');
  }

  generateWord() {

  }

}
