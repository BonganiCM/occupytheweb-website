document.addEventListener('DOMContentLoaded', () => {

    /*** DARK MODE TOGGLE ***/
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
      darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
      });
    }
  
    /*** SOUND EFFECTS ***/
    const clickSound = new Audio("sounds/click.mp3");
    const errorSound = new Audio("sounds/error.mp3");
  
    document.querySelectorAll(".btn").forEach(button => {
      button.addEventListener("click", () => {
        clickSound.play().catch(() => {}); // Handle autoplay policy
      });
    });
  
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.addEventListener("submit", event => {
        event.preventDefault();
        errorSound.play().catch(() => {});
        alert("Thank you for your message!");
        contactForm.reset();
      });
    }
  
    /*** TYPING EFFECT ***/
    const typingElement = document.getElementById("typing-text");
    const typingText = "Cybersecurity specialist focusing on penetration testing, ethical hacking, and digital forensics.";
    let typingIndex = 0;
  
    function typeWriter() {
      if (typingIndex < typingText.length) {
        typingElement.innerHTML += typingText.charAt(typingIndex);
        typingIndex++;
        setTimeout(typeWriter, 50);
      }
    }
  
    if (typingElement) {
      typingElement.innerHTML = "";
      setTimeout(typeWriter, 500);
    }
  
    /*** MATRIX EFFECT ***/
    const matrixCanvas = document.getElementById("matrixCanvas");
    const ctxMatrix = matrixCanvas.getContext("2d");
  
    function setupMatrix() {
      matrixCanvas.width = window.innerWidth;
      matrixCanvas.height = window.innerHeight;
  
      const matrixChars = "0101011101010101111001011010101";
      const columns = Math.floor(matrixCanvas.width / 14);
      const drops = Array(columns).fill(1);
  
      function drawMatrixEffect() {
        ctxMatrix.fillStyle = "rgba(0, 0, 0, 0.1)";
        ctxMatrix.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
        ctxMatrix.fillStyle = "#00ffcc";
        ctxMatrix.font = "14px monospace";
  
        drops.forEach((y, index) => {
          const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
          ctxMatrix.fillText(text, index * 14, y * 14);
  
          drops[index] = y * 14 > matrixCanvas.height || Math.random() > 0.975 ? 0 : y + 1;
        });
  
        requestAnimationFrame(drawMatrixEffect);
      }
  
      drawMatrixEffect();
    }
  
    setupMatrix();
    window.addEventListener('resize', setupMatrix);
  
    /*** INTERACTIVE TERMINAL DEMO ***/
    const terminalInput = document.getElementById('terminal-input');
    const terminalOutput = document.getElementById('terminal-output');
  
    const terminalCommands = {
      help: "Available commands: help, whoami, ls, clear",
      whoami: "You are: Cybersecurity Enthusiast!",
      ls: "Documents  Downloads  Projects  Secrets.txt",
      clear: ""
    };
  
    function executeCommand(command) {
      const cmd = command.trim().toLowerCase();
      if (cmd === "clear") {
        terminalOutput.innerHTML = "";
        return;
      }
  
      const output = terminalCommands[cmd] || `Command not found: ${cmd}`;
      terminalOutput.innerHTML += `<p><strong>root@cyber-expert:</strong> ${cmd}</p><p>${output}</p>`;
      terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }
  
    if (terminalInput) {
      terminalInput.addEventListener("keypress", event => {
        if (event.key === "Enter") {
          event.preventDefault();
          const command = terminalInput.value;
          executeCommand(command);
          terminalInput.value = "";
        }
      });
    }
  
    /*** AI CHATBOT (Optional if you want to keep it) ***/
    const chatBody = document.getElementById("chat-body");
    const chatInput = document.getElementById("chat-input");
    const chatSend = document.getElementById("chat-send");
  
    const responses = {
      "hello": "Hello! How can I assist you today?",
      "who are you": "I am your Cyber AI Assistant.",
      "what is cybersecurity": "Cybersecurity is protecting systems from digital attacks.",
      "thank you": "You're welcome! Stay safe 🔐",
      "bye": "Goodbye! Stay secure 🌐"
    };
  
    function sendChatMessage() {
      const userMessage = chatInput.value.toLowerCase().trim();
      if (!userMessage) return;
  
      const botResponse = responses[userMessage] || "I'm still learning! Try asking something else.";
      chatBody.innerHTML += `<p><strong>You:</strong> ${chatInput.value}</p>`;
      chatBody.innerHTML += `<p><strong>Cyber AI:</strong> ${botResponse}</p>`;
      chatBody.scrollTop = chatBody.scrollHeight;
      chatInput.value = "";
    }
  
    if (chatSend && chatBody && chatInput) {
      chatSend.addEventListener("click", sendChatMessage);
      chatInput.addEventListener("keypress", e => {
        if (e.key === "Enter") {
          sendChatMessage();
        }
      });
    }
  
    /*** HOLOGRAPHIC HOVER FOR ELEMENTS ***/
    document.querySelectorAll('.portfolio-item, .blog-post').forEach(item => {
      item.classList.add("holo-hover");
    });
  
  });
  