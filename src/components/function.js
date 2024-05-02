

//Exportation de la fonction pour test unitaire

export const initializeTimes = () => {
    return [
         "17:00",
         "18:00",
         "19:00",
         "20:00",
         "21:00",
         "22:00"
    ];
   };


   export const updateTimes = (state, action) => {
     // Dans cette fonction, vous pouvez mettre à jour les horaires disponibles en fonction de la date sélectionnée.
     // Pour l'instant, nous allons renvoyer les mêmes heures disponibles quelle que soit la date.
     return initializeTimes();
   };
   
   
