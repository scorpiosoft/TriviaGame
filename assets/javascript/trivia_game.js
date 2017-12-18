// Constructor for the Question Object
function Question (gif, question, answer, wrong1, wrong2, wrong3) 
{
  this.gif = gif;
  this.question = question;
  this.answer = answer;
  this.wrong = [ wrong1, wrong2, wrong3 ];
  this.used = false;
}

// The Trivia Game Object
var TriviaGame =
{
  // DOM elements to update, jQuery handles
  d_trivia:          $("#trivia"),
  d_game_card:       $("#game_card"),
  d_countdown:       $("#countdown"),
  d_question:        $("#question"),
  d_answer_list:     $("#answer_list"),
  d_question_count:  $("#question_count"),
  d_progress:        $("#progress"),
  // array of Question Objects
  questions:
  [
    new Question("https://media.giphy.com/media/FubcgW1sKFfH2/giphy.gif" ,"In which year was V-E Day celebrated?", "1945", "1944", "1954", "1955"),
    new Question("https://media.giphy.com/media/9ARWBkuNe8n6M/giphy.gif", "In which year was Comic Relief launched?", "1985", "1983", "1984", "1986"),
    new Question("https://media.giphy.com/media/BYON0mySHzpCg/giphy.gif", "In which year was a national census was conducted?", "1901", "1801", "1851", "1951"),
    new Question("https://media.giphy.com/media/n1uRL2PSIPv9K/giphy.gif", "In which year was the entrance to King Tutankhamen’s Tomb in the Valley of the Kings discovered.", "1922", "1892", "1902", "1912"),
    new Question("https://media.giphy.com/media/slZdaLePKumxq/giphy.gif", "In which year was Fleetwood Mac’s album ‘Rumours’ released?", "1977", "1974", "1975", "1976"),
    new Question("https://media.giphy.com/media/Szk2psEuSaV7q/giphy.gif", "In which year was the Concorde unveiled in France?", "1967", "1968", "1969", "1970"),
    new Question("https://media.giphy.com/media/EQdvY65bpBlqo/giphy.gif", "In which year did Winston Churchill resign from his post as Prime Minister due to ill health?", "1955", "1945", "1950", "1960"),
    new Question("https://media.giphy.com/media/3o6Zthqgss4W4klvZC/giphy.gif", "D-Day and the Normandy landings took place on which date?", "June 6, 1944", "June 5, 1944", "June 7, 1944", "June 8, 1944"),
    new Question("https://media.giphy.com/media/HNs7T1ZhUls0o/giphy.gif", "Which war was ended by the Treaty of Paris in 1783?", "American Revolutionary War", "Spanish-American War", "Napoeonic Wars", "French Revolution"),
    new Question("https://media.giphy.com/media/LIaZXl03uGJeU/giphy.gif", "In which year did the United Nations officially come into existence?", "1945", "1950", "1955", "1960"),
    new Question("https://media.giphy.com/media/TUUxeDu7DNJlK/giphy.gif", "In which century did Joan of Arc live?", "15th century", "13th century", "14th century", "16th century"),
    new Question("https://media.giphy.com/media/BLMsK0sPoMcBW/giphy.gif", "Quote the first words of The Gettysburg Address", "Four score and seven years ago", "Once more unto the breach", "The war is actually begun", "Fellow-Citizens of the Senate and of the House of Representatives"),
    new Question("https://media.giphy.com/media/2YjJPg6zBikEw/giphy.gif", "Which of Henry VIII’s wives is buried alongside him in St. George’s chapel in Windsor Castle?", "Jane Seymour", "Anne Boleyn", "Catherine of Aragon", "Anne of Cleves"),
    new Question("https://media.giphy.com/media/GOsq7QnYlahag/giphy.gif", "Who was President of the United States when Neil Armstrong first set foot upon the moon?", "Richard Nixon", "John F. Kennedy", "Lyndon B. Johnson", "Gerald Ford"),
    new Question("https://media.giphy.com/media/kyFVqaZgHatgc/giphy.gif", "Which is NOT one of the seven Wonders of the Ancient World?", "Machu Picchu", "Lighthouse of Alexandria", "Mausoleum at Halicarnassus", "Statue of Zeus at Olympia"),
    new Question("https://media.giphy.com/media/l4FGJzg4LOdhyJmIE/giphy.gif", "In which century was the Statue of Liberty dedicated to the United States as a gift from France?", "19th century", "17th century", "18th century", "20th century"),
    new Question("https://media.giphy.com/media/Yp2ZhmZ1qwTXq/giphy.gif", "Who or what is the ‘Flying Dutchman’?", "A ghost ship/the captain of the ship", "Johann Hessenlink (WWI pilot)", "Bram van der Stok (WWII pilot)", "Amsterdam (Ship-of-the-Line"),
    new Question("https://media.giphy.com/media/26BkMklrnzsWI5tfi/giphy.gif", "Who was the first person to complete a solo flight across the Atlantic Ocean?", "Charles A. Lindbergh", "Amelia Earhart", "Richard Byrd", "Ludwik Idzikowski"),
    new Question("https://media.giphy.com/media/iFsoisHI6zP2M/giphy.gif", "Which American battle is sometimes referred to as Custer’s Last Stand?", "Battle of the Little Bighorn", "Battle of Bull Run", "Battle of Antietam", "Battle of Gettysburg"),
    new Question("https://media.giphy.com/media/w91gk3uIgIVNu/giphy.gif", "Which is the only one of the Seven Wonders of the Ancient World to still be standing?", "The Great Pyramid at Giza", "The Hanging Gardens of Babylon", "The Temple of Artemis at Ephesus", "The Colossus of Rhodes"),
    new Question("https://media.giphy.com/media/LYtaUJQVfI9os/giphy.gif", "In which year was Abraham Lincoln assassinated?", "1865", "1862", "1863", "1864"),
    new Question("https://media.giphy.com/media/l0ErRc0SDNtFDdzAk/giphy.gif", "In which U.S. city did Martin Luther King Jr. deliver his famous ‘I Have A Dream’ speech in 1963?", "Washington D.C.", "Memphis, TN", "New York, NY", "Atlanta, GA"),
    new Question("https://media.giphy.com/media/lKG7fWaJv4b0A/giphy.gif", "Which of Adolf Hitler’s cabinet held the post of ‘Minister of Public Enlightenment and Propaganda’?", "Joseph Goebbels", "Hermann Göring", "Heinrich Himmler", "Albert Speer"),
    new Question("https://media.giphy.com/media/1248gHVfl22Ov6/giphy.gif", "Which American political protest took place on December 16th 1773?", "Boston Tea Party", "The March on Washington", "Pontiac's Rebellion", "Publication of 'Association of the Sons of Liberty'"),
    new Question("https://media.giphy.com/media/4H9ph6i7TD5p6/giphy.gif", "Who did Ronald Reagan succeed as President of the USA?", "Jimmy Carter", "Richard Nixon", "Gerald Ford", "George Bush"),
    new Question("https://media.giphy.com/media/SLbZ0D6YoO7io/giphy.gif", "What was the name of the galleon in which Sir Francis Drake circumnavigated the globe between 1577 and 1580?", "The Golden Hind", "Whydah", "Ark Royal", "The Batavia"),
    new Question("https://media.giphy.com/media/yNbem18ay6vyo/giphy.gif", "Who succeeded George Washington as President of the United States?", "John Adams", "Thomas Jefferson", "James Madison", "Andrew Jackson"),
    new Question("https://media.giphy.com/media/w40teEBNvyWcM/giphy.gif", "How was New York known prior to 1664?", "New Amsterdam", "New Berlin", "New London", "New Paris"),
    new Question("https://media.giphy.com/media/sC72ABm5mjoLm/giphy.gif", "Which famous German fighter pilot was shot down and killed on 21st April 1918?", "Manfred von Richthofen", "Werner Voss", "Lothar von Richthofen", "Kurt Wolff"),
    new Question("https://media.giphy.com/media/h1hPfaDYcfWmY/giphy.gif", "Who was President of the United States when the National Prohibition Act was passed in 1919?", "Woodrow Wilson", "Grover Cleveland", "Theodore Roosevelt", "Herbert Hoover"),
    new Question("https://media.giphy.com/media/6Nk13Rd3G29J6/giphy.gif", "In which year was Nelson Mandela released from prison?", "1990", "1991", "1992", "1993"),
    new Question("https://media.giphy.com/media/ESu18lTvy3ilW/giphy.gif", "Who succeeded Richard III as King of England in 1485?", "Henry VII", "Edward IV", "William III", "George II"),
    new Question("https://media.giphy.com/media/5o74cnmOBrqdW/giphy.gif", "Who was the oldest person to assume office as the President of the United States?", "Ronald Reagan", "George Bush", "John Quincy Adams", "William Henry Harrison"),
    new Question("https://media.giphy.com/media/LpwqZsLlxBvXO/giphy.gif", "Who was the first leader of the Soviet Union?", "Vladimir Lenin", "Josef Stalin", "Nikita Khrushchev", "Alexei Rykov"),
    new Question("https://media2.giphy.com/media/7jzn989vTILZe/giphy.gif", "Who commissioned the Arc de Triomphe?", "Napoleon I", "Charles de Gaulle", "Louis XVI", "Napoleon III"),
    new Question("https://media.giphy.com/media/IxNZYC3OkRClW/giphy.gif", "Abraham Lincoln was assassinated in 1865 in Ford’s Theatre in which U.S. city?", "Washington D.C.", "Philadelphia, PA", "New York, NY", "Baltimore, MD"),
    new Question("https://media.giphy.com/media/sbzAvZYuemmvS/giphy.gif", "Which U.S. naval base was attacked by the Imperial Japanese Navy on December 7th 1941?", "Pearl Harbor", "Midway", "Guam", "Guadalcanal"),
    new Question("https://media.giphy.com/media/MDAPUghEZNRUk/giphy.gif", "In which year was the assassination of Archduke Ferdinand?", "1914", "1917", "1936", "1939"),
    new Question("https://media.giphy.com/media/4LZMbupvoIorCg0AdIqI/giphy.gif", "In which year did Martin Luther King Jr. make his 'I have a dream' speech?", "1963", "1960", "1961", "1962"),
    new Question("https://media.giphy.com/media/10zZ1RH5mbVagg/giphy.gif", "In which year was Battle of Waterloo?", "1815", "1814", "1816", "1817"),
    new Question("https://media.giphy.com/media/1eAg3lPj1dJYY/giphy.gif", "In which year was the sinking of the Titanic?", "1912", "1892", "1902", "1922"),
    new Question("https://media.giphy.com/media/EvR8hhP4BZtyE/giphy.gif", "In which year did Sir Edmund Hillary reach the summit of Mount Everest", "1953", "1933", "1938", "1958"),
    new Question("https://media.giphy.com/media/rGd96FmvAfymY/giphy.gif", "In which year did American athlete Jesse Owens win four gold medals at the Berlin Olympics?", "1936", "1928", "1932", "1924"),
    new Question("https://media.giphy.com/media/1HIDul5cC5qcU/giphy.gif", "Which is the oldest university in England?", "Oxford", "Cambridge", "Warwick", "Manchester"),
  ],
  cur_question:  null,
  started: false,
  right:   0,
  wrong:   0,
  count:   0,
  end:     10,
  time:    10,
  start_game: function ()
  {
    this.right = this.wrong = this.count = 0;
    this.cur_question = null;
  },
  end_game: function ()
  {
    for (var i = 0; i < this.questions.length; ++i)
    {
      this.questions[i].used = false;
    }
  },
  next_question: function ()
  {
    var i;
    // get all unused questions (a subset copy of the master list of questions)
    var unused_questions = this.questions.filter(q => q.used != true);
    // get random number
    var random_index = Math.floor(Math.random() * unused_questions.length);
    // get the random unused question
    var next_q = unused_questions[random_index];
    // assign first element of the answers array
    var answers = [next_q.answer];

    // get the random question's index in the master list
    var q_idx = this.questions.indexOf(next_q);
    // mark this question used in the master list
    this.questions[q_idx].used = true;
    // and assign it to the current question
    this.cur_question = next_q;

    // display the question
    this.d_question.text(next_q.question);

    // build array of answers
    for (i = 0; i < next_q.wrong.length; ++i)
    {
      answers.push(next_q.wrong[i]);
    }
    answers = shuffle(answers);
    console.log("shuffled answers: ", answers);

    // display the answers
    for (i = 0; i < answers.length; ++i)
    {
      // create a jQuery handle for the list item, then append it to the list
      var item = $('<li class="list-group-item answer text-center card_background"><p>'+answers[i]+'</p></li>');
      this.d_answer_list.append(item);
    }
  },
}

//
// Event Functions
//

// Click function for the answers
TriviaGame.d_answer_list.on('click', 'li.answer', function()
{
  console.log("Answer selected:", $(this).text());

  // check if the answer is correct
  if ($(this).text() === TriviaGame.cur_answer.answer)
  {
    x
  }
});

//
// Utility Functions
//

// take an array and shuffle it's members
function shuffle(array)
{
  var cur_index = array.length;
  var temp, random_index;

  // while there remain elements to shuffle
  while (0 !== cur_index)
  {
    // Pick a remaining element
    random_index = Math.floor(Math.random() * cur_index);
    cur_index -= 1;

    // swap it with the current element
    temp = array[cur_index];
    array[cur_index] = array[random_index];
    array[random_index] = temp;
  }
  return array;
}
