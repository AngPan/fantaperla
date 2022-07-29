export class Install {
    /**
     * @param {DOMElement} trigger - Triggering element
     */
    constructor(trigger) {
        this._prompt;
        this._trigger = trigger;
    }

    /**
     * Toggle visibility of install button
     * @param {string} action
     */
    toggleInstallButton(action = 'hide') {
        if (action === 'hide') {
            this._trigger.style.display = 'none';
        } else {
            this._trigger.style.display = 'block';
        }
    }
}

let defferedPrompt;
const addbtn = document.querySelector('.btn');

window.addEventListener('beforeinstallprompt', event => {
    event.preventDefault();
    defferedPrompt = event
    addbtn.style.display = 'block';
});

addbtn.addEventListener('click', event => {
    defferedPrompt.prompt();

    defferedPrompt.userChoice.then(choice => {
        if (choice.outcome === 'accepted') {
            console.log('user accepted the prompt')
        }
        defferedPrompt = null;
    })
})