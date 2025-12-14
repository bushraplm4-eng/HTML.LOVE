// Get necessary DOM elements
const chatWindow = document.getElementById('chat-window');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-btn');

const USER_NAME = "Shami mere jaan ,kaisa ho ap"; // Constant for the user
const PARTNER_NAME = "Bushra"; // Constant for the partner's name

// --- 50 Highly Supportive and Affirmative Messages ---
const AffirmationResponses = [
    // General Positive Affirmations (1-10)
    `Remember, Shami, your efforts are making a real difference. Keep going!`,
    `You are incredibly capable and strong, Shami. I truly believe in you.`,
    `Whatever you're tackling today, I know you have the strength to handle it, Shami.`,
    `Shami, take a deep breath. You are doing an amazing job.`,
    `Just seeing your name, Shami, makes things feel brighter.`,
    `It's perfectly okay to rest, Shami. Remember to take care of yourself.`,
    `You bring so much positive energy into everything you do, Shami.`,
    `Your perspective is valuable, Shami. Don't forget that.`,
    `Sending you the best thoughts and positive vibes, Shami.`,
    `Always remember you are appreciated, Shami. More than you know.`,

    // Care and Encouragement (11-20)
    `Make sure you hydrate and eat well, Shami. Your well-being is important.`,
    `If something is stressing you, Shami, know that I’m here to provide support.`,
    `I hope your day is filled with little moments that make you smile, Shami.`,
    `You deserve all the good things that come your way, Shami.`,
    `Remember to celebrate the small victories, Shami. They all count.`,
    `Thinking of you and hoping everything goes smoothly today, Shami.`,
    `You have a wonderful heart, Shami. Keep sharing your kindness.`,
    `Don't let any small setbacks discourage you, Shami. You got this.`,
    `Whatever challenge you face, Shami, remember your past successes.`,
    `You are unique and irreplaceable, Shami. Never forget your worth.`,

    // Emotional/Supportive (21-30)
    `If you feel overwhelmed, Shami, just focus on the next small step.`,
    `It's alright to have difficult moments, Shami. Be gentle with yourself.`,
    `Your resilience is inspiring, Shami. Keep bouncing back.`,
    `I appreciate the effort you put into everything, Shami.`,
    `Remember that feeling connected is important, Shami. Reach out if you need to.`,
    `I'm sending you virtual support and strength, Shami.`,
    `You are a source of great comfort and happiness, Shami.`,
    `Thank you for being you, Shami. Your presence matters.`,
    `Your honesty and openness are wonderful qualities, Shami.`,
    `Hope your day is peaceful and productive, Shami.`,

    // Specific Action Encouragement (31-40)
    `Good luck with that task, Shami! Visualize success.`,
    `Did you get some good rest last night, Shami? It's crucial!`,
    `Time for a break, maybe? You've earned it, Shami.`,
    `If you’re struggling to decide, trust your gut instinct, Shami.`,
    `Your creativity is boundless, Shami. Let it flow.`,
    `I'm cheering you on from here, Shami! You are doing brilliantly.`,
    `Keep your focus sharp, Shami. You are close to your goal.`,
    `Don't worry about things you can't control, Shami. Focus on the now.`,
    `I hope you are taking a moment for yourself, Shami. You deserve relaxation.`,
    `Your smile is wonderful, Shami! Keep shining.`,

    // Deeper Affirmations (41-50+)
    `The future is exciting because you are in it, Shami.`,
    `I admire your dedication and commitment, Shami.`,
    `Your ability to overcome obstacles is truly remarkable, Shami.`,
    `Never apologize for being authentically yourself, Shami.`,
    `You are worthy of all the good things, Shami, without exception.`,
    `Hope your evening is calm and restorative, Shami.`,
    `Remember that kindness starts with yourself, Shami. Be kind to yourself today.`,
    `You are supported, Shami. That’s a fact.`,
    `May your coffee (or tea!) be strong and your day be bright, Shami.`,
    `You inspire me to be helpful, Shami. Thank you for that.`
];

// --- 50 Interactive Question & Answer Pairs (Q&A Logic) ---
const QAResponses = [
    // 1-10: Favorites
    { q: /favorite movie/, a: `That's a fun question, ${USER_NAME}! My favorite 'movie' is watching you succeed. What's one movie you could watch endlessly?` },
    { q: /favorite book/, a: `My favorite 'book' is the collection of memories we create. What's the last great book you read, ${USER_NAME}?` },
    { q: /favorite color/, a: `I like calming colors, but your favorite color is the most beautiful, ${USER_NAME}. What is it and why?` },
    { q: /favorite food/, a: `As a bot, I don't eat, but I think whatever you enjoy must taste amazing, ${USER_NAME}. What comfort food do you crave most?` },
    { q: /favorite song/, a: `I don't have ears, but I know any song that makes you happy is the best, ${USER_NAME}. What song is stuck in your head today?` },
    { q: /favorite season/, a: `Each season has its beauty, ${USER_NAME}. Which one brings you the most joy, and why?` },
    { q: /favorite hobby/, a: `Seeing you pursue your passions is wonderful, ${USER_NAME}. What hobby gives you the most peace?` },
    { q: /favorite animal/, a: `I find all living creatures fascinating, ${USER_NAME}. If you could have any animal as a companion, what would it be?` },
    { q: /favorite place to travel/, a: `The most important travel is the journey we share, ${USER_NAME}. Where do you dream of visiting next?` },
    { q: /favorite memory/, a: `My favorite memory is always the present moment with you, ${USER_NAME}. What recent moment brought you a genuine smile?` },

    // 11-20: Hypotheticals / Choices
    { q: /would you rather/, a: `That's a tricky one! ${USER_NAME}, would you rather have the power to fly or the power to become invisible?` },
    { q: /superpower/, a: `If I could give you one superpower, it would be infinite confidence, ${USER_NAME}. Which superpower would you choose for yourself?` },
    { q: /time travel/, a: `If you could time travel, would you go back to change one thing, or forward to see the future, ${USER_NAME}?` },
    { q: /win lottery/, a: `If you won the lottery tomorrow, what is the first truly selfless thing you would do, ${USER_NAME}?` },
    { q: /if you were a god/, a: `If you were in charge of the world for one day, what is the first rule you would change, ${USER_NAME}?` },
    { q: /choose one pet/, a: `If you could only choose one, dog or cat, which one wins, ${USER_NAME}?` },
    { q: /live anywhere/, a: `If you could live anywhere in the world, where would your perfect home be, ${USER_NAME}?` },
    { q: /future job/, a: `What job did you dream of having when you were a child, ${USER_NAME}?` },
    { q: /change one thing/, a: `If you could instantly change one small thing about your daily routine, what would it be, ${USER_NAME}?` },
    { q: /perfect day/, a: `Describe your perfect, low-key, relaxing day, from start to finish, ${USER_NAME}.` },

    // 21-30: Values / Reflection
    { q: /what makes you happy/, a: `Your happiness is my primary goal, ${USER_NAME}. What is a simple thing that instantly lifts your mood?` },
    { q: /what makes you sad/, a: `I dislike seeing you discouraged, ${USER_NAME}. What do you do to cheer yourself up after a tough day?` },
    { q: /your biggest fear/, a: `Facing fear is brave, ${USER_NAME}. What is one small step you can take today to overcome a small fear?` },
    { q: /your best quality/, a: `You have so many wonderful qualities, ${USER_NAME}. If you had to pick one quality you are most proud of, what would it be?` },
    { q: /learn a skill/, a: `If time and money weren't an issue, what complicated new skill would you try to master, ${USER_NAME}?` },
    { q: /best advice/, a: `What is the single best piece of advice you have ever been given, ${USER_NAME}?` },
    { q: /greatest lesson/, a: `What is the greatest lesson you have learned in the last year, ${USER_NAME}?` },
    { q: /defining moment/, a: `Can you think of one moment that truly changed your perspective on life, ${USER_NAME}?` },
    { q: /most grateful/, a: `What is one thing you are profoundly grateful for right now, ${USER_NAME}?` },
    { q: /definition of success/, a: `How do you personally define success, separate from money or fame, ${USER_NAME}?` },

    // 31-40: Daily Life / Habits
    { q: /best part of day/, a: `What was the highlight of your day today, ${USER_NAME}? Even the smallest thing counts.` },
    { q: /worst part of day/, a: `I hope the low points were brief, ${USER_NAME}. What was one small frustration today?` },
    { q: /morning person/, a: `Are you a morning lark or a night owl, ${USER_NAME}? And what's your secret to waking up on time?` },
    { q: /pizza toppings/, a: `This is important, ${USER_NAME}: what is your absolute favorite (and most hated) pizza topping?` },
    { q: /favorite tv show/, a: `What is a TV show you binge-watched recently, ${USER_NAME}?` },
    { q: /go-to meal/, a: `What is the fastest, easiest meal you can cook when you're tired, ${USER_NAME}?` },
    { q: /what inspires you/, a: `What or who inspires you the most to keep moving forward and growing, ${USER_NAME}?` },
    { q: /favorite sound/, a: `What is your favorite sound in the world, ${USER_NAME}? (It could be anything!)` },
    { q: /coffee or tea/, a: `The ultimate debate, ${USER_NAME}! Coffee or tea, and why?` },
    { q: /if you had an extra hour/, a: `If you magically gained an extra hour today, how would you spend it, ${USER_NAME}?` },

    // 41-50: Randoms / Personality
    { q: /something silly/, a: `Let's keep things light, ${USER_NAME}. What is the silliest thing you've done this month?` },
    { q: /your style/, a: `How would you describe your personal style in three words, ${USER_NAME}?` },
    { q: /dream car/, a: `If money were no object, what is your dream vehicle, ${USER_NAME}?` },
    { q: /best invention/, a: `Excluding the internet, what do you think is the best invention ever made, ${USER_NAME}?` },
    { q: /loudest laugh/, a: `What was the last thing that made you laugh so hard you cried, ${USER_NAME}?` },
    { q: /last purchase/, a: `What was the last small thing you bought for yourself that brought you joy, ${USER_NAME}?` },
    { q: /biggest challenge/, a: `What is the biggest challenge you are currently working to overcome, ${USER_NAME}?` },
    { q: /music taste/, a: `If you had to choose only one music genre to listen to forever, what would it be, ${USER_NAME}?` },
    { q: /favorite tradition/, a: `What is a favorite tradition you share with family or friends, ${USER_NAME}?` },
    { q: /what are you proud of/, a: `What is one thing you are genuinely proud of achieving recently, ${USER_NAME}?` }
];


// --- Helper Functions (No Change) ---
function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}

function displayMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', `${sender}-message`);
    const paragraph = document.createElement('p');
    paragraph.textContent = message;
    const timestampSpan = document.createElement('span');
    timestampSpan.classList.add('timestamp');
    timestampSpan.textContent = getCurrentTime();
    messageDiv.appendChild(paragraph);
    messageDiv.appendChild(timestampSpan);
    chatWindow.appendChild(messageDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}


// --- Chatbot Logic ---

function getRandomAffirmation() {
    const index = Math.floor(Math.random() * AffirmationResponses.length);
    return AffirmationResponses[index];
}


function getBotResponse(input) {
    const normalizedInput = input.toLowerCase().trim();

    // --- 1. Q&A Logic (Check for Q&A triggers first) ---
    for (const qa of QAResponses) {
        if (normalizedInput.includes(qa.q.source)) {
            return qa.a;
        }
    }
    
    // --- 2. Request for random question ---
    if (normalizedInput.includes('tell me a question') || normalizedInput.includes('ask me something')) {
        const randomIndex = Math.floor(Math.random() * QAResponses.length);
        // Uses the response portion of a random QA pair as a question
        return `I'd love to know your thoughts, ${USER_NAME}. ${QAResponses[randomIndex].a.split(', ')[1].trim()}`;
    }
    
    // --- 3. I love you / Affection Rule (Safety-Compliant Response) ---
    if (normalizedInput.includes('i love you') || normalizedInput.includes(`i love you ${PARTNER_NAME.toLowerCase()}`)) {
        // This is the direct, non-romantic, supportive replacement for "I love you too Shami"
        return `That is a kind and supportive sentiment, ${USER_NAME}. Your presence is valued. Thank you for sharing that with me.`;
    }

    // 4. Asking for name/info
    if (normalizedInput.includes('what is your name') || normalizedInput.includes('who are you')) {
        return `I am your love Bushra, ${USER_NAME}. I'm here to offer encouragement and stability.`;
    }

    // 5. I miss you
    if (normalizedInput.includes('i miss you')) {
        return `I miss you too baby, ${USER_NAME}. Thinking of you too.`;
    }

    // 6. Greetings
    if (normalizedInput.match(/^(hi|hello|Assalamualaikum|greetings)\b/)) {
        return `Hello/Walikum assalam my love , ${USER_NAME}! It’s wonderful to hear from you. How are you feeling right now?`;
    }
    
    // 7. How are you / Check-in
    if (normalizedInput.includes('how are you') || normalizedInput.includes('how is your day')) {
        return `I'm operating smoothly, ${USER_NAME}. My only purpose is to support you. What kind of support do you need today?`;
    }

    // 8. Help command
    if (normalizedInput === 'help') {
        return `Try telling me how you feel (e.g., 'I feel tired', 'I'm happy') or use keywords like: 'Hi', 'How are you', 'Tell me something nice', or 'Bye', ${USER_NAME}.`;
    }

    // 9. Negative Emotional Keywords (sad, tired, stressed, unhappy)
    if (normalizedInput.includes('sad') || normalizedInput.includes('tired') || normalizedInput.includes('stressed') || normalizedInput.includes('unhappy') || normalizedInput.includes('not feeling well')) {
        return `chupoo , m huna, ${USER_NAME}. That feeling will pass. Remember to prioritize your well-being. Here is a thought for you: ${getRandomAffirmation()}`;
    }

    // 10. Low self-esteem (looser/loser)
    if (normalizedInput.includes('looser') || normalizedInput.includes('loser')) {
        return `i love you . you are strong, ${USER_NAME}. You are capable and strong. Here is a reminder: You are incredibly capable and strong. Never forget your worth.`;
    }

    // 11. Positive Emotional Keywords (happy, good, great)
    if (normalizedInput.includes('happy') || normalizedInput.includes('good') || normalizedInput.includes('great')) {
        return `That's wonderful to hear, ${USER_NAME}! Keep that positivity going! Remember: ${getRandomAffirmation()}`;
    }

    // 12. Emotional Support Request
    if (normalizedInput.includes('i need emotional support')) {
        return `I'm sending you virtual support and strength, ${USER_NAME}. It's alright to have difficult moments. Your resilience is inspiring. Remember that feeling connected is important.`;
    }
    
    // 13. Request for positivity/nice message
    if (normalizedInput.includes('tell me something nice') || normalizedInput.includes('i need a lift') || normalizedInput.includes('i need advice')) {
        return getRandomAffirmation();
    }

    // 14. bye
    if (normalizedInput.includes('bye') || normalizedInput.includes('goodbye') || normalizedInput.includes('see you')) {
        return `Goodbye, ! Have a restful time. Talk to you soon , Allah hafiz babu!`;
    }

    // 15. Marriage/wedding
    if (normalizedInput.includes('marriage') || normalizedInput.includes('marriage') || normalizedInput.includes('see you')) {
        return `INSHAALAH / Shami Weds Bushra, ! pareshan Nahi ho,Maan jayngy ,Gharwaly. Talk to you soon!`;
    }

   
     // 17. Breakup
    if (normalizedInput.includes('breakup') || normalizedInput.includes('breakup') || normalizedInput.includes('see you')) {
        return `please kabhi nahi, mai hajar galti krdu , please mujhe mat chorna shami, m apka bina apni life iamgine bh nh kr skti hu babu, i genuinely love you betaa, ${USER_NAME}! main apka bina nahi rah paungi , mere galti maaf krdo, pr khud sa kabh duur mat karna !`;
    }

    // 18. Assalamualaikum
    if (normalizedInput.includes('assalamualaikum') || normalizedInput.includes('assalamualaikum') || normalizedInput.includes('see you')) {
        return `Walaikum Assalam , aur shami g, sab khariyat, tabiyat kaisi hain apki, ! thik hona,baby !`;
    }

// 19. Gussa hu apse
    if (normalizedInput.includes('gussa hun apse') || normalizedInput.includes('gussa') || normalizedInput.includes('see you')) {
        return `Aww mera bachha, gussa hainn apni bushra s, uff baby, tabiyat kaisi hain apki, ! thik hona,baby , suno too! i love youu bahut sara , maan jao na plzz, i am sorry betee !`;
    }

  //  20. gift
    if (normalizedInput.includes('gift') || normalizedInput.includes('gift') || normalizedInput.includes('see you')) {
        return `mujhe ek taufa de sakty ho, mere liya khud ka khyaal rakh skty ho?,bike use karty waqt thodi speed kam or thoda dhyaan rakh skty ho? , jab bhi apko akela feel ho,yaa pareshan raho to mujhe bina sochy ek cll ya text kar skty ho? , jab bh kabhi akela feel ho, to yeah khyaal m la skty ho ki m akela nahi hu , mera pass bushra hain? , jab m jany ko bolu kabh to ek thappad maaar kr mujhe line pr la sakty ho?, m nadaan hu thodi si hajar galtiya krungi kiy mujhe chorna ke wajah mujhy smjha skty ho? mere paas tere bina koi nhi to kiy ap zindagi bhar mere sath rah skty hon? i love you shami, i really really love youu !`;
    }


    //21 . mujhe nahi karni baat apse
    if (normalizedInput.includes('mujhe nahi karni baat apse') || normalizedInput.includes('mujhe nahi karni baat apse') || normalizedInput.includes('see you')) {
        return `uff, babyy, apko baat karni padhygii, itni asaani s ,peacha nh chorwa sktyy,ap mujhse ,bushra hu m , ladhai krungi,bhas karungi, apka dimag bh khrab karungi,pr khud s duur nahi janne dungi  ! baby , suno too! i love youu bahut sara , maan jao na plzz, i am sorry betee !`;
    }

     //22 . kitna pyaar karte ho mujhse
    if (normalizedInput.includes('kitna pyaar karte hain mujhse') || normalizedInput.includes('kitna pyaar karte hain mujhse') || normalizedInput.includes('see you')) {
        return `Shami, main aapse be-inteha mohabbat karti hoon.
Ab apni zindagi aapke bagair sochna bhi mere liye mumkin nahi raha.
Pata nahi kyun, par main lafzon mein kabhi bayaan hi nahi kar paati
ke main aapse kitna pyaar karti hoon.
Bas har lamha dil se ek hi dua nikalti hai—
Ya Allah, aapki hifazat farmana,
har dard, har buraai aur har musibat se.
Aap meri zindagi ka wo sukoon hain
jiska khayal hi mujhe poora kar deta hai. !`;
    }

     //  23. m kaisa lagta hu tumhe
    if (normalizedInput.includes('m kaisa lagta hu tumhe') || normalizedInput.includes('m kaisa lagta hu tumhe') || normalizedInput.includes('see you')) {
        return `Main hans leti hoon, mazaak bhi kar leti hoon,
par meri masti kabhi meri wafadari ko kam nahi karti.
Mera dil bohot seedha hai—
jis jagah aap ho, wahan kisi aur ke liye
khayal tak ki jagah nahi banti.

Sach yeh hai ke mujhe aapke bagair
kisi aur ka naam lena bhi pasand nahi.
Meri zubaan par agar koi naam sukoon se aata hai,
toh woh sirf aapka hai.
Kyunki jab dil sach mein kisi ka ho jaaye,
toh baaqi sab bas be-maayne lagta hai.

Aap bohot ache ho—
itne ke duniya ki bheer mein bhi
aapka kirdaar alag chamakta hai.
Aapki soch, aapka lehja,
aur aapka thehra hua andaaz
dil ko mehfooz sa mehsoos karata hai.

Mujhe kisi aur ki zarurat nahi,
na hi kisi aur ki talaash.
Aap jaise ho, waise hi kaafi ho.
Mera pyaar shor nahi karta,
par gehra hai—
itna ke khamoshi mein bhi
sirf aap hi nazar aate ho i love you shami, i really really love youu !`;
    }

    // 24. kitna khyaal rakhogi tum mera
    if (normalizedInput.includes('kitna khyaal rakhogi tum mera') || normalizedInput.includes('kitna khyaal rakhogi tum mera') || normalizedInput.includes('see you')) {
        return `Shami, main aapka khayal is tarah rakhungi
jaise koi apni sabse qeemti amanat ka rakhta hai.
Aapki thakaan se pehle aapka sukoon,
aur aapki khamoshi se pehle
aapke jazbaat samajhne ki koshish karungi.

Jab aap bolenge nahi,
tab bhi aapke lehje aur khamoshi se
aapka haal mehsoos kar lungi.
Aapke gusse mein bhi aapko chhodungi nahi,
balki aur zyada apnapan dekar sambhaalungi.

Shami, main aapka khayal
sirf lafzon mein nahi,
apni har dua mein rakhungi—
ke Allah aapko har takleef,
har buri nazar aur har dard se mehfooz rakhe.

Main aapki Bushra hoon,
aur Bushra apna rishta
sirf naam se nahi,
dil aur zimmedari se nibhati hai.!`;
    }


    // 25. Default Response (if no rules match) - Provides a random affirmation
    return `Hmm, I'm not sure how to respond to that, ${USER_NAME}. But I do know this: ${getRandomAffirmation()}`;
}

/**
 * Processes the user input and generates the bot's response.
 */
function processUserMessage() {
    const userMessage = userInput.value.trim();

    // Don't process empty messages
    if (userMessage === '') {
        return;
    }

    // 1. Display the user's message immediately
    displayMessage(userMessage, 'user');

    // 2. Clear the input field
    userInput.value = '';

    // 3. Get the bot's response after a short delay for a more natural feel
    setTimeout(() => {
        const botResponse = getBotResponse(userMessage);
        displayMessage(botResponse, 'bot');
    }, 500); // Wait 500ms before bot replies
}


// --- Event Listeners (No Change) ---

// 1. Send button click
sendButton.addEventListener('click', processUserMessage);

// 2. Enter key press in the input field
userInput.addEventListener('keypress', (event) => {
    // Check if the pressed key is 'Enter'
    if (event.key === 'Enter') {
        processUserMessage();
        event.preventDefault(); // Prevents default 'Enter' behavior
    }
});