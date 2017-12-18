// Constructor for the Question Object
function Question (question, answer, wrong1, wrong2, wrong3) 
{
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
    new Question("In which year was V-E Day celebrated?", "1945", "1944", "1954", "1955"),
    new Question("In which year was Comic Relief launched?", "1985", "1983", "1984", "1986"),
    new Question("In which year was a national census was conducted?", "1901", "1801", "1851", "1951"),
    new Question("In which year was the entrance to King Tutankhamen’s Tomb in the Valley of the Kings discovered.", "1922", "1892", "1902", "1912"),
    new Question("In which year was Fleetwood Mac’s album ‘Rumours’ released?", "1977", "1974", "1975", "1976"),
    new Question("In which year was the Concorde unveiled in France?", "1967", "1968", "1969", "1970"),
    new Question("In which year did Winston Churchill resign from his post as Prime Minister due to ill health?", "1955", "1945", "1950", "1960"),
    new Question("D-Day and the Normandy landings took place on which date?", "June 6, 1944", "June 5, 1944", "June 7, 1944", "June 8, 1944"),
    new Question("Which war was ended by the Treaty of Paris in 1783?", "American Revolutionary War", "Spanish-American War", "Napoeonic Wars", "French Revolution"),
    new Question("In which year did the United Nations officially come into existence?", "1945", "1950", "1955", "1960"),
    new Question("In which century did Joan of Arc live?", "15th century", "13th century", "14th century", "16th century"),
    new Question("Quote the first words of The Gettysburg Address", "Four score and seven years ago", "Once more unto the breach", "The war is actually begun", "Fellow-Citizens of the Senate and of the House of Representatives"),
    new Question("Which of Henry VIII’s wives is buried alongside him in St. George’s chapel in Windsor Castle?", "Jane Seymour", "Anne Boleyn", "Catherine of Aragon", "Anne of Cleves"),
    new Question("Who was President of the United States when Neil Armstrong first set foot upon the moon?", "Richard Nixon", "John F. Kennedy", "Lyndon B. Johnson", "Gerald Ford"),
    new Question("Which is NOT one of the seven Wonders of the Ancient World?", "Macchu Pichu", "Lighthouse of Alexandria", "Mausoleum at Halicarnassus", "Statue of Zeus at Olympia"),
    new Question("In which century was the Statue of Liberty dedicated to the United States as a gift from France?", "19th century", "17th century", "18th century", "20th century"),
    new Question("Who or what is the ‘Flying Dutchman’?", "A ghost ship/the captain of the ship", "Johann Hessenlink (WWI pilot)", "Bram van der Stok (WWII pilot)", "Amsterdam (Ship-of-the-Line"),
    new Question("Who was the first person to complete a solo flight across the Atlantic Ocean?", "Charles A. Lindbergh", "Amelia Earhart", "Richard Byrd", "Ludwik Idzikowski"),
    new Question("Which American battle is sometimes referred to as Custer’s Last Stand?", "Battle of the Little Bighorn", "Battle of Bull Run", "Battle of Antietam", "Battle of Gettysburg"),
    new Question("Which is the only one of the Seven Wonders of the Ancient World to still be standing?", "The Great Pyramid at Giza", "The Hanging Gardens of Babylon", "The Temple of Artemis at Ephesus", "The Colossus of Rhodes"),
    new Question("In which year was Abraham Lincoln assassinated?", "1865", "1862", "1863", "1864"),
    new Question("In which U.S. city did Martin Luther King Jr. deliver his famous ‘I Have A Dream’ speech in 1963?", "Washington D.C.", "Memphis, TN", "New York, NY", "Atlanta, GA"),
    new Question("Which of Adolf Hitler’s cabinet held the post of ‘Minister of Public Enlightenment and Propaganda’?", "Joseph Goebbels", "Hermann Göring", "Heinrich Himmler", "Albert Speer"),
    new Question("Which American political protest took place on December 16th 1773?", "Boston Tea Party", "The March on Washington", "Pontiac's Rebellion", "Publication of 'Association of the Sons of Liberty'"),
    new Question("Who did Ronald Reagan succeed as President of the USA?", "Jimmy Carter", "Richard Nixon", "Gerald Ford", "George Bush"),
    new Question("What was the name of the galleon in which Sir Francis Drake circumnavigated the globe between 1577 and 1580?", "The Golden Hind", "Whydah", "Ark Royal", "The Batavia"),
    new Question("Who succeeded George Washington as President of the United States?", "John Adams", "Thomas Jefferson", "James Madison", "Andrew Jackson"),
    new Question("How was New York known prior to 1664?", "New Amsterdam", "New Berlin", "New London", "New Paris"),
    new Question("Which famous German fighter pilot was shot down and killed on 21st April 1918?", "Manfred von Richthofen", "Werner Voss", "Lothar von Richthofen", "Kurt Wolff"),
    new Question("Who was President of the United States when the National Prohibition Act was passed in 1919?", "Woodrow Wilson", "Grover Cleveland", "Theodore Roosevelt", "Herbert Hoover"),
    new Question("In which year was Nelson Mandela released from prison?", "1990", "1991", "1992", "1993"),
    new Question("Who succeeded Richard III as King of England in 1485?", "Henry VII", "Edward IV", "William III", "George II"),
    new Question("Who was the oldest person to assume office as the President of the United States?", "Ronald Reagan", "George Bush", "John Quincy Adams", "William Henry Harrison"),
    new Question("Who was the first leader of the Soviet Union?", "Vladimir Lenin", "Josef Stalin", "Nikita Khrushchev", "Alexei Rykov"),
    new Question("Who commissioned the Arc de Triomphe?", "Napoleon I", "Charles de Gaulle", "Louis XVI", "Napoleon III"),
    new Question("Abraham Lincoln was assassinated in 1865 in Ford’s Theatre in which U.S. city?", "Washington D.C.", "Philadelphia, PA", "New York, NY", "Baltimore, MD"),
    new Question("Which U.S. naval base was attacked by the Imperial Japanese Navy on December 7th 1941?", "Pearl Harbor", "Midway", "Guam", "Guadalcanal"),
    new Question("In which year was the assassination of Archduke Ferdinand?", "1914", "1917", "1936", "1939"),
    new Question("In which year did Martin Luther King Jr. make his 'I have a dream' speech?", "1963", "1960", "1961", "1962"),
    new Question("In which year was Battle of Waterloo?", "1815", "1814", "1816", "1817"),
    new Question("In which year was the sinking of the Titanic?", "1912", "1892", "1902", "1922"),
    new Question("In which year did Sir Edmund Hillary reach the summit of Mount Everest", "1953", "1933", "1938", "1958"),
    new Question("In which year did American athlete Jesse Owens win four gold medals at the Berlin Olympics?", "1936", "1928", "1932", "1924"),
    new Question("Which is the oldest university in England?", "Oxford", "Cambridge", "Warwick", "Manchester"),
  ],
  started: false,
  right:   0,
  wrong:   0,
  count:   0,
  end:     10,
  time:    10,
  start_game: function ()
  {

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
    var unused_questions = this.questions.filter(q => q.used != true);
    var random_index = Math.floor(Math.random() * unused_questions.length);
    var next_q = unused_questions[random_index];
    var answers = [next_q.answer];

    // mark this question used
    var q_idx = this.questions.indexOf(next_q);
    this.questions[q_idx].used = true;

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
      // make the list of answers for the card
      // Model Item:  <li class="list-group-item">Cras justo odio</li>
    }
  },
}

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
