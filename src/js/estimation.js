
document.addEventListener("DOMContentLoaded", () => {
   console.log("DOM chargé avec succès pour estimation.js");

    const submitBtn = document.getElementById('submitBtn');
    const divAffichage = document.getElementById('affichage');

    submitBtn.addEventListener('click', () => {
        divAffichage.innerHTML = `
        <div role="alert" class="alert alert-success mt-2">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  <span>Vos informations ont bien été transmises, vous recevrez votre estimation incessamment sous peu !</span>
</div>`;
    });

});

