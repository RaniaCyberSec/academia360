// Expert Qualiopi - JavaScript Principal
// Fonctionnalités interactives et animations

// Calculateur de Devis
class DevisCalculator {
    constructor() {
        this.currentStep = 1;
        this.totalSteps = 4;
        this.formData = {};
        this.basePrices = {
            audit: 1500,
            accompagnement: 3000,
            formation: 450,
            conformite: 2000
        };
        this.init();
    }

    init() {
        this.createCalculatorModal();
        this.bindEvents();
    }

    createCalculatorModal() {
        const modal = document.createElement('div');
        modal.id = 'devis-modal';
        modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 hidden';
        modal.innerHTML = `
            <div class="bg-white rounded-2xl p-8 max-w-2xl w-full mx-4 max-h-screen overflow-y-auto">
                <div class="flex justify-between items-center mb-8">
                    <h3 class="font-playfair text-2xl font-bold">Calculateur de Devis</h3>
                    <button onclick="devisCalculator.close()" class="text-gray-500 hover:text-gray-700">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                
                <div class="mb-8">
                    <div class="flex justify-between items-center mb-4">
                        <span class="text-sm text-gray-600">Étape ${this.currentStep} sur ${this.totalSteps}</span>
                        <span class="text-sm text-orange-energy font-semibold">${Math.round((this.currentStep / this.totalSteps) * 100)}%</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2">
                        <div class="bg-orange-energy h-2 rounded-full transition-all duration-300" style="width: ${(this.currentStep / this.totalSteps) * 100}%"></div>
                    </div>
                </div>
                
                <div id="calculator-content">
                    ${this.getStepContent(this.currentStep)}
                </div>
                
                <div class="flex justify-between mt-8">
                    <button id="prev-btn" class="btn-outline ${this.currentStep === 1 ? 'opacity-50 cursor-not-allowed' : ''}" ${this.currentStep === 1 ? 'disabled' : ''}>
                        Précédent
                    </button>
                    <button id="next-btn" class="btn-primary">
                        ${this.currentStep === this.totalSteps ? 'Calculer le Devis' : 'Suivant'}
                    </button>
                </div>
                
                <div id="devis-result" class="mt-8 p-6 bg-blue-pale rounded-xl hidden">
                    <!-- Résultats du devis -->
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    getStepContent(step) {
        switch(step) {
            case 1:
                return `
                    <div class="step-content">
                        <h4 class="font-bold text-xl mb-6">Quel est votre type d'organisme ?</h4>
                        <div class="grid md:grid-cols-2 gap-4">
                            <label class="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-orange-energy transition-colors">
                                <input type="radio" name="organisme-type" value="association" class="mr-3">
                                <div>
                                    <div class="font-semibold">Association</div>
                                    <div class="text-sm text-gray-600">Loi 1901, à but non lucratif</div>
                                </div>
                            </label>
                            <label class="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-orange-energy transition-colors">
                                <input type="radio" name="organisme-type" value="entreprise" class="mr-3">
                                <div>
                                    <div class="font-semibold">Entreprise</div>
                                    <div class="text-sm text-gray-600">SARL, SAS, EURL, etc.</div>
                                </div>
                            </label>
                            <label class="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-orange-energy transition-colors">
                                <input type="radio" name="organisme-type" value="opco" class="mr-3">
                                <div>
                                    <div class="font-semibold">OPCO</div>
                                    <div class="text-sm text-gray-600">Opérateur de compétences</div>
                                </div>
                            </label>
                            <label class="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-orange-energy transition-colors">
                                <input type="radio" name="organisme-type" value="autre" class="mr-3">
                                <div>
                                    <div class="font-semibold">Autre</div>
                                    <div class="text-sm text-gray-600">Collectivité, école, etc.</div>
                                </div>
                            </label>
                        </div>
                    </div>
                `;
            case 2:
                return `
                    <div class="step-content">
                        <h4 class="font-bold text-xl mb-6">Combien de salariés avez-vous ?</h4>
                        <div class="grid md:grid-cols-3 gap-4">
                            <label class="flex items-center justify-center p-6 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-orange-energy transition-colors">
                                <input type="radio" name="effectif" value="1-5" class="mr-3">
                                <div class="font-semibold">1-5 salariés</div>
                            </label>
                            <label class="flex items-center justify-center p-6 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-orange-energy transition-colors">
                                <input type="radio" name="effectif" value="6-20" class="mr-3">
                                <div class="font-semibold">6-20 salariés</div>
                            </label>
                            <label class="flex items-center justify-center p-6 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-orange-energy transition-colors">
                                <input type="radio" name="effectif" value="21+" class="mr-3">
                                <div class="font-semibold">21+ salariés</div>
                            </label>
                        </div>
                    </div>
                `;
            case 3:
                return `
                    <div class="step-content">
                        <h4 class="font-bold text-xl mb-6">Quel est votre niveau de maturité Qualiopi ?</h4>
                        <div class="space-y-4">
                            <label class="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-orange-energy transition-colors">
                                <input type="radio" name="maturite" value="debutant" class="mr-4">
                                <div>
                                    <div class="font-semibold">Débutant</div>
                                    <div class="text-sm text-gray-600">Pas encore de processus qualité formalisés</div>
                                </div>
                            </label>
                            <label class="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-orange-energy transition-colors">
                                <input type="radio" name="maturite" value="intermediaire" class="mr-4">
                                <div>
                                    <div class="font-semibold">Intermédiaire</div>
                                    <div class="text-sm text-gray-600">Quelques processus en place mais non formalisés</div>
                                </div>
                            </label>
                            <label class="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-orange-energy transition-colors">
                                <input type="radio" name="maturite" value="avance" class="mr-4">
                                <div>
                                    <div class="font-semibold">Avancé</div>
                                    <div class="text-sm text-gray-600">Processus qualité existants, certification ISO ou équivalent</div>
                                </div>
                            </label>
                        </div>
                    </div>
                `;
            case 4:
                return `
                    <div class="step-content">
                        <h4 class="font-bold text-xl mb-6">Quels services souhaitez-vous ?</h4>
                        <div class="space-y-4">
                            <label class="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-orange-energy transition-colors">
                                <input type="checkbox" name="services" value="audit" class="mr-4">
                                <div>
                                    <div class="font-semibold">Audit Qualiopi Complet</div>
                                    <div class="text-sm text-gray-600">Évaluation complète de votre conformité</div>
                                </div>
                            </label>
                            <label class="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-orange-energy transition-colors">
                                <input type="checkbox" name="services" value="accompagnement" class="mr-4">
                                <div>
                                    <div class="font-semibold">Accompagnement Personnalisé</div>
                                    <div class="text-sm text-gray-600">Suivi jusqu'à l'obtention de la certification</div>
                                </div>
                            </label>
                            <label class="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-orange-energy transition-colors">
                                <input type="checkbox" name="services" value="formation" class="mr-4">
                                <div>
                                    <div class="font-semibold">Formation des Équipes</div>
                                    <div class="text-sm text-gray-600">Montée en compétences de vos équipes</div>
                                </div>
                            </label>
                            <label class="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-orange-energy transition-colors">
                                <input type="checkbox" name="services" value="conformite" class="mr-4">
                                <div>
                                    <div class="font-semibold">Mise en Conformité</div>
                                    <div class="text-sm text-gray-600">Documentation et processus qualité</div>
                                </div>
                            </label>
                        </div>
                    </div>
                `;
        }
    }

    calculateDevis() {
        let total = 0;
        const services = this.formData.services || [];
        const multipliers = {
            '1-5': 1,
            '6-20': 1.3,
            '21+': 1.6,
            'debutant': 1.4,
            'intermediaire': 1.2,
            'avance': 1
        };

        // Calcul base
        services.forEach(service => {
            total += this.basePrices[service] || 0;
        });

        // Multiplicateurs
        const effectifMultiplier = multipliers[this.formData.effectif] || 1;
        const maturiteMultiplier = multipliers[this.formData.maturite] || 1;

        total = total * effectifMultiplier * maturiteMultiplier;

        return {
            total: Math.round(total),
            services: services,
            formData: this.formData
        };
    }

    showResult(devis) {
        const resultDiv = document.getElementById('devis-result');
        const servicesList = devis.services.map(service => {
            const serviceNames = {
                audit: 'Audit Qualiopi Complet',
                accompagnement: 'Accompagnement Personnalisé',
                formation: 'Formation des Équipes',
                conformite: 'Mise en Conformité'
            };
            return `<li class="flex justify-between py-2 border-b">
                <span>${serviceNames[service]}</span>
                <span>${this.basePrices[service]}€ HT</span>
            </li>`;
        }).join('');

        resultDiv.innerHTML = `
            <h4 class="font-bold text-xl mb-4">Estimation de votre devis</h4>
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <h5 class="font-semibold mb-4">Services sélectionnés :</h5>
                <ul class="mb-6">
                    ${servicesList}
                </ul>
                <div class="border-t pt-4">
                    <div class="flex justify-between items-center text-xl font-bold">
                        <span>Total estimé :</span>
                        <span class="text-orange-energy">${devis.total}€ HT</span>
                    </div>
                    <p class="text-sm text-gray-600 mt-2">*Estimation indicative, sous réserve d'étude approfondie</p>
                </div>
                <div class="mt-6">
                    <button class="btn-primary w-full mb-3" onclick="devisCalculator.requestDetailedDevis()">
                        Demander un Devis Détaillé
                    </button>
                    <button class="btn-outline w-full" onclick="devisCalculator.close()">
                        Fermer
                    </button>
                </div>
            </div>
        `;
        resultDiv.classList.remove('hidden');
    }

    requestDetailedDevis() {
        // Sauvegarder les données et rediriger vers la page de contact
        localStorage.setItem('devis-data', JSON.stringify(this.formData));
        window.location.href = 'contact.html?devis=true';
    }

    bindEvents() {
        document.addEventListener('click', (e) => {
            if (e.target.id === 'next-btn') {
                this.nextStep();
            } else if (e.target.id === 'prev-btn') {
                this.prevStep();
            }
        });

        // Radio button and checkbox styling
        document.addEventListener('change', (e) => {
            if (e.target.type === 'radio' || e.target.type === 'checkbox') {
                // Remove active class from siblings
                const name = e.target.name;
                const siblings = document.querySelectorAll(`[name="${name}"]`);
                siblings.forEach(sibling => {
                    const label = sibling.closest('label');
                    if (label) {
                        label.classList.remove('border-orange-energy', 'bg-orange-pale');
                    }
                });
                
                // Add active class to selected
                const label = e.target.closest('label');
                if (label && e.target.checked) {
                    label.classList.add('border-orange-energy', 'bg-orange-pale');
                }
            }
        });
    }

    nextStep() {
        // Collect current step data
        const currentStepElement = document.querySelector('.step-content');
        const inputs = currentStepElement.querySelectorAll('input');
        
        inputs.forEach(input => {
            if (input.type === 'radio' && input.checked) {
                this.formData[input.name] = input.value;
            } else if (input.type === 'checkbox' && input.checked) {
                if (!this.formData[input.name]) {
                    this.formData[input.name] = [];
                }
                this.formData[input.name].push(input.value);
            }
        });

        if (this.currentStep < this.totalSteps) {
            this.currentStep++;
            this.updateModal();
        } else {
            // Calculate and show result
            const devis = this.calculateDevis();
            this.showResult(devis);
        }
    }

    prevStep() {
        if (this.currentStep > 1) {
            this.currentStep--;
            this.updateModal();
        }
    }

    updateModal() {
        const content = document.getElementById('calculator-content');
        const progressBar = document.querySelector('.bg-orange-energy');
        const stepText = document.querySelector('.text-sm.text-gray-600');
        const percentageText = document.querySelector('.text-orange-energy.font-semibold');
        const nextBtn = document.getElementById('next-btn');
        const prevBtn = document.getElementById('prev-btn');

        content.innerHTML = this.getStepContent(this.currentStep);
        progressBar.style.width = `${(this.currentStep / this.totalSteps) * 100}%`;
        stepText.textContent = `Étape ${this.currentStep} sur ${this.totalSteps}`;
        percentageText.textContent = `${Math.round((this.currentStep / this.totalSteps) * 100)}%`;
        nextBtn.textContent = this.currentStep === this.totalSteps ? 'Calculer le Devis' : 'Suivant';
        
        prevBtn.disabled = this.currentStep === 1;
        prevBtn.className = this.currentStep === 1 ? 'btn-outline opacity-50 cursor-not-allowed' : 'btn-outline';
    }

    open() {
        document.getElementById('devis-modal').classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    close() {
        document.getElementById('devis-modal').classList.add('hidden');
        document.body.style.overflow = 'auto';
        this.reset();
    }

    reset() {
        this.currentStep = 1;
        this.formData = {};
        this.updateModal();
        document.getElementById('devis-result').classList.add('hidden');
    }
}

// Checklist Qualiopi Interactive
class QualiopiChecklist {
    constructor() {
        this.criteria = this.generateCriteria();
        this.answers = {};
        this.init();
    }

    generateCriteria() {
        return [
            // Critère 1 - Information et communication
            { id: 'c1_1', category: 'Information', text: 'Les informations sur les prestations sont claires, complètes et accessibles' },
            { id: 'c1_2', category: 'Information', text: 'Les modalités de réservation et d\'inscription sont transparentes' },
            { id: 'c1_3', category: 'Information', text: 'Les conditions financières sont clairement exposées' },
            { id: 'c1_4', category: 'Information', text: 'Les informations sont régulièrement mises à jour' },
            
            // Critère 2 - Objectif et adaptation
            { id: 'c2_1', category: 'Adaptation', text: 'Les prestations sont adaptées aux besoins des apprenants' },
            { id: 'c2_2', category: 'Adaptation', text: 'Un positionnement initial est réalisé' },
            { id: 'c2_3', category: 'Adaptation', text: 'Les objectifs pédagogiques sont clairement définis' },
            { id: 'c2_4', category: 'Adaptation', text: 'Les contenus sont cohérents avec les objectifs' },
            
            // Critère 3 - Pilotage et amélioration
            { id: 'c3_1', category: 'Pilotage', text: 'Un système de management de la qualité est en place' },
            { id: 'c3_2', category: 'Pilotage', text: 'Les processus sont documentés et suivis' },
            { id: 'c3_3', category: 'Pilotage', text: 'Une démarche d\'amélioration continue est mise en œuvre' },
            { id: 'c3_4', category: 'Pilotage', text: 'Les indicateurs de performance sont suivis' },
            
            // Critère 4 - Ressources humaines
            { id: 'c4_1', category: 'Ressources', text: 'Les compétences des formateurs sont maîtrisées' },
            { id: 'c4_2', category: 'Ressources', text: 'Un système de veille des compétences est en place' },
            { id: 'c4_3', category: 'Ressources', text: 'Les formateurs bénéficient d\'actions de formation' },
            { id: 'c4_4', category: 'Ressources', text: 'L\'équipe pédagogique est stabilisée' },
            
            // Critère 5 - Accompagnement pédagogique
            { id: 'c5_1', category: 'Pédagogie', text: 'Les modalités pédagogiques sont adaptées' },
            { id: 'c5_2', category: 'Pédagogie', text: 'Un accompagnement personnalisé est proposé' },
            { id: 'c5_3', category: 'Pédagogie', text: 'Les évaluations sont régulières et constructives' },
            { id: 'c5_4', category: 'Pédagogie', text: 'Les résultats sont communiqués aux apprenants' },
            
            // Critère 6 - Evaluation des résultats
            { id: 'c6_1', category: 'Evaluation', text: 'Les résultats des apprenants sont suivis' },
            { id: 'c6_2', category: 'Evaluation', text: 'La satisfaction des apprenants est mesurée' },
            { id: 'c6_3', category: 'Evaluation', text: 'Les résultats sont analysés et exploités' },
            { id: 'c6_4', category: 'Evaluation', text: 'Les actions d\'amélioration sont mises en œuvre' },
            
            // Critère 7 - Protection des données
            { id: 'c7_1', category: 'Protection', text: 'Les données personnelles sont protégées' },
            { id: 'c7_2', category: 'Protection', text: 'Les droits des apprenants sont respectés' },
            { id: 'c7_3', category: 'Protection', text: 'La sécurité des données est assurée' },
            { id: 'c7_4', category: 'Protection', text: 'Les durées de conservation sont respectées' }
        ];
    }

    init() {
        this.createChecklistModal();
        this.bindEvents();
    }

    createChecklistModal() {
        const modal = document.createElement('div');
        modal.id = 'checklist-modal';
        modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 hidden';
        modal.innerHTML = `
            <div class="bg-white rounded-2xl p-8 max-w-4xl w-full mx-4 max-h-screen overflow-y-auto">
                <div class="flex justify-between items-center mb-8">
                    <h3 class="font-playfair text-2xl font-bold">Checklist Qualiopi Interactive</h3>
                    <button onclick="qualiopiChecklist.close()" class="text-gray-500 hover:text-gray-700">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                
                <div class="mb-6">
                    <div class="flex justify-between items-center mb-4">
                        <span class="text-lg font-semibold">Score de conformité :</span>
                        <div class="flex items-center">
                            <div id="score-circle" class="w-16 h-16 rounded-full border-8 border-gray-200 flex items-center justify-center mr-4">
                                <span id="score-text" class="font-bold text-xl">0%</span>
                            </div>
                            <div id="score-message" class="text-sm text-gray-600">Commencez l'évaluation</div>
                        </div>
                    </div>
                </div>
                
                <div id="checklist-content" class="space-y-6">
                    ${this.renderCriteria()}
                </div>
                
                <div class="mt-8 flex justify-between">
                    <button onclick="qualiopiChecklist.reset()" class="btn-outline">
                        Réinitialiser
                    </button>
                    <div class="space-x-4">
                        <button onclick="qualiopiChecklist.exportPDF()" class="btn-primary">
                            Exporter en PDF
                        </button>
                        <button onclick="qualiopiChecklist.close()" class="btn-secondary">
                            Fermer
                        </button>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    renderCriteria() {
        const categories = [...new Set(this.criteria.map(c => c.category))];
        
        return categories.map(category => {
            const categoryCriteria = this.criteria.filter(c => c.category === category);
            return `
                <div class="category-section">
                    <h4 class="font-bold text-lg mb-4 text-navy-blue">${category}</h4>
                    <div class="space-y-3">
                        ${categoryCriteria.map(criterion => `
                            <label class="flex items-start p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                                <input type="checkbox" data-criterion="${criterion.id}" class="mt-1 mr-3 w-5 h-5 text-orange-energy">
                                <div class="flex-1">
                                    <span class="text-sm">${criterion.text}</span>
                                </div>
                            </label>
                        `).join('')}
                    </div>
                </div>
            `;
        }).join('');
    }

    updateScore() {
        const checkedCount = Object.keys(this.answers).filter(key => this.answers[key]).length;
        const totalCount = this.criteria.length;
        const percentage = Math.round((checkedCount / totalCount) * 100);

        // Update score display
        const scoreText = document.getElementById('score-text');
        const scoreCircle = document.getElementById('score-circle');
        const scoreMessage = document.getElementById('score-message');

        scoreText.textContent = `${percentage}%`;
        
        // Update circle color based on score
        let color = '#e53e3e'; // Red
        let message = 'Des améliorations sont nécessaires';
        
        if (percentage >= 80) {
            color = '#38a169'; // Green
            message = 'Excellent niveau de conformité';
        } else if (percentage >= 60) {
            color = '#d69e2e'; // Yellow
            message = 'Bon niveau avec quelques axes d\'amélioration';
        } else if (percentage >= 40) {
            color = '#ed8936'; // Orange
            message = 'Conformité partielle, actions recommandées';
        }

        scoreCircle.style.borderColor = `${color} transparent transparent transparent`;
        scoreMessage.textContent = message;

        // Animate score update
        anime({
            targets: scoreCircle,
            scale: [1.2, 1],
            duration: 300,
            easing: 'easeOutQuad'
        });
    }

    bindEvents() {
        document.addEventListener('change', (e) => {
            if (e.target.type === 'checkbox' && e.target.dataset.criterion) {
                this.answers[e.target.dataset.criterion] = e.target.checked;
                this.updateScore();
            }
        });
    }

    open() {
        document.getElementById('checklist-modal').classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    close() {
        document.getElementById('checklist-modal').classList.add('hidden');
        document.body.style.overflow = 'auto';
    }

    reset() {
        this.answers = {};
        const checkboxes = document.querySelectorAll('#checklist-modal input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
        this.updateScore();
    }

    exportPDF() {
        // Simulation d'export PDF
        alert('Fonctionnalité d\'export PDF en cours de développement. Vos réponses ont été sauvegardées.');
        localStorage.setItem('checklist-answers', JSON.stringify(this.answers));
    }
}

// Gestion des formulaires de contact
class ContactManager {
    constructor() {
        this.init();
    }

    init() {
        this.bindFormEvents();
        this.loadDevisData();
    }

    bindFormEvents() {
        // Validation en temps réel
        document.addEventListener('input', (e) => {
            if (e.target.matches('input[type="email"]')) {
                this.validateEmail(e.target);
            }
            if (e.target.matches('input[type="tel"]')) {
                this.validatePhone(e.target);
            }
        });

        // Soumission des formulaires
        document.addEventListener('submit', (e) => {
            if (e.target.matches('.contact-form')) {
                e.preventDefault();
                this.submitContactForm(e.target);
            }
            if (e.target.matches('.devis-form')) {
                e.preventDefault();
                this.submitDevisForm(e.target);
            }
        });
    }

    validateEmail(input) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(input.value);
        this.showFieldValidation(input, isValid, 'Email invalide');
    }

    validatePhone(input) {
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        const isValid = phoneRegex.test(input.value.replace(/\s/g, ''));
        this.showFieldValidation(input, isValid, 'Numéro de téléphone invalide');
    }

    showFieldValidation(input, isValid, message) {
        const errorElement = input.parentNode.querySelector('.error-message');
        
        if (!isValid && input.value) {
            input.classList.add('border-red-500');
            if (!errorElement) {
                const error = document.createElement('div');
                error.className = 'error-message text-red-500 text-sm mt-1';
                error.textContent = message;
                input.parentNode.appendChild(error);
            }
        } else {
            input.classList.remove('border-red-500');
            if (errorElement) {
                errorElement.remove();
            }
        }
    }

    submitContactForm(form) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Simulation d'envoi
        this.showSubmitFeedback(form, 'Envoi en cours...');
        
        setTimeout(() => {
            this.showSubmitFeedback(form, 'Message envoyé avec succès ! Nous vous répondrons sous 24h.', 'success');
            form.reset();
        }, 1500);
    }

    submitDevisForm(form) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Simulation d'envoi
        this.showSubmitFeedback(form, 'Calcul du devis en cours...');
        
        setTimeout(() => {
            this.showSubmitFeedback(form, 'Devis envoyé ! Vous recevrez une réponse détaillée sous 48h.', 'success');
            form.reset();
        }, 2000);
    }

    showSubmitFeedback(form, message, type = 'info') {
        let feedbackElement = form.querySelector('.submit-feedback');
        
        if (!feedbackElement) {
            feedbackElement = document.createElement('div');
            feedbackElement.className = 'submit-feedback mt-4 p-3 rounded-lg text-center';
            form.appendChild(feedbackElement);
        }

        const colors = {
            info: 'bg-blue-100 text-blue-800',
            success: 'bg-green-100 text-green-800',
            error: 'bg-red-100 text-red-800'
        };

        feedbackElement.className = `submit-feedback mt-4 p-3 rounded-lg text-center ${colors[type]}`;
        feedbackElement.textContent = message;

        // Auto-remove after 5 seconds for success messages
        if (type === 'success') {
            setTimeout(() => {
                feedbackElement.remove();
            }, 5000);
        }
    }

    loadDevisData() {
        const devisData = localStorage.getItem('devis-data');
        if (devisData) {
            const data = JSON.parse(devisData);
            // Pré-remplir le formulaire avec les données du calculateur
            this.prefillDevisForm(data);
            localStorage.removeItem('devis-data');
        }
    }

    prefillDevisForm(data) {
        // Pré-remplir les champs du formulaire de devis si disponible
        const organismeType = document.querySelector(`input[name="organisme-type"][value="${data['organisme-type']}"]`);
        if (organismeType) organismeType.checked = true;
        
        const effectif = document.querySelector(`input[name="effectif"][value="${data.effectif}"]`);
        if (effectif) effectif.checked = true;
        
        const maturite = document.querySelector(`input[name="maturite"][value="${data.maturite}"]`);
        if (maturite) maturite.checked = true;
    }
}

// Gestionnaire de témoignages
class TestimonialManager {
    constructor() {
        this.currentIndex = 0;
        this.testimonials = document.querySelectorAll('.testimonial-card');
        this.init();
    }

    init() {
        if (this.testimonials.length > 0) {
            this.startCarousel();
            this.bindHoverEvents();
        }
    }

    startCarousel() {
        setInterval(() => {
            this.nextTestimonial();
        }, 5000);
    }

    nextTestimonial() {
        this.testimonials.forEach((testimonial, index) => {
            if (index === this.currentIndex) {
                testimonial.style.opacity = '1';
                testimonial.style.transform = 'translateX(0)';
            } else {
                testimonial.style.opacity = '0.7';
                testimonial.style.transform = 'translateX(-10px)';
            }
        });
        
        this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
    }

    bindHoverEvents() {
        this.testimonials.forEach(testimonial => {
            testimonial.addEventListener('mouseenter', () => {
                // Pause carousel on hover
                testimonial.style.transform = 'scale(1.05)';
            });
            
            testimonial.addEventListener('mouseleave', () => {
                testimonial.style.transform = 'scale(1)';
            });
        });
    }
}

// Animation au scroll
class ScrollAnimations {
    constructor() {
        this.init();
    }

    init() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateElement(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observer les éléments à animer
        const elementsToAnimate = document.querySelectorAll('.service-card, .timeline-item, .counter-item');
        elementsToAnimate.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            observer.observe(el);
        });
    }

    animateElement(element) {
        anime({
            targets: element,
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 800,
            easing: 'easeOutExpo',
            delay: Math.random() * 200
        });
    }
}

// Initialisation globale
document.addEventListener('DOMContentLoaded', function() {
    // Initialiser les gestionnaires
    window.devisCalculator = new DevisCalculator();
    window.qualiopiChecklist = new QualiopiChecklist();
    window.contactManager = new ContactManager();
    window.testimonialManager = new TestimonialManager();
    window.scrollAnimations = new ScrollAnimations();

    // Fonctions globales utilitaires
    window.openDevisCalculator = () => devisCalculator.open();
    window.openQualiopiChecklist = () => qualiopiChecklist.open();
    window.showNotification = (message, type = 'info') => {
        const notification = document.createElement('div');
        notification.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 ${
            type === 'success' ? 'bg-green-500 text-white' :
            type === 'error' ? 'bg-red-500 text-white' :
            'bg-blue-500 text-white'
        }`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    };

    // Smooth scrolling pour les ancres
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navigation mobile
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Gestion du scroll de la navigation
    let lastScrollTop = 0;
    const nav = document.querySelector('nav');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scroll down
            nav.style.transform = 'translateY(-100%)';
        } else {
            // Scroll up
            nav.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });

    // Lazy loading des images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
});

// Export pour utilisation globale
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        DevisCalculator,
        QualiopiChecklist,
        ContactManager,
        TestimonialManager,
        ScrollAnimations
    };
}


// =====================================================
// MODULE DES ÉTUDES DE CAS (intégré à l'initialisation existante)
// =====================================================

const CaseStudiesManager = {
    data: {
        'cas-medical': {
            title: 'Centre de Formation Médicale - Paris',
            content: `
                <div class="space-y-4">
                    <div class="bg-blue-50 p-4 rounded-lg mb-4">
                        <span class="text-sm text-blue-800 font-semibold">Client : Centre médical • 45 salariés • Paris</span>
                    </div>
                    <h4 class="font-bold text-lg text-navy-blue">Contexte</h4>
                    <p class="text-gray-700">Organisme de formation en soins infirmiers avec 45 salariés et 200 stagiaires/an. Urgence absolue pour obtenir Qualiopi pour continuer à dispenser des formations financées OPCO.</p>
                    
                    <h4 class="font-bold text-lg text-navy-blue mt-4">Défis rencontrés</h4>
                    <ul class="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Processus qualité inexistants</li>
                        <li>Documentation papier désorganisée</li>
                        <li>Audit dans 3 semaines</li>
                        <li>Équipe peu formée aux exigences Qualiopi</li>
                    </ul>
                    
                    <h4 class="font-bold text-lg text-navy-blue mt-4">Solution apportée</h4>
                    <p class="text-gray-700">Intervention en "commando" sur 3 semaines : structuration des processus, création du référentiel qualité, formation express de l'équipe et simulation d'audit.</p>
                    
                    <h4 class="font-bold text-lg text-navy-blue mt-4">Résultats</h4>
                    <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                        <ul class="space-y-2 text-gray-800">
                            <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Certification obtenue du premier coup</li>
                            <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> 0 non-conformité majeure</li>
                            <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> 2 remarques mineures uniquement</li>
                            <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Gain de temps estimé : 6 mois</li>
                        </ul>
                    </div>
                    
                    <blockquote class="italic border-l-4 border-orange-energy pl-4 text-gray-600 mt-4 bg-orange-50 p-4 rounded">
                        "Rania a été disponible 24/7 pendant cette période critique. Sa connaissance parfaite des attentes de l'auditeur a fait toute la différence."
                        <footer class="text-sm font-bold mt-2 not-italic">— Marie L., Directrice</footer>
                    </blockquote>
                </div>
            `
        },
        'cas-digital': {
            title: 'Organisme de Formation Digital - Lyon',
            content: `
                <div class="space-y-4">
                    <div class="bg-purple-50 p-4 rounded-lg mb-4">
                        <span class="text-sm text-purple-800 font-semibold">Client : EdTech • 12 formateurs • Lyon</span>
                    </div>
                    <h4 class="font-bold text-lg text-navy-blue">Transformation digitale & Qualité</h4>
                    <p class="text-gray-700">Start-up EdTech lyonnaise spécialisée dans la formation en ligne. 12 formateurs indépendants, 500 apprenants/an.</p>
                    
                    <h4 class="font-bold text-lg text-navy-blue mt-4">Problématique</h4>
                    <p class="text-gray-700">Organisation "artisanale" incompatible avec les exigences Qualiopi. Besoin de structurer l'ingénierie pédagogique tout en conservant l'agilité.</p>
                    
                    <h4 class="font-bold text-lg text-navy-blue mt-4">Méthodologie</h4>
                    <ul class="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Audit initial et mapping des processus existants</li>
                        <li>Création de templates pédagogiques normalisés</li>
                        <li>Mise en place d'un LMS traçable</li>
                        <li>Formation des formateurs aux nouveaux outils</li>
                    </ul>
                    
                    <div class="bg-blue-50 p-4 rounded-lg mt-4">
                        <h5 class="font-bold mb-2 text-navy-blue">KPIs post-accompagnement :</h5>
                        <div class="grid grid-cols-2 gap-4 text-center">
                            <div class="bg-white p-3 rounded shadow">
                                <div class="text-2xl font-bold text-blue-600">+40%</div>
                                <div class="text-sm text-gray-600">Productivité</div>
                            </div>
                            <div class="bg-white p-3 rounded shadow">
                                <div class="text-2xl font-bold text-blue-600">95%</div>
                                <div class="text-sm text-gray-600">Satisfaction</div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        'cas-cci': {
            title: 'Chambre de Commerce - Renouvellement',
            content: `
                <div class="space-y-4">
                    <div class="bg-gray-100 p-4 rounded-lg mb-4">
                        <span class="text-sm text-gray-800 font-semibold">Client : CCI • 120 stagiaires/an • Rhône-Alpes</span>
                    </div>
                    <h4 class="font-bold text-lg text-navy-blue">Maintien de la certification</h4>
                    <p class="text-gray-700">Renouvellement Qualiopi après 4 ans d'obtention initiale. 120 stagiaires/an sur des formations courtes.</p>
                    
                    <h4 class="font-bold text-lg text-navy-blue mt-4">Spécificités</h4>
                    <p class="text-gray-700">Organisme public avec contraintes administratives spécifiques. Nécessité de mettre à jour les processus sans perturber le service.</p>
                    
                    <h4 class="font-bold text-lg text-navy-blue mt-4">Actions réalisées</h4>
                    <ul class="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Audit de conformité et gap analysis</li>
                        <li>Mise à jour des référentiels (passage V2 Qualiopi)</li>
                        <li>Préparation à l'audit de surveillance</li>
                        <li>Formation des nouveaux référents qualité</li>
                    </ul>
                    
                    <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500 mt-4">
                        <p class="font-semibold text-gray-800">Résultat : Renouvellement accordé pour 4 ans supplémentaires sans difficulté majeure.</p>
                    </div>
                </div>
            `
        }
    },

    open(caseId) {
        const modal = document.getElementById('modal-etude');
        const content = document.getElementById('modal-content');
        const title = document.getElementById('modal-title');
        
        const caseData = this.data[caseId];
        if (!caseData || !modal) return;
        
        title.textContent = caseData.title;
        content.innerHTML = caseData.content;
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        
        // Gestionnaire d'échappement unique
        this._handleEscape = (e) => {
            if (e.key === 'Escape') this.close();
        };
        document.addEventListener('keydown', this._handleEscape);
    },

    close() {
        const modal = document.getElementById('modal-etude');
        if (!modal) return;
        
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
        
        if (this._handleEscape) {
            document.removeEventListener('keydown', this._handleEscape);
            this._handleEscape = null;
        }
    }
};

// =====================================================
// MODULE DE TÉLÉCHARGEMENT (Analytics)
// =====================================================

const DownloadTracker = {
    track(documentName) {
        // Google Analytics 4
        if (typeof gtag !== 'undefined') {
            gtag('event', 'download', {
                event_category: 'documentation',
                event_label: documentName,
                value: 1
            });
        }
        
        // Notification (utilise la fonction globale existante)
        if (typeof showNotification === 'function') {
            showNotification(`Téléchargement démarré : ${documentName}`, 'info');
        }
    }
};

// =====================================================
// INITIALISATION CONDITIONNELLE (sécurisée)
// =====================================================

document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Gestion formulaire brochure (uniquement si présent)
    const brochureForm = document.getElementById('brochure-form');
    if (brochureForm) {
        brochureForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Anti-spam Honeypot
            const honeypot = this.querySelector('input[name="website"]');
            if (honeypot && honeypot.value !== '') {
                console.warn('Spam détecté');
                return false;
            }
            
            // Simulation d'envoi (remplacer par fetch() vers votre backend)
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<span class="animate-spin inline-block mr-2">↻</span> Envoi...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                showNotification('Brochure envoyée sur votre email ! Vérifiez vos spams.', 'success');
                this.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }
    
    // 2. Gestion fermeture modal par clic extérieur
    const modal = document.getElementById('modal-etude');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                CaseStudiesManager.close();
            }
        });
    }
    
    // 3. Boutons "Lire l'étude complète" (délégation d'événement)
    document.body.addEventListener('click', function(e) {
        if (e.target.matches('button[onclick^="openModal"]')) {
            e.preventDefault();
            const caseId = e.target.getAttribute('onclick').match(/'([^']+)'/)[1];
            CaseStudiesManager.open(caseId);
        }
    });
});

// =====================================================
// FONCTIONS GLOBALES (pour les onclick inline dans HTML)
// =====================================================

// Ces fonctions sont nécessaires car vos boutons HTML utilisent onclick="openModal('...')"
// Si vous modifiez vos HTML pour utiliser data-case-id, vous pouvez supprimer ces globals

window.openModal = (caseId) => CaseStudiesManager.open(caseId);
window.closeModal = () => CaseStudiesManager.close();
window.trackDownload = (docName) => DownloadTracker.track(docName);