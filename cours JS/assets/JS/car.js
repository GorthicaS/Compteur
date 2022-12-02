function compte_a_rebours(){
    let date_actuelle = new Date();
    let date_fin = new Date('Dec 2 16:50:00 2022');
    let total_secondes = (date_fin-date_actuelle)/1000;
    let prefixe = 'Le week-end est dans :';
    if(total_secondes < 0){
        prefixe = "Vous devriez déjà être parti depuis";
        total_secondes = Math.abs(total_secondes);
        
        if(total_secondes < date_fin){
            let sonFini = document.createElement("audio");
            sonFini.src = "assets/sound/timer.mp3";
            sonFini.play();
            return false; 
        }
       
    }
    if(total_secondes > 0)
    {
        prefixe = "Le week-end est dans :";
        total_secondes = Math.abs(total_secondes);
        var jours = Math.floor(total_secondes/(60*60*24));
        var heures = Math.floor((total_secondes - (jours*60*60*24))/(60*60))
        var minutes = Math.floor((total_secondes - ((jours*60*6*24 + heures*60*60)))/60)
        var secondes = Math.floor(total_secondes - ((jours*60*60*24 + heures*60*60 + minutes *60)));
        let et = "et";
        let mot_jours = "jours";
        let mot_heures = "heures";
        let mot_minutes = "minutes";
        let mot_secondes = "secondes";
        {
        if(jours == 0) {
                jours = '';
                mot_jours = '';
            }
            else if(jours == 1) {
                mot_jours = "jour,";
            }
            if(heures == 0) {
                heures = '';
                mot_heures = '';
            }
            else if(heures == 1) {
                mot_heures = "heure,";
            } 
        if(minutes == 0) {
                minutes = '';
                mot_minutes = '';
            }
            else if(minutes == 1) {
                mot_minutes = "minute,";
            } 
            if(secondes == 0) {
                secondes = '';
                mot_secondes = '';
                et = '';
            }
        else if(secondes == 1) {
                mot_secondes = "seconde,";
            }
        if(minutes == 0 && heures == 0 && jours == 0) {
                et = '';
            }
            document.getElementById('car').innerHTML = prefixe + jours + ' ' + mot_jours + ' ' + heures + ' '  + mot_heures + ' ' + minutes + ' ' + mot_minutes + ' ' + et + ' ' + secondes + ' ' + mot_secondes;
        }
        let actualisation = setTimeout("compte_a_rebours();",1000);
    } 
}
compte_a_rebours()