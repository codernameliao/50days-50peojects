const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')
const data = {
    joke1: '// Joke goes here',
    joke2: '你好美哦',
    joke3: '我们明天一起学习吧',
    joke4: 'A man walks into a bar and orders helicopter flavor chips. The barman replies “sorry mate we only do plain”',
    joke5: 'When my wife told me to stop impersonating a flamingo, I had to put my foot down.',
    joke6: '"How do you organize a space party? You planet."',
}
var joke = 0;
var jokes;


jokeBtn.addEventListener('click', () => {
    joke++;
    if (joke > 6) { joke = 1 }
    jokes = 'joke' + joke
    jokeEl.innerHTML = data[jokes]
})