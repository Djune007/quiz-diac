// perguntas e respostas
// Dados das perguntas e respostas
const quizData = [
  {
    question:
      "1. No contexto da Arquitetura de Sistemas, o MVC (model – view – controller) é um estilo arquitetural",
    options: [
      "A) comportamental",
      "B) estrutural",
      "C) criacional",
      "D) funcional",
    ],
    correct: "B) estrutural",
  },
  {
    question:
      "2. O tipo de conteúdo de respostas para o navegador Web, no contexto de servlets, é definido no método.",
    options: [
      "A) HttpServletResponse.setContentType()",
      "B) HttpServletRequest.setContentType()",
      "C) ServletResponse.setContentType()",
      "D) ServletRequest.setContentType()",
    ],
    correct: "A) HttpServletResponse.setContentType()",
  },
  {
    question:
      "3. Para ler os parâmetros de inicialização do contexto de um servlet utiliza-se o método",
    options: [
      "A) String getInitParameter(String)",
      "B) void setInitParameter(String)",
      "C) String getParameter(String)",
      "D) void setParameter(String)",
    ],
    correct: "A) String getInitParameter(String)",
  },

  {
    question:
      "4. Um programa que estende a funcionalidade de um web server gerando conteúdos dinâmicos e interagindo com os clientes por meio de um modelo requisição/resposta é conhecido como",
    options: ["A) Applet", "B) JSP", "C) EJB", "D) Servlet"],
    correct: "D) Servlet",
  },
  {
    question:
      "5. No desenvolvimento de aplicações Web, é comum o uso de Servlets. Um Servlet é um programa que executa",
    options: [
      "A) apenas uma vez, gerando uma página JSP que é reutilizada muitas vezes pelo servidor web.",
      "B) sempre que um cliente faz uma requisição HTTP.",
      "C) somente durante a inicialização do servidor.",
      "D) apenas quando o servidor é reiniciado.",
    ],
    correct:
      "A) apenas uma vez, gerando uma página JSP que é reutilizada muitas vezes pelo servidor web.",
  },
  {
    question:
      "6. A classe HttpServlet implementa métodos que atendem a requisições HTTP específicas, como por exemplo do Post, que só atendem a requisições POST. O nome do método da classe HttpServlet que atende a qualquer tipo de requisição é:",
    options: ["A) doGet", "B) doPost", "C) doPut", "D) Service"],
    correct: "D) Service",
  },
  {
    question:
      "7. A instalação de aplicações web em um servidor de aplicação requer a presença de um arquivo de configuração localizado na raiz do diretório WEB-INF da aplicação web, que contém informações de configurações e parâmetros de inicialização. O nome do arquivo descritor de instalação (deployment descriptor) padrão onde são indicados os parâmetros de inicialização e mapeamento de Servlets é:",
    options: [
      "A) config.xml",
      "B) application.xml",
      "C) servlet.xml",
      "D) web.xml",
    ],
    correct: "D) web.xml",
  },
  {
    question:
      "8. Para implementar um Servlet apto a responder requisições do tipo HTTP, é correto afirmar que é necessário:",
    options: [
      "A) implementar a interface javax.servlet.Servlet.",
      "B) estender a classe javax.servlet.http.HttpServlet e sobrepôr seus métodos doGet e/ou doPost.",
      "C) estender a classe javax.servlet.GenericServlet.",
      "D) implementar a interface javax.servlet.http.HttpServlet.",
    ],
    correct:
      "B) estender a classe javax.servlet.http.HttpServlet e sobrepôr seus métodos doGet e/ou doPost.",
  },
  {
    question: "9. Sobre o Tomcat é correto afirmar:",
    options: [
      "A) É um servidor de aplicação completo.",
      "B) Não suporta Java EE.",
      "C) É um servidor HTTP simples.",
      "D) O Tomcat foi escrito em Java e, portanto, necessita de uma Java Virtual Machine (JVM) para ser executado.",
    ],
    correct:
      "D) O Tomcat foi escrito em Java e, portanto, necessita de uma Java Virtual Machine (JVM) para ser executado.",
  },
  {
    question:
      "10. Acerca de sistemas de desenvolvimento web, assinale a opção correta.",
    options: [
      "A) Servlet é uma classe do Java que possibilita ampliar os recursos de servidores web, desenvolvida para permitir conteúdos dinâmicos orientados ao usuário.",
      "B) JSP é uma linguagem de programação independente.",
      "C) HTML substitui completamente o uso de Servlets.",
      "D) CSS é usado para processamento lógico no servidor.",
    ],
    correct:
      "A) Servlet é uma classe do Java que possibilita ampliar os recursos de servidores web, desenvolvida para permitir conteúdos dinâmicos orientados ao usuário.",
  },
  {
    question:
      "11. Na plataforma J2EE, o ciclo de vida de um Java Servlet termina quando ocorre a chamada ao seguinte método:",
    options: ["A) init()", "B) service()", "C) destroy()", "D) doGet()"],
    correct: "C) destroy()",
  },
  {
    question:
      "12. Em um site desenvolvido com recursos Java EE, um formulário passa o valor digitado no campo salário como parâmetro para uma servlet. Para receber o parâmetro salário e armazenar em uma variável do tipo double, utiliza-se a instrução:",
    options: [
      'A) double sal = Double.parseDouble(request.getParameter("salario"));',
      'B) double sal = request.getParameter("salario");',
      'C) double sal = Integer.parseInt(request.getParameter("salario"));',
      'D) double sal = request.getNumericParameter("salario");',
    ],
    correct:
      'A) double sal = Double.parseDouble(request.getParameter("salario"));',
  },
  {
    question:
      "13. O design pattern MVC pode ser utilizado para representar e entender a separação de responsabilidades e a comunicação entre os componentes de uma aplicação para web. Em um site criado utilizando Java EE e o MVC, é correto afirmar que",
    options: [
      "A) as JSPs são representadas no componente Model.",
      "B) as classes de entidade do banco de dados são representadas no componente View.",
      "C) as servlets são representadas no componente View.",
      "D) as servlets são representadas no componente Controller e as classes de entidade do banco de dados no componente Model.",
    ],
    correct:
      "D) as servlets são representadas no componente Controller e as classes de entidade do banco de dados no componente Model.",
  },
  {
    question:
      "14. Na plataforma Java EE (J2EE), em comparação com os Servlets, a criação de Java Server Pages (JSP) facilita o desenvolvimento de páginas web, pois",
    options: [
      "A) permite que o conteúdo dinâmico seja escrito sem a necessidade de utilizar código Java.",
      "B) permite que o conteúdo estático seja escrito sem a necessidade de utilizar código Java.",
      "C) elimina a necessidade de usar Servlets.",
      "D) substitui completamente o uso de HTML.",
    ],
    correct:
      "B) permite que o conteúdo estático seja escrito sem a necessidade de utilizar código Java.",
  },
  {
    question:
      "15. No Java EE 6 os métodos doPost e doGet podem ser sobrescritos em uma servlet criada na aplicação para receberem as requisições vindas de páginas HTML. Quando sobrescritos na servlet, eles substituem seus métodos ancestrais existentes na classe abstrata",
    options: [
      "A) GenericServlet",
      "B) HttpServlet",
      "C) Servlet",
      "D) HttpService",
    ],
    correct: "B) HttpServlet",
  },
  {
    question: "16. Na plataforma J2EE, a classe ServletRequest define",
    options: [
      "A) a estrutura do objeto principal do Servlet, permitindo que sejam feitas requisições ao Servlet.",
      "B) a estrutura do objeto principal do Servlet, permitindo que sejam feitas respostas ao Servlet.",
      "C) a estrutura do objeto principal do Servlet, permitindo que sejam feitas requisições ao cliente.",
      "D) a estrutura do objeto principal do Servlet, permitindo que sejam feitas respostas ao cliente.",
    ],
    correct:
      "A) a estrutura do objeto principal do Servlet, permitindo que sejam feitas requisições ao Servlet.",
  },
  {
    question:
      "17. Seja a seguinte definição, no contexto da tecnologia Java EE: 'Uma entidade de software que fornece serviços para componentes, incluindo a gestão do ciclo de vida, segurança, serviços de implantação e execução.' A definição acima se aplica a qual das opções a seguir?",
    options: ["A) Containers", "B) Servlets", "C) JSPs", "D) EJBs"],
    correct: "A) Containers",
  },
  {
    question:
      "18. Para inserir fragmentos de código Java em uma página JSP, chamados de scriptlets, é necessário utilizar os delimitadores",
    options: ["A) <% e %>", "B) {{ e }}", "C) <%-- e --%>", "D) <!-- e -->"],
    correct: "A) <% e %>",
  },
  {
    question:
      "19. Assinale a alternativa que indica uma linha de comentário válida dentro de um arquivo JSP:",
    options: [
      "A) // Comentário",
      "B) /* Comentário */",
      "C) <!-- Comentário -->",
      "D) <%-- Comentário --%>",
    ],
    correct: "D) <%-- Comentário --%>",
  },
  {
    question:
      "20. Assinale a alternativa que apresenta instruções corretas em sintaxe válida JSP para inicializar e imprimir o valor da variável num.",
    options: [
      "A) <% int num = 2; %> <%= num %>",
      "B) <% int num = 2; %> ${num}",
      "C) <% int num = 2; %> {{num}}",
      "D) <% int num = 2; %> <num>",
    ],
    correct: "A) <% int num = 2; %> <%= num %>",
  },

];

let currentQuestionIndex = 0;
let shuffledQuestions = [];
let score = 0;

// Embaralha as perguntas
function shuffleQuestions() {
  shuffledQuestions = [...quizData].sort(() => Math.random() - 0.5);
}

// Função para carregar uma pergunta específica
function loadQuestion(index) {
  const quizContainer = document.getElementById("quiz");
  quizContainer.innerHTML = "";

  if (index >= shuffledQuestions.length) {
    quizContainer.innerHTML = `<h2>Você acertou ${score} de ${shuffledQuestions.length} perguntas!</h2>`;
    document.getElementById("prev").style.display = "none";
    document.getElementById("next").style.display = "none";
    document.getElementById("submit").style.display = "none";
    return;
  }

  const q = shuffledQuestions[index];
  const questionDiv = document.createElement("div");
  questionDiv.classList.add("question");
  questionDiv.innerHTML = `<strong>Pergunta ${index + 1}:</strong> ${
    q.question
  }`;

  const optionsDiv = document.createElement("div");
  optionsDiv.classList.add("options");

  q.options.forEach((option) => {
    const label = document.createElement("label");
    label.innerHTML = `<input type="radio" name="q${index}" value="${option}"> ${option}`;
    optionsDiv.appendChild(label);
  });

  questionDiv.appendChild(optionsDiv);
  quizContainer.appendChild(questionDiv);

  document.querySelectorAll(`input[name="q${index}"]`).forEach((input) => {
    input.addEventListener("change", () => checkAnswer(index));
  });
}

// Verifica a resposta e conta acertos
function checkAnswer(index) {
  const selectedOption = document.querySelector(
    `input[name="q${index}"]:checked`
  );
  if (!selectedOption) return;

  const options = document.querySelectorAll(`input[name="q${index}"]`);
  const correctAnswer = shuffledQuestions[index].correct;

  options.forEach((input) => {
    const label = input.parentElement;
    if (input.value === correctAnswer) {
      label.classList.add("correct");
      if (input.checked) {
        score++;
      }
    } else if (input.checked && input.value !== correctAnswer) {
      label.classList.add("wrong");
    }
  });
}

// Funções de navegação
function prevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    loadQuestion(currentQuestionIndex);
  }
}

function nextQuestion() {
  if (currentQuestionIndex < shuffledQuestions.length) {
    currentQuestionIndex++;
    loadQuestion(currentQuestionIndex);
  }
}

document.getElementById("prev").addEventListener("click", prevQuestion);
document.getElementById("next").addEventListener("click", nextQuestion);

document.addEventListener("DOMContentLoaded", () => {
  shuffleQuestions();
  loadQuestion(currentQuestionIndex);
  document.getElementById("prev").disabled = true;
});
