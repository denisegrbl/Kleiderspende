import React, { Component } from 'react';

class Spenden extends Component {
    state = {  } 
    render() { 
        return <div id="donate" class="container">
        <h2 class="knallblau fw-semibold ">Spenden</h2>
        <p class="mt-4"/> Sie haben zwei Möglichkeiten, Kleiderspenden zu tätigen:<br /><br />
            <h7 class="knallblau fs-5 " >Bequem von zu Hause aus:</h7> Sie Ihre Kleiderspenden bequem vor Ihrer Haustür abholen.<br />Fomular ausfüllen und Abholung auswählen.<br /><br />
            
            <h7 class="knallblau fs-5">Persönlich zur Geschäftsstelle gehen:</h7>  Bringen Sie Ihre Kleiderspenden zu örtlichen Geschäftsstellen von uns. Dort können Sie Ihre Spenden persönlich abgeben.<br />Formular ausfüllen und Übergabe an der Geschäftsstelle auswählen.<br /><br /> 
            
            Egal für welche Option Sie sich entscheiden, stellen Sie sicher, dass die Kleidung in gutem Zustand ist. Anschließend können Sie vor Ort ein Spendenformular ausfüllen und Ihre Spende übergeben. Ihre Unterstützung wird dabei helfen, Menschen in Not zu helfen und Gutes zu bewirken.
            <p />
        <button type="button" onclick="document.getElementById('Wahl').style.display='block'" style={{width: 'auto'}} id="button-formular" class="button-formular mb-3">Spenden</button>
    </div>  
    }
}
 
export default Spenden;