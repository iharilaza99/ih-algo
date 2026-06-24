function controle() {
    var id = document.getElementById("id").value; var code = document.getElementById("code").value; var societes ='LEG Andilamena'; var date = "27/06/2025"; var text = "";
    if(isNaN(id) || isNaN(code) || !isCode(id, code)) {  alert("Vérifier les valeurs que vous entrez ?"); document.getElementById("content").innerHTML = sections[recu]; }
    else {
      number = afficheCode(getCode(code,id));
      if(getExiste(number)){ text = `<div class="container"><h3>INFORMATION DE VOTRE RECU</h3> <p>Entreprise `+societes+`</p> <p>Digital ID `+code+`</p> <p>Numéro `+number+`</p> <p>Date de fabrica[...]
      else { text = " VOTRE RECU EST INNCONNU !"; } 
      document.getElementById('content').innerHTML = text; 
    } 
}
function myKey(key) { const key1 = Math.floor(key / 100000000); const key2 = Math.floor((key - key1 * 100000000) / 10000); const key3 = Math.floor((key - key1 * 100000000) - key2 * 10000); return [...]
function getExiste(number){ const val = Math.floor(number); const val1 = number - val; if(val1 == 0) { return true; } else { return false; } }
function getChiffre(code, key) { const k = myKey(key); const n0 = k['1'] - code * 5; const n1 = code * 4 + k['2']; const n2 = code * 3 + k['3']; return `${n2}${n1}${n0}`; }
function afficheCode(nombre) { return String(nombre).padStart(4, '0'); }
function getCode(id, key) { const k = myKey(key); let code = Math.floor(id / 10000) * 10000; code = (k['1'] - (id - code)) / 5; return code; }
function isCode(a,b){var is=0; if(a>99999999999 && b>99999999999 && a<1000000000000000 && b<1000000000000000){ is=1;} return is;}
